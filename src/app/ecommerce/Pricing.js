import React, { Component } from 'react'

export class Pricing extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Pricing
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Ecommerce</a></li>
              <li className="breadcrumb-item active" aria-current="page">Pricing</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="container text-center pt-5">
                  <h4 className="mb-3 mt-0 mt-lg-5">Start up your Bussiness today</h4>
                  <p className="w-75 mx-auto mb-5">Choose a plan that suits you the best. If you are not fully satisfied, we offer 30-day money-back guarantee no questions asked!!</p>
                  <div className="row pricing-table">
                    <div className="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                      <div className="card border-primary border pricing-card-body">
                        <div className="text-center pricing-card-head">
                          <h3>Free</h3>
                          <p>Basic Plan</p>
                          <h1 className="font-weight-normal mb-4">$00.00</h1>
                        </div>
                        <ul className="list-unstyled plan-features">
                          <li>Email preview on air</li>
                          <li>Spam testing and blocking</li>
                          <li>10 GB Space</li>
                          <li>50 user accounts</li>
                          <li>Free support for one years</li>
                          <li>Free upgrade for one year</li>
                        </ul>
                        <div className="wrapper">
                          <a href="!#" onClick={event => event.preventDefault()} className="btn btn-outline-primary btn-block">Download</a>
                        </div>
                        <p className="mt-3 mb-0 plan-cost text-gray">Free</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                      <div className="card border border-success pricing-card-body">
                        <div className="text-center pricing-card-head">
                          <h3 className="text-success">Professional</h3>
                          <p>For Business</p>
                          <h1 className="font-weight-normal mb-4">$50.90</h1>
                        </div>
                        <ul className="list-unstyled plan-features">
                          <li>Email preview on air</li>
                          <li>Spam testing and blocking</li>
                          <li>50 GB Space</li>
                          <li>100 user accounts</li>
                          <li>Free support for two years</li>
                          <li>Free upgrade for two year</li>
                        </ul>
                        <div className="wrapper">
                          <a href="!#" onClick={event => event.preventDefault()} className="btn btn-success btn-block">Start trial</a>
                        </div>
                        <p className="mt-3 mb-0 plan-cost text-success">or purchase now</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                      <div className="card border border-primary pricing-card-body">
                        <div className="text-center pricing-card-head">
                          <h3>Enterprise</h3>
                          <p>Custom Business</p>
                          <h1 className="font-weight-normal mb-4">$80.90</h1>
                        </div>
                        <ul className="list-unstyled plan-features">
                          <li>Email preview on air</li>
                          <li>Spam testing and blocking</li>
                          <li>100 GB Space</li>
                          <li>200 user accounts</li>
                          <li>Free support for two years</li>
                          <li>Free upgrade for two year</li>
                        </ul>
                        <div className="wrapper">
                          <a href="!#" onClick={event => event.preventDefault()} className="btn btn-outline-primary btn-block">Start trial</a>
                        </div>
                        <p className="mt-3 mb-0 plan-cost text-gray">or purchase now</p>
                      </div>
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

export default Pricing
