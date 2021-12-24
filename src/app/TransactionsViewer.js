import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import { Link, useParams } from 'react-router-dom';

import _ from 'lodash';
import {fromBech32, toBech32} from '@harmony-js/crypto';
import { isBech32Address } from '@harmony-js/utils';
import axios from 'axios';
import { Copiable, transactionExplorerLink, AddressExplorer, formatTokenValue, formatContractCall, truncateLongString, truncateLongAddressCopiable, addressesEqual } from './utils';

import {GeneralLedger} from './accounting';

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






const defaultSorted = [{
  dataField: 'timestamp',
  order: 'desc'
}];

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
const buildColumns = (worldState) => {
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
      dataField: 'input',
      text: 'Method',
      sort: true,
      formatter: (cellContent, row) => {
        const call = worldState.decodeContractCall(cellContent);
        const badge = (text) => <div className="badge badge-pill badge-info">{text}</div>;
        return call ? badge(call.name) : truncateLongAddressCopiable(cellContent);
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
      formatter: (cellContent, row) => cellContent ? formatTokenValue(cellContent.one || 0, 'ONE') : '',
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

function formatAddress(addr, worldState) {
  if (addressesEqual(addr, worldState.defaultAddr)) {
    return (
      <Copiable textToCopy={addr} tooltipText={'Click to copy address'}>
        <i className="fa fa-user-circle-o" />
        <span style={{marginLeft: 5}}>Me</span>
      </Copiable>
    );
  }

  const contract = worldState.findContract(addr);
  return (
    <AddressExplorer hash={addr} blockchain={contract?.blockchain || blockchain}
      display={
        <div style={{display: 'flex'}}>
          {contract && <i className="fa fa-file-text-o"/>}
          <span style={{marginLeft: 5}}>
            {contract?.name || truncateLongString(addr)}
          </span>
        </div>
    } />
  );
}


export function TransactionsViewer(props) {
  const [transactions, setTransactions] = useState([]);
  const [transactionReceipts, setTransactionReceipts] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReceipt(hash) {
      const receipt = await getTransactionReceipt(hash);
      setTransactionReceipts(prevState => _.extend({}, prevState, {[hash]: receipt}));
    }

    async function fetchTransactions() {
      const txData = await getTransactionsHistory(props.worldState.defaultAddr);

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

  }, [props.worldState.defaultAddr, isLoading]);

  let enhancedTransactions = transactions.map(tx => {
    const rawReceipt = transactionReceipts[tx.hash];
    if (_.isEmpty(rawReceipt)) {
      return _.extend({}, tx, {receipt: rawReceipt});
    }
    const receipt = (props.worldState.findContract(tx.to))
      ? _.extend({}, rawReceipt, {decodedLogs: props.worldState.decodeReceiptLogs(rawReceipt.logs)})
      : rawReceipt;
    return _.extend({}, tx, {receipt: receipt, gasFeePaid: BigInt(tx.gasPrice) * BigInt(receipt.gasUsed)})
  });

  enhancedTransactions = _.sortBy(enhancedTransactions, 'timestamp');
  const gl = new GeneralLedger(props.worldState);
  for (const tx of enhancedTransactions) {
    if (!tx.receipt) {
      break;
    }

    gl.processBlockchainTransaction(tx);
    const i = enhancedTransactions.indexOf(tx);
    tx.stateAfter = gl.stateAfterTransaction(i);
  }

  const cols = buildColumns(props.worldState).filter(col =>
    ['timestamp', 'input', 'value', 'gasFeePaid', 'hash', 'blockNumber', 'from', 'to', 'stateAfter', 'receipt'].includes(col.dataField)
  );

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
                    keyField="hash"
                    bootstrap4
                    data={ enhancedTransactions }
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
                            defaultSorted={ defaultSorted }
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
      fetchTransaction(txHash);
      fetchReceipt(txHash);
    }

  }, [txHash, isLoading]);

  if (isLoading || rawTx === undefined) {
    return <div>Loading...</div>;
  }

  const transaction = (_.isEmpty(rawReceipt) || !props.worldState.findContract(rawTx.to))
    ? rawTx
    : _.extend({}, rawTx, {
      receipt: _.extend({}, rawReceipt, {decodedLogs: props.worldState.decodeReceiptLogs(rawReceipt.logs)})
  });

  const cols = buildColumns(props.worldState).filter(col =>
    ['timestamp', 'input', 'value', 'hash', 'blockNumber', 'from', 'to'].includes(col.dataField)
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
                    {transaction.receipt?.decodedLogs.map((log, i) =>
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
