import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';

import _ from 'lodash';
import {fromBech32} from '@harmony-js/crypto';
import { isBech32Address } from '@harmony-js/utils';
import axios from 'axios';
import { TransactionExplorer, AddressExplorer, formatTokenValue, formatContractCall, truncateLongAddressCopiable } from './utils';

const { SearchBar } = Search;

const rpc = 'https://api.harmony.one/';
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



const defaultSorted = [{
  dataField: 'timestamp',
  order: 'desc'
}];

export function TransactionsViewer(props) {
  const [transactions, setTransactions] = useState([]);
  const [transactionReceipts, setTransactionReceipts] = useState({});
  const [isLoading, setLoading] = useState(true);

  // FIXME: Make the blockchain configurable in the UI
  const blockchain = 'Harmony';
  useEffect(() => {
    async function fetchReceipt(hash) {
      const receipt = await getTransactionReceipt(hash);
      setTransactionReceipts(prevState => _.extend({}, prevState, {[hash]: receipt}));
    }

    async function fetchTransactions() {
      const txData = await getTransactionsHistory(props.worldState.defaultAddr);

      setTransactions(txData);
      setLoading(false);

      // Asynchronously fetch receipts
      _.forEach(txData, tx => fetchReceipt(tx.hash));

    }
    if (isLoading) {
      fetchTransactions();
    }

  }, [props.worldState.defaultAddr, isLoading]);

  const enhancedTransactions = transactions.map(tx => {
    const rawReceipt = transactionReceipts[tx.hash];
    if (_.isEmpty(rawReceipt) || !props.worldState.findContract(tx.to)) {
      return tx;
    }
    const decodedReceipt = _.extend({}, rawReceipt, {decodedLogs: props.worldState.decodeReceiptLogs(rawReceipt.logs)});
    return _.extend({}, tx, {receipt: decodedReceipt})
  });

  const cols = [
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
        const call = props.worldState.decodeContractCall(cellContent);
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
      dataField: 'hash',
      text: 'Transaction Hash',
      sort: true,
      formatter: (cellContent, row) => {
        return <TransactionExplorer hash={cellContent} blockchain={blockchain} />;
      }
    }, {
      dataField: 'blockNumber',
      text: 'Block number',
      sort: true
    }, {
      dataField: 'from',
      text: 'From',
      sort: true,
      formatter: (cellContent, row) => {
        return truncateLongAddressCopiable(cellContent)
      }
    }, {
      dataField: 'to',
      text: 'To',
      sort: true,
      formatter: (cellContent, row) => {
        const contract = props.worldState.findContract(cellContent);
        if (contract) {
          return <AddressExplorer hash={cellContent} blockchain={contract.blockchain}
            display={
              <div style={{display: 'flex'}}>
                <i className="fa fa-file-text-o"/><span style={{marginLeft: 5}}>{contract.name}</span>
              </div>
            } />;
        }
        return truncateLongAddressCopiable(cellContent)
      }
    }, {
      dataField: 'receipt',
      text: 'Receipt Logs',
      formatter: (cellContent, row) => {
        return JSON.stringify(cellContent);
      }
    }, {
      dataField: 'inputArgs',
      text: 'Args',
      formatter: (__, row) => {
        const call = props.worldState.decodeContractCall(row.input);
        return call ? formatContractCall(call) : truncateLongAddressCopiable(row.input);
      }
    }
  ]

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

export default TransactionsViewer;
