import React, { Component } from 'react'

export class Invoice extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Invoice
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Ecommerce</a></li>
              <li className="breadcrumb-item active" aria-current="page">Invoice</li>
            </ol>
          </nav>

        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card px-2">
              <div className="card-body">
                <div className="container-fluid">
                  <h3 className="text-right my-5">Invoice&nbsp;&nbsp;#INV-17</h3>
                  <hr/>
                </div>
                <div className="container-fluid d-flex justify-content-between">
                  <div className="col-lg-3 pl-0">
                    <p className="mt-5 mb-2"><b>Corona React Admin</b></p>
                    <p>104,<br/>Minare SK,<br/>Canada, K1A 0G9.</p>
                  </div>
                  <div className="col-lg-3 pr-0">
                    <p className="mt-5 mb-2 text-right"><b>Invoice to</b></p>
                    <p className="text-right">Gaala & Sons,<br/> C-201, Beykoz-34800,<br/> Canada, K1A 0G9.</p>
                  </div>
                </div>
                <div className="container-fluid d-flex justify-content-between">
                  <div className="col-lg-3 pl-0">
                    <p className="mb-0 mt-5">Invoice Date : 23rd Jan 2016</p>
                    <p>Due Date : 25th Jan 2017</p>
                  </div>
                </div>
                <div className="container-fluid mt-5 d-flex justify-content-center w-100">
                  <div className="table-responsive w-100">
                      <table className="table">
                        <thead>
                          <tr className="bg-dark text-white">
                              <th>#</th>
                              <th>Description</th>
                              <th className="text-right">Quantity</th>
                              <th className="text-right">Unit cost</th>
                              <th className="text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr className="text-right">
                            <td className="text-left">1</td>
                            <td className="text-left">Brochure Design</td>
                            <td>2</td>
                            <td>$20</td>
                            <td>$40</td>
                          </tr>
                          <tr className="text-right">
                            <td className="text-left">2</td>
                            <td className="text-left">Web Design Packages(Template) - Basic</td>
                            <td>05</td>
                            <td>$25</td>
                            <td>$125</td>
                          </tr>
                          <tr className="text-right">
                            <td className="text-left">3</td>
                            <td className="text-left">Print Ad - Basic - Color</td>
                            <td>08</td>
                            <td>$500</td>
                            <td>$4000</td>
                          </tr>
                          <tr className="text-right">
                            <td className="text-left">4</td>
                            <td className="text-left">Down Coat</td>
                            <td>1</td>
                            <td>$5</td>
                            <td>$5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
                <div className="container-fluid mt-5 w-100">
                  <p className="text-right mb-2">Sub - Total amount: $12,348</p>
                  <p className="text-right">vat (10%) : $138</p>
                  <h4 className="text-right mb-5">Total : $13,986</h4>
                  <hr/>
                </div>
                <div className="container-fluid w-100">
                  <a href="!#" onClick={event => event.preventDefault()} className="btn btn-primary float-right mt-4 ml-2"><i className="mdi mdi-printer mr-1"></i>Print</a>
                  <a href="!#" onClick={event => event.preventDefault()} className="btn btn-success float-right mt-4"><i className="mdi mdi-send mr-1"></i>Send Invoice</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Invoice
