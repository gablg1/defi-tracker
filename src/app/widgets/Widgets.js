import React, { Component } from 'react'
import {Line, Doughnut, Bar} from 'react-chartjs-2';
import { ProgressBar } from 'react-bootstrap';
import Rating from 'react-rating';
import { Dropdown } from 'react-bootstrap';

export class Widgets extends Component {
  totalInvoiceData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
      label: 'Profit',
      data: [1, 3, 7, 4, 1, 9, 6],
      backgroundColor: [
        'rgba(182, 109, 255, .1 )',
      ],
      borderColor: [
        '#b66dff',
      ],
      borderWidth: 2,
      fill: true
    }]
  };

  lineOptions = {
    responsive : true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: false
        } 
      }],
      xAxes: [{
          display: false
      }]
  },
  legend: {
      display: false
  },
  elements: {
    point: {
        radius: 0
    },
    line: {
        tension: 0
    }
  },
  stepsize: 10
  };
  totalExpenceData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
      label: 'Profit',
      data: [1, 4, 8, 3, 4, 6, 1],
      backgroundColor: [
        'rgba(255, 178, 66, .1)',
      ],
      borderColor: [
        '#ffc542',
      ],
      borderWidth: 2,
      fill: true
    }]
  };
  totalunpaidInvoiceData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
      label: 'Profit',
      data: [8, 12, 5, 4, 1, 12, 4],
      backgroundColor: [
        'rgba(0, 98, 255, .1)',
      ],
      borderColor: [
        '#0062ff',
      ],
      borderWidth: 2,
      fill: true
    }]
  };
  totalAmountDueData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
      label: 'Profit',
      data: [6, 9, 3, 4, 2, 5, 6],
      backgroundColor: [
        'rgba(252, 90, 90, .1)',
      ],
      borderColor: [
        '#fc5a5a',
      ],
      borderWidth: 2,
      fill: true
    }]
  };

  usersDoughnutChartData = {
    datasets: [{
      data: [80, 34, 100],
      backgroundColor: [
        '#44ce42',
        '#b66dff',
        '#d8d8d8',
      ],
      borderColor: [
        '#44ce42',
        '#b66dff',
        '#d8d8d8',
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Pink',
      'Blue',
      'Yellow',
    ]
};

usersDoughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
      animateRotate: true
    },
  legend: {
    display: false
  },
};

amountDueBarData = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
  datasets: [{
    label: 'Profit',
    data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
    backgroundColor: [
      '#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3',
    ],
    borderColor: [
      '#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3',
    ],
    borderWidth: 2,
    fill: true
  }]
};

amountDueBarOptions = {
  responsive : true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      display: false,
      ticks: {
        beginAtZero: false
      } 
    }],
    xAxes: [{
        display: false
    }]
},
legend: {
    display: false
},
elements: {
  point: {
      radius: 0
  },
  line: {
      tension: 0
  }
},
stepsize: 10
};

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Widgets </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Widgets</a></li>
              <li className="breadcrumb-item active" aria-current="page">widgets</li>
            </ol>
          </nav>
        </div>
        <div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-cube text-danger icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-light">Total Revenue</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-light">$6,560</h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-receipt text-warning icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-light">Orders</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-light">3455</h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise sales </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-poll-box text-success icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-light">Sales</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-light">5693</h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-account-box-multiple text-info icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-light">Employees</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-light">246</h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body pb-0">
                <p className="text-light">Total Invoice</p>
                <div className="d-flex align-items-center">
                  <h4 className="font-weight-semibold text-light">$65,650</h4>
                  <h6 className="text-success font-weight-semibold ml-2">+876</h6>
                </div>
                <small className="text-muted">This has been a great</small>
              </div>
              <div className="graph-wrapper">
                <Line data={this.totalInvoiceData} options={this.lineOptions} />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body pb-0">
                <p className="text-light">Total expenses</p>
                <div className="d-flex align-items-center">
                  <h4 className="font-weight-semibold text-light">$65,650</h4>
                  <h6 className="text-danger font-weight-semibold ml-2">-43</h6>
                </div>
                <small className="text-muted">view statement</small>
              </div>
              <div className="graph-wrapper">
                <Line data={this.totalExpenceData} options={this.lineOptions} />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body pb-0">
                <p className="text-light">Unpaid Invoices</p>
                <div className="d-flex align-items-center">
                  <h4 className="font-weight-semibold text-light">$2,542</h4>
                  <h6 className="text-success font-weight-semibold ml-2">+876</h6>
                </div>
                <small className="text-muted">view history</small>
              </div>
              <div className="graph-wrapper">
                <Line data={this.totalunpaidInvoiceData} options={this.lineOptions} />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body pb-0">
                <p className="text-light">Amount Due</p>
                <div className="d-flex align-items-center">
                  <h4 className="font-weight-semibold text-light">$3450</h4>
                  <h6 className="text-success font-weight-semibold ml-2">+23</h6>
                </div>
                <small className="text-muted">65% lower growth</small>
              </div>
              <div className="graph-wrapper">
                <Line data={this.totalAmountDueData} options={this.lineOptions} />
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin">
            <div className="card card-statistics">
              <div className="row">
                <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                      <i className="mdi mdi-account-multiple-outline text-primary mr-0 mr-sm-4 icon-lg"></i>
                      <div className="wrapper text-center text-sm-left">
                        <p className="card-text mb-0 text-light">New Users</p>
                        <div className="fluid-container">
                          <h3 className="mb-0 font-weight-medium text-light">65,650</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                      <i className="mdi mdi-checkbox-marked-circle-outline text-primary mr-0 mr-sm-4 icon-lg"></i>
                      <div className="wrapper text-center text-sm-left">
                        <p className="card-text mb-0 text-light">New Feedbacks</p>
                        <div className="fluid-container">
                          <h3 className="mb-0 font-weight-medium text-light">32,604</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                      <i className="mdi mdi-trophy-outline text-primary mr-0 mr-sm-4 icon-lg"></i>
                      <div className="wrapper text-center text-sm-left">
                        <p className="card-text mb-0 text-light">Employees</p>
                        <div className="fluid-container">
                          <h3 className="mb-0 font-weight-medium text-light">17,583</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                      <i className="mdi mdi-target text-primary mr-0 mr-sm-4 icon-lg"></i>
                      <div className="wrapper text-center text-sm-left">
                        <p className="card-text mb-0 text-light">Total Sales</p>
                        <div className="fluid-container">
                          <h3 className="mb-0 font-weight-medium text-light">61,119</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-5 d-flex align-items-center">
                    <Doughnut data={this.usersDoughnutChartData} options={this.usersDoughnutChartOptions} />
                  </div>
                  <div className="col-md-7">
                    <h4 className="card-title font-weight-medium mb-0 d-none d-md-block">Active Users</h4>
                    <div className="wrapper mt-4">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 font-weight-medium">67,550</p>
                          <small className="text-muted ml-2">Email account</small>
                        </div>
                        <p className="mb-0 font-weight-medium">80%</p>
                      </div>
                        <ProgressBar variant="success" now={80}/>
                    </div>
                    <div className="wrapper mt-4">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 font-weight-medium">21,435</p>
                          <small className="text-muted ml-2">Requests</small>
                        </div>
                        <p className="mb-0 font-weight-medium">34%</p>
                      </div>
                        <ProgressBar variant="primary" now={34}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-7">
                    <h4 className="card-title font-weight-medium mb-3">Amount Due</h4>
                    <h1 className="font-weight-medium mb-0 text-light">$5998</h1>
                    <p className="text-muted">Milestone Completed</p>
                    <p className="mb-0">Payment for next week</p>
                  </div>
                  <div className="col-md-5 d-flex align-items-end mt-4 mt-md-0">
                    <Bar data={this.amountDueBarData} options={this.amountDueBarOptions} />    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-xl-flex flex-row">
                  <img src={require("../../assets/images/faces/face11.jpg")} className="img-lg rounded" alt="profile icon" />
                  <div className="ml-xl-3 mt-2 mt-xl-0">
                    <h6 className="text-light">Maria</h6>
                    <p className="text-muted">maria@gmail.com</p>
                    <p className="mt-2 text-success font-weight-bold">Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-xl-flex flex-row">
                  <img src={require("../../assets/images/faces/face9.jpg")} className="img-lg rounded" alt="profile icon" />
                  <div className="ml-xl-3 mt-2 mt-xl-0">
                    <h6 className="text-light">Thomas Edison</h6>
                    <p className="text-muted">thomas@gmail.com</p>
                    <p className="mt-2 text-success font-weight-bold">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-xl-flex flex-row">
                  <img src={require("../../assets/images/faces/face12.jpg")} className="img-lg rounded" alt="profile icon" />
                  <div className="ml-xl-3 mt-2 mt-xl-0">
                    <h6 className="text-light">Edward</h6>
                    <p className="text-muted">edward@gmail.com</p>
                    <p className="mt-2 text-success font-weight-bold">Tester</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <img className="card-img-top" src={require("../../assets/images/dashboard/img_1.jpg")} alt="card images" />
              <div className="card-body pb-0">
                <p className="text-muted">RAGNAROCK- Museet for pop, Roskilde, Denmark</p>
                <h5>It’s good to start or finish the day with delicious pancakes :)</h5>
                <div className="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                  <p className="mb-0">Published on May 23, 2018</p>
                  <div className="wrapper d-flex align-items-center">
                    <small className="mr-2">93</small>
                    <i className="mdi mdi-heart-outline"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <img className="card-img-top" src={require("../../assets/images/dashboard/img_2.jpg")} alt="card images" />
              <div className="card-body pb-0">
                <p className="text-muted">RAGNAROCK- Museet for pop, Roskilde, Denmark</p>
                <h5>It’s good to start or finish the day with delicious pancakes :)</h5>
                <div className="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                  <p className="mb-0">Published on May 23, 2018</p>
                  <div className="wrapper d-flex align-items-center">
                    <small className="mr-2">93</small>
                    <i className="mdi mdi-heart-outline"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <img className="card-img-top" src={require("../../assets/images/dashboard/img_3.jpg")} alt="card images" />
              <div className="card-body pb-0">
                <p className="text-muted">RAGNAROCK- Museet for pop, Roskilde, Denmark</p>
                <h5>It’s good to start or finish the day with delicious pancakes :)</h5>
                <div className="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                  <p className="mb-0">Published on May 23, 2018</p>
                  <div className="wrapper d-flex align-items-center">
                    <small className="mr-2">93</small>
                    <i className="mdi mdi-heart-outline"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card aligner-wrapper">
              <div className="card-body">
                <div className="absolute left top bottom h-100 v-strock-2 bg-success"></div>
                <p className="mb-2 text-light">Unpaid Invoices</p>
                <div className="d-flex align-items-center">
                  <h1 className="font-weight-medium mb-2 text-light">$2,156</h1>
                  <h5 className="font-weight-medium text-success ml-2">−14.2%</h5>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-success dot-indicator"></div>
                  <p className="text-muted mb-0 ml-2">This month unpaid invoices $567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card aligner-wrapper">
              <div className="card-body">
                <div className="absolute left top bottom h-100 v-strock-2 bg-primary"></div>
                <p className="mb-2 text-light">Gross volume</p>
                <div className="d-flex align-items-center">
                  <h1 className="font-weight-medium mb-2 text-light">$1,520</h1>
                  <h5 className="font-weight-medium text-success ml-2">+20.7%</h5>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-primary dot-indicator"></div>
                  <p className="text-muted mb-0 ml-2">Next payout -23 aug- $233</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card aligner-wrapper">
              <div className="card-body">
                <div className="absolute left top bottom h-100 v-strock-2 bg-danger"></div>
                <p className="text-light mb-2">Average revenue</p>
                <div className="d-flex align-items-center">
                  <h1 className="font-weight-medium mb-2 text-light">$6.60</h1>
                  <h5 className="font-weight-medium text-success ml-2">+296.6%</h5>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-danger dot-indicator"></div>
                  <p className="text-muted mb-0 ml-2">Payout for next week $100 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 grid-margin stretch-card">
            <div className="card review-card">
              <div className="card-header header-sm d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">Reviews</h4>
                <div className="wrapper d-flex align-items-center">
                  <p className="mb-0">23 New Reviews</p>
                  <Dropdown alignRight>
                    <Dropdown.Toggle variant="btn btn-transparent p-0" id="dropdownMenuOutlineButton1">
                    <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Today</Dropdown.Header>
                      <Dropdown.Item>Yesterday</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body no-gutter">
                <div className="list-item">
                  <div className="preview-image">
                    <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face10.jpg")} alt="profile icon" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <h6 className="product-name text-light">Air Pod</h6>
                      <small className="time ml-3 d-none d-sm-block">08.34 AM</small>
                      <div className="ml-auto">
                        <Rating 
                          initialRating="1"
                          emptySymbol={<i className="mdi mdi-star text-muted mr-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary mr-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="user-name text-light">Christine :</p>
                      <p className="review-text d-block">The brand apple is original !</p>
                    </div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="preview-image">
                    <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face13.jpg")} alt="profile icon" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <h6 className="product-name text-light">Macbook</h6>
                      <small className="time ml-3 d-none d-sm-block">12.56 PM</small>
                      <div className="ml-auto">
                        <Rating 
                          initialRating="2"
                          emptySymbol={<i className="mdi mdi-star text-muted mr-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary mr-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="user-name text-light">Arthur Cole :</p>
                      <p className="review-text d-block">The brand apple is original also the iphone x.</p>
                    </div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="preview-image">
                    <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile icon" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <h6 className="product-name text-light">Apple watch</h6>
                      <small className="time ml-3 d-none d-sm-block">09.24 AM</small>
                      <div className="ml-auto">
                        <Rating 
                          initialRating="3"
                          emptySymbol={<i className="mdi mdi-star text-muted mr-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary mr-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="user-name text-light">James Tate :</p>
                      <p className="review-text d-block">The brand apple is original.</p>
                    </div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="preview-image">
                    <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face11.jpg")} alt="profile icon" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <h6 className="product-name text-light">Homepod</h6>
                      <small className="time ml-3 d-none d-sm-block">5.12 AM</small>
                      <div className="ml-auto">
                        <Rating 
                          initialRating="4"
                          emptySymbol={<i className="mdi mdi-star text-muted mr-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary mr-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="user-name text-light">Clyde Parker :</p>
                      <p className="review-text d-block">The brand apple is original also the iphone !!</p>
                    </div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="preview-image">
                    <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face12.jpg")} alt="profile icon" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <h6 className="product-name text-light">Imac</h6>
                      <small className="time ml-3 d-none d-sm-block">10.00 AM</small>
                      <div className="ml-auto">
                        <Rating 
                          initialRating="5"
                          emptySymbol={<i className="mdi mdi-star text-muted mr-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary mr-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="user-name text-light">James Tate :</p>
                      <p className="review-text d-block">The brand apple is original.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title">Activity</h4>
                  <i className="mdi mdi-dots-vertical"></i>
                </div>
                <p className="card-description">What's people doing right now</p>
                <div className="list d-flex align-items-center border-bottom py-3">
                  <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face4.jpg")} alt="" />
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 text-light">
                      <b>Dobrick </b>posted in Material</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1"></i>
                        <p className="mb-0">That's awesome!</p>
                      </div>
                      <small className="text-muted ml-auto">2 hours ago</small>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center border-bottom py-3">
                  <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face5.jpg")} alt="" />
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 text-light">
                      <b>Stella </b>posted in Material</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1"></i>
                        <p className="mb-0">That's awesome!</p>
                      </div>
                      <small className="text-muted ml-auto">3 hours ago</small>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center border-bottom py-3">
                  <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face7.jpg")} alt="" />
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 text-light">
                      <b>Peter </b>posted in Material</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1"></i>
                        <p className="mb-0">That's Great!</p>
                      </div>
                      <small className="text-muted ml-auto">1 hours ago</small>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center pt-3">
                  <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face6.jpg")} alt="" />
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 text-light">
                      <b>Nateila </b>posted in Material</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1"></i>
                        <p className="mb-0">That's awesome!</p>
                      </div>
                      <small className="text-muted ml-auto">1 hours ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recomended</h4>
                <div className="wrapper d-flex align-items-center py-2 border-bottom">
                  <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face5.jpg")} alt="profile" />
                  <div className="wrapper ml-3">
                    <h6 className="ml-1 mb-1 text-light">Stella Davidson</h6>
                    <small className="text-muted mb-0">
                      <i className="mdi mdi-map-marker-outline mr-1"></i>New York City, USA</small>
                  </div>
                  <div className="badge badge-pill badge-success ml-auto px-1 py-1">
                    <i className="mdi mdi-check"></i>
                  </div>
                </div>
                <div className="wrapper d-flex align-items-center py-2 border-bottom">
                  <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face6.jpg")} alt="profile" />
                  <div className="wrapper ml-3">
                    <h6 className="ml-1 mb-1 text-light">Daniel Russel</h6>
                    <small className="text-muted mb-0">
                      <i className="mdi mdi-map-marker-outline mr-1"></i>Florida, USA</small>
                  </div>
                  <div className="badge badge-pill badge-success ml-auto px-1 py-1">
                    <i className="mdi mdi-plus"></i>
                  </div>
                </div>
                <div className="wrapper d-flex align-items-center py-2 border-bottom">
                  <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face7.jpg")} alt="profile" />
                  <div className="wrapper ml-3">
                    <h6 className="ml-1 mb-1 text-light">Bruno King</h6>
                    <small className="text-muted mb-0">
                      <i className="mdi mdi-map-marker-outline mr-1"></i>Arkansas, USA</small>
                  </div>
                  <div className="badge badge-pill badge-success ml-auto px-1 py-1">
                    <i className="mdi mdi-check"></i>
                  </div>
                </div>
                <div className="wrapper d-flex align-items-center py-2 border-bottom">
                  <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face8.jpg")} alt="profile" />
                  <div className="wrapper ml-3">
                    <h6 className="ml-1 mb-1 text-light">David Moore</h6>
                    <small className="text-muted mb-0">
                      <i className="mdi mdi-map-marker-outline mr-1"></i>Arizon, USA</small>
                  </div>
                  <div className="badge badge-pill badge-success ml-auto px-1 py-1">
                    <i className="mdi mdi-plus"></i>
                  </div>
                </div>
                <div className="wrapper d-flex align-items-center pt-2">
                  <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face9.jpg")} alt="profile" />
                  <div className="wrapper ml-3">
                    <h6 className="ml-1 mb-1 text-light">Rafell John</h6>
                    <small className="text-muted mb-0">
                      <i className="mdi mdi-map-marker-outline mr-1"></i>Alaska, USA</small>
                  </div>
                  <div className="badge badge-pill badge-success ml-auto px-1 py-1">
                    <i className="mdi mdi-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Updates</h4>
                <ul className="bullet-line-list">
                  <li>
                    <h6 className="text-light">User confirmation</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <p className="text-muted">
                      <i className="mdi mdi-clock"></i> 7 months ago.</p>
                  </li>
                  <li>
                    <h6 className="text-light">Continuous evaluation</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <p className="text-muted">
                      <i className="mdi mdi-clock"></i> 7 months ago.</p>
                  </li>
                  <li>
                    <h6 className="text-light">Promotion</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <p className="text-muted">
                      <i className="mdi mdi-clock"></i> 7 months ago.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Widgets
