import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import { Link, useParams } from 'react-router-dom';

import _ from 'lodash';
import {fromBech32, toBech32} from '@harmony-js/crypto';
import { isBech32Address } from '@harmony-js/utils';
import axios from 'axios';
import { addSign, formatAddress, assert, Copiable, transactionExplorerLink, AddressExplorer, formatTokenValue, formatContractCall, truncateLongString, truncateLongAddressCopiable, addressesEqual } from './utils';

import {GeneralLedger} from './accounting';

import cachedTxDataString from './data';

const cachedTxs = JSON.parse(cachedTxDataString, (key, value) => {
  if (value.ty === 'bigint') {
    return BigInt(value.value);
  }
  return value;
});

const cachedTxsByAddress = {
  '0xEba220F7256B2F5e5d73dB6dDA83c99c1D916570': cachedTxs,
};

let cachedReceiptsByHash = {};
_.forEach(_.flatten(_.values(cachedTxsByAddress)), (tx) => cachedReceiptsByHash[tx.hash] = tx.receipt);

const { SearchBar } = Search;

/* global BigInt */

const rpc = 'https://api.s0.t.hmny.io/';
async function getTransactionsHistory(address, filters) {
  const checksumAddress = isBech32Address(address) ? fromBech32(address) : address;

  const data = {
      jsonrpc: '2.0',
      id: '1',
      method: 'hmyv2_getTransactionsHistory',
      params: [{
          address: checksumAddress,
          pageIndex: filters?.page || 0,
          pageSize: filters?.pageSize || 100000,
          fullTx: true,
          txType: filters?.type || 'ALL',
          order: filters?.order
      }]
  };

  const response = await axios.post(rpc, data);

  if (response.status === 200 && response.data) {
      return response.data.result.transactions;
  } else throw new Error();
}

async function getTransactionReceipt(hash) {
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

async function getTransactionByHash(hash) {
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


// FIXME: Make the blockchain configurable in the UI
const blockchain = 'Harmony';


/*
 * Here is the type of a transaction. The last args after the space are "enhanced"
{
  timestamp:
  input:
  value:
  hash:
  blockNumber:
  from:
  to:

  inputArgs:
  receipt:
}
 *
 **/
export const buildColumns = (worldState) => {
  return [
    {
      dataField: 'timestamp',
      text: 'Timestamp',
      sort: true,
      formatter: (cellContent, row) => {
        const date = new Date(0);
        date.setUTCSeconds(cellContent);
        return date.toLocaleString();
      }
    }, {
      dataField: 'methodCall',
      text: 'Method',
      sort: true,
      formatter: (cellContent, row) => {
        return (cellContent)
          ? <div className="badge badge-pill badge-info">{cellContent.name}</div>
          : truncateLongAddressCopiable(row.input);
      }
    }, {
      dataField: 'value',
      text: 'Value',
      sort: true,
      formatter: (cellContent, row) => {
        return formatTokenValue(cellContent, 'ONE');
      }
    }, {
      dataField: 'gasFeePaid',
      text: 'Gas Fee',
      sort: true,
      formatter: (cellContent, row) => {
        return cellContent ? formatTokenValue(cellContent, 'ONE', 5) : '';
      }
    }, {
      dataField: 'hash',
      text: 'Tx Hash',
      sort: true,
      formatter: (cellContent, row) => {
        return <Link to={`/tx/${cellContent}`}>{truncateLongString(cellContent)}</Link>
      }
    }, {
      dataField: 'blockNumber',
      text: 'Block #',
      sort: true
    }, {
      dataField: 'from',
      text: 'From',
      sort: true,
      formatter: (cellContent, row) => formatAddress(cellContent, worldState)
    }, {
      dataField: 'to',
      text: 'To',
      sort: true,
      formatter: (cellContent, row) => formatAddress(cellContent, worldState)
    }, {
      dataField: 'stateAfter',
      text: 'State After',
      formatter: (cellContent, row) =>
        <div>
        {_.map(cellContent, (balance, token) =>
          <div key={token}>{token}: {addSign(formatTokenValue(balance, ''))}</div>
        )}
        </div>
    }, {
      dataField: 'receipt',
      text: 'Receipt',
      formatter: (cellContent, row) => JSON.stringify(cellContent)
    }, {
      dataField: 'inputArgs',
      text: 'Args',
      formatter: (__, row) => {
        const call = worldState.decodeContractCall(row.input);
        return call ? formatContractCall(call) : truncateLongAddressCopiable(row.input);
      }
    }
  ];
};


const enhanceTransaction = (tx, rawReceipt, worldState) => {
  if (_.isEmpty(tx)) {
    return tx;
  }

  let enhancedTx = _.extend({}, tx, {
    receipt: rawReceipt,
    methodCall: worldState.decodeContractCall(tx.input),
  });

  if (_.isEmpty(rawReceipt)) {
    return enhancedTx;
  }

  const receipt = (worldState.findContract(enhancedTx.to))
    ? _.extend({}, rawReceipt, {decodedLogs: worldState.decodeReceiptLogs(rawReceipt.logs)})
    : rawReceipt;
  return _.extend(enhancedTx, {
    receipt: receipt,
    gasFeePaid: BigInt(enhancedTx.gasPrice) * BigInt(receipt.gasUsed),
    events: receipt.decodedLogs?.map((evt, i) => {
      let args = {};
      for (const arg of evt.events) {
        args[arg.name] = {type: arg.type, value: arg.value};
      }
      return {
        timestamp: `${tx.timestamp},${i}`,
        name: evt.name,
        args: args,
        contractAddress: evt.address,
        contract: worldState.findContract(evt.address),
        tx: enhancedTx,
      };
    }),
  })
}

export function useTransactionsForAddress(addr, worldState) {
  const [transactions, setTransactions] = useState(cachedTxsByAddress[addr] || []);
  const [transactionReceipts, setTransactionReceipts] = useState(cachedReceiptsByHash);
  const [isLoading, setLoading] = useState(!(addr in cachedTxsByAddress));

  useEffect(() => {
    async function fetchReceipt(hash) {
      const receipt = await getTransactionReceipt(hash);
      setTransactionReceipts(prevState => _.extend({}, prevState, {[hash]: receipt}));
    }

    async function fetchTransactions() {
      const txData = await getTransactionsHistory(addr);

      setTransactions(txData);
      setLoading(false);

      // Asynchronously fetch receipts and other metadata
      _.forEach(txData, tx => {
        fetchReceipt(tx.hash)
      });

    }
    if (isLoading) {
      fetchTransactions();
    }

  }, [addr, isLoading]);

  let enhancedTransactions = transactions.map(tx => enhanceTransaction(tx, transactionReceipts[tx.hash], worldState));
  enhancedTransactions = _.sortBy(enhancedTransactions, 'timestamp');
  const gl = new GeneralLedger(worldState);
  for (const tx of enhancedTransactions) {
    if (!tx.receipt) {
      break;
    }

    try {
      gl.processBlockchainTransaction(tx);
      const i = enhancedTransactions.indexOf(tx);
      tx.stateAfter = gl.stateAfterTransaction(i).toJson();
    } catch(err) {
      console.warn(err);
      console.warn("Error while computing state. See above");
      break;
    }
  }

  const isLoadingReceipts = _.some(enhancedTransactions, tx => _.isEmpty(tx.receipt));
  return [isLoading, isLoadingReceipts, enhancedTransactions];
}

export function useTransaction(hash, worldState) {
  const [rawReceipt, setRawReceipt] = useState(undefined);
  const [rawTx, setRawTx] = useState(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReceipt(hash) {
      setRawReceipt(await getTransactionReceipt(hash));
    }

    async function fetchTransaction(hash) {
      setRawTx(await getTransactionByHash(hash));
      setLoading(false);
    }

    if (isLoading) {
      fetchTransaction(hash);
      fetchReceipt(hash);
    }

  }, [hash, isLoading]);

  return [isLoading, enhanceTransaction(rawTx, rawReceipt, worldState)];
}

export function TransactionsViewer(props) {
  const [isLoading, isLoadingReceipts, transactions] = useTransactionsForAddress(props.worldState.defaultAddr, props.worldState);
  const shouldWriteData = false;
  if (!isLoadingReceipts && shouldWriteData) {
    console.log(JSON.stringify(transactions, (key, value) =>
            typeof value === 'bigint'
                ? {ty: 'bigint', value: value.toString()}
                : value // return everything else unchanged));
    ));
  }

  const dataFieldsToInclude = ['timestamp', 'methodCall', 'value', 'gasFeePaid', 'hash', 'blockNumber', 'from', 'to', 'stateAfter'];
  const cols = buildColumns(props.worldState).filter(col => dataFieldsToInclude.includes(col.dataField));

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          Data table
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data Tables</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Data Table</h4>
              <div className="row">
                <div className="col-12">
                  <ToolkitProvider
                    sizePerPage={50}
                    keyField="hash"
                    bootstrap4
                    data={ transactions }
                    columns={ cols }
                    search={{searchFormatted: true}}
                  >
                    {
                      props => (
                        <div>
                          <div className="d-flex align-items-center">
                            <p className="mb-2 mr-2">Search in table:</p>
                            <SearchBar { ...props.searchProps } />
                          </div>
                          <BootstrapTable
                            defaultSorted={[{dataField: 'timestamp', order: 'desc'}]}
                            pagination={ paginationFactory() }
                            { ...props.baseProps }
                            wrapperClasses="table-responsive"
                          />
                        </div>
                      )
                    }
                  </ToolkitProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function SingleTransactionViewer(props) {
  let { txHash } = useParams();

  const [isLoading, transaction] = useTransaction(txHash, props.worldState);

  if (isLoading || _.isEmpty(transaction.receipt)) {
    return <div>Loading...</div>;
  }

  const cols = buildColumns(props.worldState).filter(col =>
    ['timestamp', 'methodCall', 'value', 'hash', 'blockNumber', 'from', 'to'].includes(col.dataField)
  );
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          Transaction
        </h3>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4 className="card-title">Basic data</h4>
                <a target="_blank" rel="noopener noreferrer"  style={{fontSize: '0.8rem'}} href={transactionExplorerLink(txHash, blockchain)}>
                  <i style={{marginRight: 5}} className="fa fa-external-link" />
                  View on Block Explorer
                </a>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      {cols.map(col => <th key={col.dataField}>{col.text}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {cols.map(col =>
                        <td key={col.dataField}>
                          {col.formatter === undefined ? transaction[col.dataField] : col.formatter(transaction[col.dataField], transaction)}
                        </td>)}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4 className="card-title">Transaction Logs</h4>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Contract</th>
                      <th>Event</th>
                      <th>Args</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(transaction.receipt?.decodedLogs || []).map((log, i) =>
                      <tr key={i}>
                        <td>{formatAddress(log.address, props.worldState)}</td>
                        <td>{log.name}</td>
                        <td>
                        {log.events.map(e =>
                          <div>
                          {`${e.name}: ${e.value}`}
                          </div>
                        )}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
