import hash from 'object-hash';
import axios from 'axios';
import {fromBech32} from '@harmony-js/crypto';
import { isBech32Address } from '@harmony-js/utils';
import _ from 'lodash';
import {assert} from './utils';

// These args should remain constant across cached calls
const getPageArgs = {
  pageSize: 1000,
  fullTx: true,
  txType: 'ALL',
  order: 'ASC',
};
const getPageArgsHash = hash(getPageArgs);


const rpc = 'https://api.s0.t.hmny.io/';
async function _getTransactionsHistory(address, pageIndex = 0) {
  const checksumAddress = isBech32Address(address) ? fromBech32(address) : address;

  const data = {
      jsonrpc: '2.0',
      id: '1',
      method: 'hmyv2_getTransactionsHistory',
      params: [_.extend({}, getPageArgs, {
          address: checksumAddress,
          pageIndex: pageIndex,
      })]
  };

  const response = await axios.post(rpc, data);

  if (response.status === 200 && response.data) {
      return response.data.result.transactions;
  } else throw new Error();
}

async function _getTransactionReceipt(hash) {
    const data = {
        jsonrpc: '2.0',
        id: '1',
        method: 'hmyv2_getTransactionReceipt',
        params: [hash]
    };

    const response = await axios.post(rpc, data);

    if (response.status === 200 && response.data) {
      return response.data.result;
    } else throw new Error();
}

async function _getTransactionByHash(hash) {
    const data = {
        jsonrpc: '2.0',
        id: '1',
        method: 'hmyv2_getTransactionByHash',
        params: [hash]
    };

    const response = await axios.post(rpc, data);

    if (response.status === 200 && response.data) {
      return response.data.result;
    } else throw new Error();
}

/*
async function getBalanceByBlockNumber(address, blockNumber) {
    const data = {
        jsonrpc: '2.0',
        id: '1',
        method: 'hmyv2_getBalanceByBlockNumber',
        params: [toBech32(address), `0x${blockNumber.toString(16)}`]
    };

    const response = await axios.post(rpc, data);

    if (response.status === 200 && response.data) {
      return response.data.result;
    } else throw new Error();
}
*/



/*
 * Cache Data models:
 *
txsByAddrCache = {
  [addr]: {
    [getPageArgsHash]: {
      lastCachedPageIndex:
      transactionHashes:
    }
  }
}

txCache = {
  [hash]: {tx, receipt}
}
*/

let txsByAddrCache = JSON.parse(localStorage.getItem('__v2_txsByAddrCache') || '{}');
let txCache = JSON.parse(localStorage.getItem('__v2_txCache') || '{}');

async function cacheTransactionsForAddressUntilPageIndex(addr, pageIndex) {
  // Cache only works with this assumption
  assert(() => getPageArgs.order === 'ASC');

  while (true) {
    txsByAddrCache[addr] ||= {};
    txsByAddrCache[addr][getPageArgsHash] ||= {lastCachedPageIndex: -1, transactionHashes: {}};

    if (pageIndex <= txsByAddrCache[addr][getPageArgsHash].lastCachedPageIndex) {
      break;
    }

    const nextIndex = txsByAddrCache[addr][getPageArgsHash].lastCachedPageIndex + 1;
    const pageTransactions = await _getTransactionsHistory(addr, nextIndex);

    if (pageTransactions.length === 0) {
      break;
    }

    await Promise.all(pageTransactions.map(async (tx) => {
      await addToCache(tx);
      txsByAddrCache[addr][getPageArgsHash].transactionHashes[tx.hash] = true;
    }));

    txsByAddrCache[addr][getPageArgsHash].lastCachedPageIndex = nextIndex;
  }

  localStorage.setItem('__v2_txsByAddrCache', JSON.stringify(txsByAddrCache));
  localStorage.setItem('__v2_txCache', JSON.stringify(txCache));
}

async function addToCache(tx) {
  if (tx.hash in txCache && !_.isEmpty(txCache[tx.hash])) {
    return;
  }
  txCache[tx.hash] = {tx: tx, receipt: await getTransactionReceipt(tx.hash)};
}


export async function getTransactionReceipt(hash) {
  if (hash in txCache) {
    return txCache[hash].receipt;
  }

  return _getTransactionReceipt(hash);
}

export async function getTransactionsHistory(addr, pageIndex = 0) {
  await cacheTransactionsForAddressUntilPageIndex(addr, pageIndex);
  return _.keys(txsByAddrCache[addr][getPageArgsHash].transactionHashes).map(hash =>
    txCache[hash].tx
  );
}


export async function getTransactionByHash(hash) {
  if (hash in txCache) {
    return txCache[hash].tx;
  }

  return _getTransactionByHash(hash);
}
