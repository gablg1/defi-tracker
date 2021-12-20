import React, { Component } from 'react'
import Datasort from 'react-data-sort'

const tableData = [
    {
        id: 1,
        'firstName': 'Herman Beck',
        'lastName': 'John',
        'product': 'Photoshop',
        'amount': '$456.00',
        'deadline': '12 May 2017'
    },
    {
        id: 2,
        'firstName': 'Herman Beck',
        'lastName': 'Conway',
        'product': 'Flash',
        'amount': '$965.00',
        'deadline': '13 May 2017'
    },
    {
        id: 3,
        'firstName': 'John Richards',
        'lastName': 'Alex',
        'product': 'Premeire',
        'amount': '$255.00',
        'deadline': '14 May 2017'
    },
    {
        id: 4,
        'firstName': 'John Richards',
        'lastName': 'Jason',
        'product': 'After effects',
        'amount': '$975.00',
        'deadline': '15 May 2017'
    },
    {
        id: 5,
        'firstName': 'Messsy max',
        'lastName': 'Back',
        'product': 'Ilustrator',
        'amount': '$298.00',
        'deadline': '16 May 2017'
    },
];

function TableHead({ setSortBy, sortBy, direction, toggleDirection }) {
    const columns = [
      { key: "id", title: "#" },
      { key: "firstName", title: "First Name" },
      { key: "lastName", title: "Last Name" },
      { key: "product", title: "Product" },
      { key: "amount", title: "Amount" },
      { key: "deadline", title: "Deadline" },
    ];
    const items = columns.map(({ key, title }) => {
      const active = key === sortBy;
      return (
        <HeadToggle
          key={key}
          active={active}
          onClick={() => {
            if (active) {
              toggleDirection();
            }
            setSortBy(key);
          }}
        >
          {title} <i className={active ? direction === "asc" ? "mdi mdi-sort-ascending" : "mdi mdi-sort-descending" : "mdi mdi-sort"}></i>
        </HeadToggle>
      );
    });
    return (
      <thead>
        <tr>{items}</tr>
      </thead>
    );
  }
  
  function HeadToggle({ children, active, onClick }) {
    return (
      <th
        onClick={onClick}
        style={{ fontWeight: 600, cursor: "pointer" }}
      >
        {children}
      </th>
    );
  }
  
  function TableBody({ data }) {
    return (
      <tbody>
        {data.map(({ id, firstName, lastName, product, amount, deadline }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{product}</td>
            <td>{amount}</td>
            <td>{deadline}</td>
          </tr>
        ))}
      </tbody>
    );
  }

export class SortableTable extends Component {
    
    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        Sortable Table
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Sortable Table</li>
                        </ol>
                    </nav>
                </div>
                <div className="row grid-margin">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                Basic Sortable Table
                                </h4>
                                <Datasort
                                    data={tableData}
                                    defaultSortBy="id"
                                    render={({
                                        data,
                                        setSortBy,
                                        sortBy,
                                        direction,
                                        toggleDirection
                                    }) => {
                                        return (
                                        <div className="table-responsive">
                                            <table className="table">
                                            <TableHead
                                                setSortBy={setSortBy}
                                                sortBy={sortBy}
                                                direction={direction}
                                                toggleDirection={toggleDirection}
                                            />
                                            <TableBody data={data} />
                                            </table>
                                        </div>
                                        );
                                    }}
                                    />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row grid-margin">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                Basic Sortable Table
                                </h4>
                                <Datasort
                                    data={tableData}
                                    defaultSortBy="id"
                                    render={({
                                        data,
                                        setSortBy,
                                        sortBy,
                                        direction,
                                        toggleDirection
                                    }) => {
                                        return (
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                            <TableHead
                                                setSortBy={setSortBy}
                                                sortBy={sortBy}
                                                direction={direction}
                                                toggleDirection={toggleDirection}
                                            />
                                            <TableBody data={data} />
                                            </table>
                                        </div>
                                        );
                                    }}
                                    />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SortableTable
