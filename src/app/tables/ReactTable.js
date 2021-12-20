import React, { Component } from 'react';
import ReactTable from 'react-table'

export class ReactTablePage extends Component {
  constructor() {
    super();
    this.state = {
      data : [{
        name: 'Imelda Hardin',
        age: 39,
        address: '719-7009 Auctor Av',
        country: 'Brazil  ',
      },{
        name: 'Herman Rosa',
        age: 49,
        address: '718-7162 Molestie Av.',
        country: 'Russia  ',
      },{
        name: 'Jonah Johns',
        age: 28,
        address: 'P.O. Box 939, 9310 A Ave',
        country: 'Brazzil  ',
      },{
        name: 'Otto Clay',
        age: 61,
        address: 'Ap #897-1459 Quam Avenue',
        country: 'China ',
      }
      ,{
        name: 'Connor Johnston',
        age: 71,
        address: 'Ap #370-4647 Dis Av.',
        country: 'Russia ',
      }
      ,{
        name: 'Lacey Hess',
        age: 29,
        address: 'Ap #365-8835 Integer St.',
        country: 'Russia ',
      }
      ,{
        name: 'Timothy Henson',
        age: 78,
        address: '911-5143 Luctus Ave',
        country: 'US ',
      }
      ,{
        name: 'Ramona Benton',
        age: 44,
        address: 'Ap #614-689 Vehicula Street',
        country: 'Brazil ',
      },{
        name: 'Ezra Tillman',
        age: 51,
        address: 'P.O. Box 738, 7583 Quisque St.',
        country: 'Us ',
      }
      ,{
        name: 'Dante Carter',
        age: 59,
        address: 'P.O. Box 976, 6316 Lorem, St.',
        country: 'US ',
      },{
        name: 'Christopher Mcclure',
        age: 58,
        address: '847-4303 Dictum Av.',
        country: 'China ',
      }
      ,{
        name: 'Ruby Rocha',
        age: 62,
        address: '5212 Sagittis Ave',
        country: 'Canada ',
      }
      ,{
        name: 'Imelda Hardin',
        age: 39,
        address: '719-7009 Auctor Av.',
        country: 'Brazil',
      }
      ,{
        name: 'Jonah Johns',
        age: 26,
        address: 'P.O. Box 939, 9310 A Ave',
        country: 'Brazil ',
      },{
        name: 'Herman Rosa',
        age: 49,
        address: '718-7162 Molestie Av.',
        country: 'Russia  ',
      },{
        name: 'Jonah Johns',
        age: 28,
        address: 'P.O. Box 939, 9310 A Ave',
        country: 'Brazzil  ',
      },{
        name: 'Otto Clay',
        age: 61,
        address: 'Ap #897-1459 Quam Avenue',
        country: 'China ',
      }
      ,{
        name: 'Connor Johnston',
        age: 71,
        address: 'Ap #370-4647 Dis Av.',
        country: 'Russia ',
      }
      ,{
        name: 'Lacey Hess',
        age: 29,
        address: 'Ap #365-8835 Integer St.',
        country: 'Russia ',
      }
      ,{
        name: 'Timothy Henson',
        age: 78,
        address: '911-5143 Luctus Ave',
        country: 'US ',
      }
      ,{
        name: 'Ramona Benton',
        age: 44,
        address: 'Ap #614-689 Vehicula Street',
        country: 'Brazil ',
      },{
        name: 'Ezra Tillman',
        age: 51,
        address: 'P.O. Box 738, 7583 Quisque St.',
        country: 'Us ',
      }
      ,{
        name: 'Dante Carter',
        age: 59,
        address: 'P.O. Box 976, 6316 Lorem, St.',
        country: 'US ',
      },{
        name: 'Christopher Mcclure',
        age: 58,
        address: '847-4303 Dictum Av.',
        country: 'China ',
      }
      ,{
        name: 'Ruby Rocha',
        age: 62,
        address: '5212 Sagittis Ave',
        country: 'Canada ',
      }
      ,{
        name: 'Imelda Hardin',
        age: 39,
        address: '719-7009 Auctor Av.',
        country: 'Brazil',
      }
      ,{
        name: 'Jonah Johns',
        age: 26,
        address: 'P.O. Box 939, 9310 A Ave',
        country: 'Brazil ',
      }]
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "rgba(rgba(0, 0, 0, 0.03))" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    const { data } = this.state;
  
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> React Tables </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">React tables</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">React Table</h4>
                <div className="row">
                  <div className="col-12">
                    <div>
                      <ReactTable
                        data={data}
                        filterable = {true}
                        defaultPageSize ={10} 
                        columns={[
                          {
                            Header: "Name",
                            accessor: "name",
                            Cell: this.renderEditable
                          },
                          {
                            Header: "Age",
                            accessor: "age",
                            Cell: this.renderEditable
                          },
                          {
                            Header: "Address",
                            accessor: "address",
                            Cell: this.renderEditable
                          },
                          {
                            Header: "Is Married",
                            accessor: "married",
                            Cell: row => (
                              <div className="form-check">
                                <label className="form-check-label text-muted">
                                  <input type="checkbox" className="form-check-input"/>
                                  <i className="input-helper"></i>
                                </label>
                              </div>
                            )
                          },
                          {
                            Header: "Country",
                            accessor: "country",
                            Cell: this.renderEditable
                          }
                        ]}
                      />  
                    </div>
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

export default ReactTablePage
