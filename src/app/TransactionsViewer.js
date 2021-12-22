import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';

import {fromBech32} from '@harmony-js/crypto';
import { isBech32Address } from '@harmony-js/utils';
import axios from 'axios';
import { formatContractCall, truncateLongAddress } from './utils';

const { SearchBar } = Search;

async function getTransactionsHistory(address, filters) {
  const checksumAddress = isBech32Address(address) ? fromBech32(address) : address;
  const rpc = 'https://api.harmony.one/';

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


const defaultSorted = [{
  dataField: 'timestamp',
  order: 'desc'
}];

export function TransactionsViewer(props) {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTransactions() {
      const txData = await getTransactionsHistory(props.worldState.defaultAddr);
      setTransactions(txData);
      setLoading(false);
      console.log(txData);

    }
    if (isLoading) {
      fetchTransactions();
    }

  }, [isLoading]);

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
        return call ? badge(call.name) : truncateLongAddress(cellContent);
      }
    }, {
      dataField: 'hash',
      text: 'Transaction Hash',
      sort: true,
      formatter: (cellContent, row) => {
        return <a href={`https://explorer.harmony.one/tx/${cellContent}`}>{truncateLongAddress(cellContent)}</a>
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
        return truncateLongAddress(cellContent)
      }
    }, {
      dataField: 'to',
      text: 'To',
      sort: true,
      formatter: (cellContent, row) => {
        const contract = props.worldState.findContract(cellContent);
        if (contract) {
          return <a target="_blank" href={`https://explorer.harmony.one/address/${cellContent}`}>{contract.name}</a>
        }
        return truncateLongAddress(cellContent)
      }
    }, {
      dataField: 'input',
      text: 'Args',
      formatter: (cellContent, row) => {
        const call = props.worldState.decodeContractCall(cellContent);
        return call ? formatContractCall(call) : truncateLongAddress(cellContent);
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


const columns = [
  {
    dataField: 'id',
    text: 'Order #',
    sort: true
  }, {
    dataField: 'purchasedOn',
    text: 'Purchased On',
    sort: true
  }, {
    dataField: 'customer',
    text: 'Customer',
    sort: true
  }, {
    dataField: 'shipTo',
    text: 'Ship to',
    sort: true
  }, {
    dataField: 'basePrice',
    text: 'Base Price',
    sort: true
  }, {
    dataField: 'purchasedPrice',
    text: 'Purchased Price',
    sort: true
  }, {
    dataField: 'status',
    text: 'Status',
    sort: true,
    formatter: (cellContent, row) => {
      if (cellContent === 'On hold') {
        return (
          <label className="badge badge-info">On hold</label>
        );
      } else if (cellContent === 'Pending' ) {
        return (
          <label className="badge badge-danger">Pending</label>
        );
      } else if (cellContent === 'Closed') {
        return (
          <label className="badge badge-success">Closed</label>
        );
      } else if (cellContent === 'Open') {
        return (
          <label className="badge badge-warning">Open</label>
        );
      }
    }
  }, {
    dataField: 'action',
    text: 'Action',
    sort: false,
    formatter: () => {
      return (
        <div>
          <button className="btn btn-dark">
            <i className="mdi mdi-eye-outline text-primary"></i>View
          </button>
        </div>
      );
    }
  }
];
