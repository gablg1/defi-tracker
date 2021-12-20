import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
const { SearchBar } = Search;

var products = [
  {
    id: 'WD-61',
    customer: 'Edinburgh',
    shipTo: 'New York',
    basePrice: '$1500',
    purchasedPrice: '$3200',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-62',
    customer: 'Doe',
    shipTo: 'Brazil',
    basePrice: '$4500',
    purchasedPrice: '$7500',
    status: 'Pending',
    action: ''
  },
  {
    id: 'WD-63',
    customer: 'Sam',
    shipTo: 'Tokyo',
    basePrice: '$2100',
    purchasedPrice: '6300',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-64',
    customer: 'Joe',
    shipTo: 'Netherland',
    basePrice: '$1100',
    purchasedPrice: '$7300',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-65',
    customer: 'Edward',
    shipTo: 'Indonesia',
    basePrice: '$3600',
    purchasedPrice: '$4800',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-66',
    customer: 'Stella',
    shipTo: 'Japan',
    basePrice: '$5600',
    purchasedPrice: '$3600',
    status: 'On hold',
    action: ''
  },
  {
    id: 'WD-67',
    customer: 'Jaqueline',
    shipTo: 'Germany',
    basePrice: '$1100',
    purchasedPrice: '$6300',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-68',
    customer: 'Tim',
    shipTo: 'Italy',
    basePrice: '$6300',
    purchasedPrice: '$2100',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-69',
    customer: 'John',
    shipTo: 'Tokyo',
    basePrice: '$2100',
    purchasedPrice: '$6300',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-70',
    customer: 'Tom',
    shipTo: 'Germany',
    basePrice: '$1100',
    purchasedPrice: '$2300',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-71',
    customer: 'Aleena',
    shipTo: 'New York',
    basePrice: '$1600',
    purchasedPrice: '$3500',
    status: 'Pending',
    action: ''
  },
  {
    id: 'WD-72',
    customer: 'Alphy',
    shipTo: 'Brazil',
    basePrice: '$5500',
    purchasedPrice: '$7200',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-73',
    customer: 'Twinkle',
    shipTo: 'Italy',
    basePrice: '$1560',
    purchasedPrice: '$2530',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-74',
    customer: 'Catherine',
    shipTo: 'Brazil',
    basePrice: '$1600',
    purchasedPrice: '$5600',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-75',
    customer: 'Daniel',
    shipTo: 'Singapore',
    basePrice: '$6800',
    purchasedPrice: '$9800',
    status: 'Pending',
    action: ''
  },
  {
    id: 'WD-76',
    customer: 'Tom',
    shipTo: 'Tokyo',
    basePrice: '$1600',
    purchasedPrice: '$6500',
    status: 'On hold',
    action: ''
  },
  {
    id: 'WD-77',
    customer: 'Cris',
    shipTo: 'Tokyo',
    basePrice: '$2100',
    purchasedPrice: '$6300',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-78',
    customer: 'Tim',
    shipTo: 'Italy',
    basePrice: '$6300',
    purchasedPrice: '$2100',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-79',
    customer: 'Jack',
    shipTo: 'Tokyo',
    basePrice: '$3100',
    purchasedPrice: '$7300',
    status: 'Pending',
    action: ''
  },
  {
    id: 'WD-80',
    customer: 'Tony',
    shipTo: 'Germany',
    basePrice: '$1100',
    purchasedPrice: '$2300',
    status: 'On hold',
    action: ''
  },
];

const columns = [
  {
    dataField: 'id',
    text: 'Order #',
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
          <button className="btn btn-dark ml-2">
            <i className="mdi mdi-eye-outline text-primary"></i>View
          </button>
          <button className="btn btn-dark ml-2 mt-2 mt-lg-0">
            <i className="mdi mdi-close text-danger"></i>Remove
          </button>
        </div>
      );
    }
  }
];

const defaultSorted = [{
  dataField: 'id',
  order: 'desc'
}];

export class Orders extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Orders</h4>
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="alert alert-warning" role="alert">
                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <ToolkitProvider
                      keyField="id"
                      bootstrap4
                      data={ products }
                      columns={ columns }
                      search
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
                              wrapperClasses="orders-table table-responsive"
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
    )
  }
}

export default Orders
