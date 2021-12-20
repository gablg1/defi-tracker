import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

export class Paginations extends Component {
  render() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Pagination
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Pagination</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Paginations</h4>
                <p className="card-description">Default bordered pagination</p>
                <Pagination>
                  <Pagination.Prev/>
                  {items}
                  <Pagination.Next/>
                </Pagination>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Flat Pagination</h4>
                <p className="card-description">Add class <code>.flat</code></p>
                <Pagination className="flat pagination-success">
                  <Pagination.Prev/>
                  {items}
                  <Pagination.Next/>
                </Pagination>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Separated  Pagination</h4>
                <p className="card-description">Add class <code>.separated</code></p>
                <Pagination className="separated pagination-danger">
                  <Pagination.Prev/>
                  {items}
                  <Pagination.Next/>
                </Pagination>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Bordered Rounded</h4>
                <p className="card-description">Add class <code>.rounded</code></p>
                <Pagination className="rounded pagination-primary">
                  <Pagination.Prev/>
                  {items}
                  <Pagination.Next/>
                </Pagination>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Flat Rounded Pagination</h4>
                <p className="card-description">Add class <code>.rounded-flat</code></p>
                <Pagination className="rounded-flat pagination-success">
                  <Pagination.Prev/>
                  {items}
                  <Pagination.Next/>
                </Pagination>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Separated Rounded</h4>
                <p className="card-description">Add class <code>.rounded-separated</code></p>
                <Pagination className="rounded-separated pagination-danger">
                  <Pagination.Prev/>
                  {items}
                  <Pagination.Next/>
                </Pagination>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 grid-margin grid-margin-md-0 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Left Position</h4>
                <p className="card-description">Left Pagination</p>
                <Pagination className="pagination-primary d-flex justify-content-start">
                  <Pagination.Prev/>
                  {items}
                  <Pagination.Next/>
                </Pagination>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Center Position</h4>
                <p className="card-description">Centered Pagination</p>
                <Pagination className="pagination-success d-flex justify-content-center">
                  <Pagination.Prev/>
                  {items}
                  <Pagination.Next/>
                </Pagination>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Right Position</h4>
                <p className="card-description">Right Pagination</p>
                <Pagination className="pagination-danger d-flex justify-content-end">
                  <Pagination.Prev/>
                  {items}
                  <Pagination.Next/>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Paginations
