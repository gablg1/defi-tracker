import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import { useParams } from 'react-router-dom';
import hash from 'object-hash';

import _ from 'lodash';
import { LinkWithAddr, InfoTooltip, assert, addSign, formatAddress, transactionExplorerLink, formatTokenValue, formatContractCall, truncateLongString, truncateLongAddressCopiable, stringifyJsonWithBigInts, parseJsonWithBigInts} from './utils';
import {getTransactionByHash, getTransactionsHistory, getTransactionReceipt} from './transactions-fetcher';

import {Balances} from './accounting';

const { SearchBar } = Search;

/* global BigInt */


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
        return <LinkWithAddr addr={worldState.defaultAddr} to={`/tx/${cellContent}`}>{truncateLongString(cellContent)}</LinkWithAddr>
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
      dataField: 'effectOfTransaction',
      text: 'Tx Effect',
      formatter: (cellContent, row) => {
        if (cellContent instanceof Error) {
          return <div style={{background: 'purple'}}>{cellContent.message}</div>
        }

        return (
          <ul className="list-arrow">
          {_.map(cellContent?.toJson() || {}, (balance, token) =>
            <li key={token}>
              {token}:
              <strong> {addSign(formatTokenValue(balance, ''))}</strong>
            </li>

          )}
          </ul>
        );
    }}, {
      dataField: 'stateAfter',
      text: 'Balances After',
      formatter: (cellContent, row) => {
        if (cellContent instanceof Error) {
          return <div style={{background: 'purple'}}>{cellContent.message}</div>
        }

        return (
          <ul className="list-arrow">
          {_.map(cellContent?.toJson() || {}, (balance, token) =>
            <li key={token}>{token}:<strong> {addSign(formatTokenValue(balance, ''))}</strong></li>
          )}
          </ul>
        );
    }}, {
      dataField: 'receipt',
      text: 'Receipt',
      formatter: (cellContent, row) => JSON.stringify(cellContent)
    }, {
      dataField: 'inputArgs',
      text: 'Args',
      formatter: (__, row) => {
        const call = worldState.decodeContractCall(row.input, row.contractAddress);
        return call ? formatContractCall(call) : truncateLongAddressCopiable(row.input);
      }
    }
  ];
};


const _enhanceTransaction = (tx, rawReceipt, worldState) => {
  if (_.isEmpty(tx)) {
    return tx;
  }

  let enhancedTx = _.extend({}, tx, {
    receipt: rawReceipt,
    methodCall: worldState.decodeContractCall(tx.input, tx.to),
  });

  if (_.isEmpty(rawReceipt)) {
    return enhancedTx;
  }

  const receipt = (worldState.findContract(enhancedTx.to))
    ? _.extend({}, rawReceipt, {decodedLogs: worldState.decodeReceiptLogs(rawReceipt.logs)})
    : rawReceipt;
  _.extend(enhancedTx, {
    receipt: receipt,
    gasFeePaid: BigInt(enhancedTx.gasPrice) * BigInt(receipt.gasUsed),
    events: receipt.decodedLogs?.map((evt, i) => {
      if (evt.decoded) {
        let args = {};
        for (const arg of evt.events) {
          args[arg.name] = {type: arg.type, value: arg.value};
        }
        return {
          decoded: true,
          timestamp: `${tx.timestamp},${i}`,
          name: evt.name,
          args: args,
          contractAddress: evt.address,
          contract: worldState.findContract(evt.address),
          tx: tx,
        };
      } else {
        return {
          decoded: false,
          timestamp: `${tx.timestamp},${i}`,
          rawLog: evt,
          contractAddress: evt.address,
          contract: worldState.findContract(evt.address),
          tx: tx,
        };
      }
    })
  })
  return _.extend(enhancedTx, {effectOfTransaction: worldState.effectOfTransaction(enhancedTx)});
}

let enhanceCache = {};

const enhanceTransaction = (rawTx, rawReceipt, worldState, stateAfterPrevTx) => {
  if (_.isEmpty(rawReceipt)) {
    return rawTx;
  }

  const hashPrevState = hash(stateAfterPrevTx);
  if (rawTx.hash in enhanceCache && hashPrevState in enhanceCache[rawTx.hash]) {
    return enhanceCache[rawTx.hash][hashPrevState];
  }


  let tx = _enhanceTransaction(rawTx, rawReceipt, worldState);
  if (stateAfterPrevTx instanceof Error) {
    tx.stateAfter = stateAfterPrevTx;
    enhanceCache[rawTx.hash] ||= {};
    enhanceCache[rawTx.hash][hashPrevState] = tx;
    return tx;
  }
  const effect = worldState.effectOfTransaction(tx);
  tx.stateAfter = effect instanceof Error ? effect : stateAfterPrevTx.plus(effect);

  enhanceCache[rawTx.hash] ||= {};
  enhanceCache[rawTx.hash][hashPrevState] = tx;
  return tx;
}

export function useTransactionsForAddress(addr, worldState) {
  const [fetchedTransactions, setFetchedTransactions] = useState([]);
  const [fetchedReceipts, setFetchedReceipts] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReceipt(hash) {
      const receipt = await getTransactionReceipt(hash);
      setFetchedReceipts(prevState => _.extend({}, prevState, {[hash]: receipt}));
    }

    async function fetchTransactions() {
      console.log('Fetching transactions');
      const txData = await getTransactionsHistory(addr);
      console.log('Fetched transactions');
      console.log(txData);

      setFetchedTransactions(txData);
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

  useEffect(() => {
    setFetchedTransactions([]);
    setFetchedReceipts({});
    setLoading(true);
  }, [addr]);


  const sortedTransactions = _.sortBy(fetchedTransactions, 'timestamp');
  let prevState = new Balances({});
  let enhancedTransactions = [];
  for (const tx of sortedTransactions) {
    const eTx = enhanceTransaction(tx, fetchedReceipts[tx.hash], worldState, prevState || new Balances({}));
    enhancedTransactions.push(eTx);
    prevState = eTx.stateAfter;
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

  return [isLoading, enhanceTransaction(rawTx, rawReceipt, worldState, new Balances({}))];
}

export function TransactionsViewer(props) {
  const [, isLoadingReceipts, transactions] = useTransactionsForAddress(props.worldState.defaultAddr, props.worldState);
  const shouldWriteData = false;
  if (!isLoadingReceipts && shouldWriteData) {
    console.log(JSON.stringify(transactions, (key, value) =>
            typeof value === 'bigint'
                ? {ty: 'bigint', value: value.toString()}
                : value // return everything else unchanged));
    ));
  }

  const dataFieldsToInclude = ['timestamp', 'methodCall', 'value', 'hash', 'from', 'to', 'stateAfter', 'effectOfTransaction'];
  const cols = buildColumns(props.worldState).filter(col => dataFieldsToInclude.includes(col.dataField));
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          Transactions
        </h3>
        <InfoTooltip title={'Transactions'}>
          This page shows all transactions related to the address you entered. It also applies Balance Rules and Price Fetchers to derive the effect of each transaction on your overall balance.
        </InfoTooltip>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Transactions</h4>
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

  const events = (transaction.events || []).map(evt =>
    _.extend({}, evt, {rules: props.worldState.rulesThatApply(evt, transaction)})
  );

  const eventsLoading = !_.isArray(transaction.events);
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
                    {events.map((evt, i) =>
                      <tr key={i}>
                        <td>{formatAddress(evt.contract.address, props.worldState)}</td>
                        <td>{evt.name}</td>
                        <td>
                        {_.map(evt.args, (arg, name) =>
                          <div key={name}>
                          {`${name}: ${arg.value}`}
                          </div>
                        )}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                {eventsLoading && <div>Loading events...</div>}
                {!eventsLoading && events.length === 0 && <div>Transaction has no events</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
