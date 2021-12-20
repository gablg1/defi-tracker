import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { TodoListRtlComponent } from '../apps/TodoListRtl'
import { VectorMap } from "react-jvectormap"
import { Trans } from 'react-i18next';

const mapData = {
  "BZ": 75.00,
  "US": 56.25,
  "AU": 15.45,
  "GB": 25.00,
  "RO": 10.25,
  "GE": 33.25
}

export class Dashboard extends Component {

  transactionHistoryData =  {
    labels: ["Paypal", "Stripe"],
    datasets: [{
        data: [40, 60],
        backgroundColor: [
          "#d53f3a" ,"#0c0c0c"
        ]
      }
    ]
  };

  transactionHistoryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    cutoutPercentage: 75,
    elements: {
      arc: {
          borderWidth: 0
      }
    },      
    legend: {
      display: false
    },
    tooltips: {
      enabled: true
    }
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"><Trans>Current Balance</Trans></h4>
                <div className="mx-auto text-center">
                  <div className="demo-progress-circle">
                    <Doughnut data={this.transactionHistoryData} options={this.transactionHistoryOptions} />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-weight-normal text-white text-center mb-2 text-white">360$</h3>
                    <p className="card-text"><Trans>Total Expense</Trans></p>
                  </div>
                </div>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1"><Trans>Transfer to Paypal</Trans></h6>
                    <p className="text-muted mb-0"><Trans>07 Jan 2019, 09:12AM</Trans></p>
                  </div>
                  <div className="align-self-center flex-grow text-left text-md-center text-xl-left py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">$236</h6>
                  </div>
                </div>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1"><Trans>Tranfer to Stripe</Trans></h6>
                    <p className="text-muted mb-0"><Trans>07 Jan 2019, 09:12AM</Trans></p>
                  </div>
                  <div className="align-self-center flex-grow text-left text-md-center text-xl-left py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">$593</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <h4 className="card-title"><Trans>Open Projects</Trans></h4>
                    <p><Trans>Your data status</Trans></p>
                  </div>
                  <div className="align-self-center">
                    <p className="text-muted"><Trans>View History</Trans></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="preview-list">
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon rounded bg-primary">
                            <i className="mdi mdi-file-document"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject"><Trans>New Document</Trans></h6>
                            <p className="text-muted mb-0"><Trans>Broadcast web app mockup</Trans></p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted"><Trans>15 minutes ago</Trans></p>
                            <p><Trans>30 tasks, 5 issues</Trans> </p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon rounded bg-success">
                            <i className="mdi mdi-cloud-download"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject"><Trans>New Design</Trans></h6>
                            <p className="text-muted mb-0"><Trans>Upload new design</Trans></p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted"><Trans>1 hour ago</Trans></p>
                            <p><Trans>23 tasks, 5 issues</Trans></p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon rounded bg-info">
                            <i className="mdi mdi-clock"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject"><Trans>Project meeting</Trans></h6>
                            <p className="text-muted mb-0"><Trans>New project discussion</Trans></p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted"><Trans>35 minutes ago</Trans></p>
                            <p><Trans>15 tasks, 2 issues</Trans></p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon rounded bg-warning">
                            <i className="mdi mdi-email-open"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject"><Trans>Broadcast Mail</Trans></h6>
                            <p className="text-muted mb-0"><Trans>Sent release details to team</Trans></p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted"><Trans>55 minutes ago</Trans></p>
                            <p><Trans>35 tasks, 7 issues</Trans> </p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item">
                        <div className="preview-thumbnail">
                          <div className="preview-icon rounded bg-danger">
                            <i className="mdi mdi-chart-pie"></i>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject"><Trans>Planning</Trans></h6>
                            <p className="text-muted mb-0"><Trans>New application planning</Trans></p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <p className="text-muted"><Trans>50 minutes ago</Trans></p>
                            <p><Trans>27 tasks, 4 issues</Trans> </p>
                          </div>
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
          <div className="col-md-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row p-3">
                  <div className="align-self-top">
                    <p className="card-title mb-1 font-weight-bold"><Trans>Today's sales</Trans></p>
                    <h3 className="mb-0">2800</h3>
                  </div>
                  <div className="align-self-center flex-grow text-left">
                    <i className="icon-lg mdi mdi-chart-pie text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row p-3">
                  <div className="align-self-top">
                    <p className="card-title mb-1 font-weight-bold"><Trans>Total Revenue</Trans></p>
                    <h3 className="mb-0">38,879</h3>
                  </div>
                  <div className="align-self-center flex-grow text-left">
                    <i className="icon-lg mdi mdi-cash-multiple text-warning"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row p-3">
                <div className="align-self-top">
                  <p className="card-title mb-1 font-weight-bold"><Trans>Today's Visits</Trans></p>
                  <h3 className="mb-0">2569</h3>
                </div>
                <div className="align-self-center flex-grow text-left">
                  <i className="icon-lg mdi mdi-account-outline text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row ">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"><Trans>Order Status</Trans></h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check form-check-flat m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </th>
                        <th> <Trans>Profile</Trans> </th>
                        <th> <Trans>Customer</Trans> </th>
                        <th> <Trans>Email</Trans> </th>
                        <th> <Trans>Products</Trans> </th>
                        <th> <Trans>Start Date</Trans> </th>
                        <th> <Trans>Actions </Trans></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check form-check-flat m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </td>
                        <td>
                          <img src={require('../../assets/images/faces/face1.jpg')} alt="face" />
                        </td>
                        <td> <Trans>David Grey</Trans> </td>
                        <td> <Trans>davidgrey@demo.com</Trans> </td>
                        <td> <Trans>6300 </Trans></td>
                        <td> 01/11/2017 </td>
                        <td>
                          <i className="mdi mdi-pencil icon-sm mr-2 text-success"></i>
                          <i className="mdi mdi-close icon-sm text-danger"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-flat m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </td>
                        <td>
                          <img src={require('../../assets/images/faces/face2.jpg')} alt="face" />
                        </td>
                        <td> <Trans>Stella Johnson</Trans> </td>
                        <td> <Trans>stella@demo.com </Trans></td>
                        <td> 1256 </td>
                        <td> 03/11/2017 </td>
                        <td>
                          <i className="mdi mdi-pencil icon-sm mr-2 text-success"></i>
                          <i className="mdi mdi-close icon-sm text-danger"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-flat m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </td>
                        <td>
                          <img src={require('../../assets/images/faces/face5.jpg')} alt="face" />
                        </td>
                        <td> <Trans>Marina Michel</Trans> </td>
                        <td> <Trans>marinam@demo.com </Trans></td>
                        <td> 8600 </td>
                        <td> 26/10/2017 </td>
                        <td>
                          <i className="mdi mdi-pencil icon-sm mr-2 text-success"></i>
                          <i className="mdi mdi-close icon-sm text-danger"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-flat m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </td>
                        <td>
                          <img src={require('../../assets/images/faces/face3.jpg')} alt="face" />
                        </td>
                        <td> <Trans>John Doe</Trans> </td>
                        <td> <Trans>djohn@demo.com</Trans> </td>
                        <td> 3250 </td>
                        <td> 18/12/2017 </td>
                        <td>
                          <i className="mdi mdi-pencil icon-sm mr-2 text-success"></i>
                          <i className="mdi mdi-close icon-sm text-danger"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-flat m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </td>
                        <td>
                          <img src={require('../../assets/images/faces/face4.jpg')} alt="face" />
                        </td>
                        <td> <Trans>Catherine</Trans> </td>
                        <td> <Trans>catherine@demo.com</Trans> </td>
                        <td> 8750 </td>
                        <td> 15/09/2017 </td>
                        <td>
                          <i className="mdi mdi-pencil icon-sm mr-2 text-success"></i>
                          <i className="mdi mdi-close icon-sm text-danger"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"><Trans>Messages</Trans></h4>
                <div className="preview-list">
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img src={require('../../assets/images/faces/face15.jpg')} alt="face" className="rounded-circle" />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-sm-flex justify-content-between">
                          <h6 className="preview-subject"><Trans>Richard Joy</Trans></h6>
                          <div className="d-flex">
                            <p className="text-small text-muted border-right pr-3">13.06.2017</p>
                            <p className="text-small text-muted pl-3"><Trans>2 hours ago</Trans></p>
                          </div>
                        </div>
                        <p><Trans>Well, it seems to be working now. Thank You !</Trans></p>
                      </div>
                    </div>
                  </div>
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img src={require('../../assets/images/faces/face16.jpg')} alt="face" className="rounded-circle" />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-sm-flex justify-content-between">
                          <h6 className="preview-subject"><Trans>Richard Joy</Trans></h6>
                          <div className="d-flex">
                            <p className="text-small text-muted border-right pr-3">13.06.2017</p>
                            <p className="text-small text-muted pl-3">2 hours ago</p>
                          </div>
                        </div>
                        <p><Trans>Well, it seems to be working now. Thank You !</Trans></p>
                      </div>
                    </div>
                  </div>
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img src={require('../../assets/images/faces/face17.jpg')} alt="face" className="rounded-circle" />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-sm-flex justify-content-between">
                          <h6 className="preview-subject"><Trans>Richard Joy</Trans></h6>
                          <div className="d-flex">
                            <p className="text-small text-muted border-right pr-3">13.06.2017</p>
                            <p className="text-small text-muted pl-3"><Trans>2 hours ago</Trans></p>
                          </div>
                        </div>
                        <p><Trans>Well, it seems to be working now. Thank You !</Trans></p>
                      </div>
                    </div>
                  </div>
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img src={require('../../assets/images/faces/face18.jpg')} alt="face" className="rounded-circle" />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-sm-flex justify-content-between">
                          <h6 className="preview-subject"><Trans>Richard Joy</Trans></h6>
                          <div className="d-flex">
                            <p className="text-small text-muted border-right pr-3">13.06.2017</p>
                            <p className="text-small text-muted pl-3"><Trans>2 hours ago</Trans></p>
                          </div>
                        </div>
                        <p><Trans>Well, it seems to be working now. Thank You !</Trans></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"><Trans>Todo</Trans></h4>
                <TodoListRtlComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"><Trans>Audience by Countries</Trans></h4>
                <div className="row">
                  <div className="col-md-5">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-us"></i>
                            </td>
                            <td><Trans>USA</Trans></td>
                            <td className="text-right"> 1500 </td>
                            <td className="text-right font-weight-medium"> 56.35% </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-de"></i>
                            </td>
                            <td><Trans>Germany</Trans></td>
                            <td className="text-right"> 800 </td>
                            <td className="text-right font-weight-medium"> 33.25% </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-au"></i>
                            </td>
                            <td><Trans>Australia</Trans></td>
                            <td className="text-right"> 760 </td>
                            <td className="text-right font-weight-medium"> 15.45% </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-gb"></i>
                            </td>
                            <td><Trans>United Kingdom</Trans></td>
                            <td className="text-right"> 450 </td>
                            <td className="text-right font-weight-medium"> 25.00% </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-ro"></i>
                            </td>
                            <td><Trans>Romania</Trans></td>
                            <td className="text-right"> 620 </td>
                            <td className="text-right font-weight-medium"> 10.25% </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-br"></i>
                            </td>
                            <td><Trans>Brasil</Trans></td>
                            <td className="text-right"> 230 </td>
                            <td className="text-right font-weight-medium"> 75.00% </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div id="audience-map" className="vector-map"></div>
                    <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent" //change it to ocean blue: #0077be
                    panOnDrag={true}
                    containerClassName="dashboard-vector-map"
                    focusOn= { {
                      x: 0.5,
                      y: 0.5,
                      scale: 1,
                      animate: true
                    }}
                    series={{
                      regions: [{
                        scale: ['#3d3c3c', '#f2f2f2'],
                        normalizeFunction: 'polynomial',
                        values: mapData
                      }]
                    }}
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default Dashboard;