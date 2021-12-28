import hash from 'object-hash';

/*
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


const getPageArgs = {
  pageSize: ...
};
const getPageArgsHash = hash(getPageArgs);


async function getNextPage() {
  const getPageArgs
}

async function getTransactionsForContract(addr) {
  while (true) {
    if (!(addr in txsByAddr)) {
      txsByAddr[addr] = {};
    }

    if (!(getPageArgsHash in txsByAddr[addr])) {
      txsByAddr[addr][getPageArgsHash] = {lastCachedPageIndex: -1, transactionHashes: {}};
    }

    const nextIndex = txsByAddrCache[addr][getPageArgsHash].lastCachedPageIndex + 1;
    const page = await getNextPage(nextIndex);

    if (page.transactions.length === 0) {
      break;
    }

    await Promise.all(page.transactions.map(addToCache));

    txsByAddrCache[addr][getPageArgsHash].lastCachedPageIndex = nextIndex;
  }
}

async function addToCache(tx) {

  if (!(tx.hash in txCache) || _.isEmpty(txCache[tx.hash])) {
    txCache[tx.hash] = {tx: tx, receipt: await fetchReceipt(tx.hash)};
  }

  txsByAddrCache[addr][getPageArgsHash].transactionHashes[tx.hash] = true;

  return true;
}

