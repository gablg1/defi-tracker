import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

export class UserListing extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex mb-4">
              <h5 className="mr-2 font-weight-semibold border-right pr-2 mr-2">Users</h5>
              <h5 className="font-weight-semibold">430</h5>
            </div>
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="card rounded shadow-none border">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-5 d-sm-flex">
                        <div className="user-avatar mb-auto">
                          <img src={require("../../assets/images/faces/face1.jpg")} alt="profile" className="profile img-lg rounded-circle" />
                          <span className="edit-avatar-icon"><i className="mdi mdi-camera"></i></span>
                        </div>
                        <div className="wrapper pl-sm-4">
                          <div className="wrapper d-flex align-items-center">
                            <h4 className="mb-0 font-weight-medium">Danny Santiago</h4>
                            <div className="badge badge-secondary text-dark mt-2 ml-2">Pro</div>
                          </div>
                          <div className="wrapper d-flex align-items-center font-weight-medium text-muted">
                            <i className="mdi mdi-map-marker-outline mr-2"></i>
                            <p className="mb-0 text-muted">San Francisco, California</p>
                          </div>
                          <div className="wrapper d-flex align-items-start pt-3">
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-check-circle-outline icon-sm"></i>
                            </div>
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-email-outline icon-sm"></i>
                            </div>
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-format-list-bulleted icon-sm"></i>
                            </div>
                            <div className="wrapper pl-2">
                              <h6 className="mt-n1 mb-0 font-weight-medium">23455</h6>
                              <p className="text-muted">Viewers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8 col-xl-4">
                        <div className="d-flex align-items-center justify-content-between w-100">
                          <p className="mb-0 mr-3 font-weight-semibold">Progress</p>
                          <p className="mb-0 ml-3 font-weight-semibold">67%</p>
                        </div>
                        <ProgressBar variant="success" now={67}/>
                        <p className="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                      <div className="col-sm-4 col-xl-3">
                        <div className="wrapper d-flex justify-content-end">
                          <button type="button" className="btn btn-sm btn-inverse-primary mr-2">ASK</button>
                          <button type="button" className="btn btn-sm btn-info">HIRE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper border-top">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-traffic-light icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">TOTAL TRAFFIC</p>
                            <h4 className="font-weight-semibold mb-0">350,897</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-account-plus icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">NEW USERS</p>
                            <h4 className="font-weight-semibold mb-0">2,356</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-server-security icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">SALES</p>
                            <h4 className="font-weight-semibold mb-0">927</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-chart-arc icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">PERFORMANCE</p>
                            <h4 className="font-weight-semibold mb-0 text-primary">49.65%</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex align-items-center">
                          <div className="image-grouped ml-md-auto">
                            <img src={require("../../assets/images/faces/face20.jpg")} data-toggle="tooltip" data-placement="top" title="Mary Sharp" alt="profile"/>
                            <img src={require("../../assets/images/faces/face17.jpg")} data-toggle="tooltip" data-placement="top" title="Cory Medina" alt="profile"/>
                            <img src={require("../../assets/images/faces/face14.jpg")} data-toggle="tooltip" data-placement="top" title="Clyde Hammond" alt="profile"/>
                            <div className="text-avatar" data-toggle="tooltip" data-placement="top" title="4 More Peoples">+4</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-5">
                <div className="card rounded shadow-none border">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-5 d-sm-flex">
                        <div className="user-avatar mb-auto">
                          <img src={require("../../assets/images/faces/face2.jpg")} alt="profile" className="profile-img img-lg rounded-circle" />
                          <span className="edit-avatar-icon"><i className="mdi mdi-camera"></i></span>
                        </div>
                        <div className="wrapper pl-4">
                          <div className="wrapper d-flex align-items-center">
                            <h4 className="mb-0 font-weight-medium">Lelia Bowers</h4>
                          </div>
                          <div className="wrapper d-flex align-items-center font-weight-medium text-muted">
                            <i className="mdi mdi-map-marker-outline mr-2"></i>
                            <p className="mb-0 text-muted">Central African Republic</p>
                          </div>
                          <div className="wrapper d-flex align-items-start pt-3">
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-check-circle-outline icon-sm"></i>
                            </div>
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-email-outline icon-sm"></i>
                            </div>
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-email-outline icon-sm"></i>
                            </div>
                            <div className="wrapper pl-2">
                              <h6 className="mt-n1 mb-0 font-weight-medium">23525</h6>
                              <p className="text-muted">Viewers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8 col-xl-4">
                        <div className="d-flex align-items-center justify-content-between w-100">
                          <p className="mb-0 mr-3 font-weight-semibold">Progress</p>
                          <p className="mb-0 ml-3 font-weight-semibold">45%</p>
                        </div>
                        <ProgressBar variant="info" now={45}/> 
                        <p className="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                      <div className="col-sm-4 col-xl-3">
                        <div className="wrapper d-flex justify-content-end">
                          <button type="button" className="btn btn-sm btn-inverse-primary mr-2">ASK</button>
                          <button type="button" className="btn btn-sm btn-info">HIRE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper border-top">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-traffic-light icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">TOTAL TRAFFIC</p>
                            <h4 className="font-weight-semibold mb-0">443,235</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-account-plus icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">NEW USERS</p>
                            <h4 className="font-weight-semibold mb-0">3,433</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-server-security icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">SALES</p>
                            <h4 className="font-weight-semibold mb-0">345</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-chart-arc icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">PERFORMANCE</p>
                            <h4 className="font-weight-semibold mb-0 text-primary">34.43%</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex align-items-center">
                          <div className="image-grouped ml-md-auto">
                            <img src={require("../../assets/images/faces/face11.jpg")} data-toggle="tooltip" data-placement="top" title="Mary Sharp" alt="profile"/>
                            <img src={require("../../assets/images/faces/face12.jpg")} data-toggle="tooltip" data-placement="top" title="Cory Medina" alt="profile"/>
                            <img src={require("../../assets/images/faces/face23.jpg")} data-toggle="tooltip" data-placement="top" title="Clyde Hammond" alt="profile"/>
                            <div className="text-avatar" data-toggle="tooltip" data-placement="top" title="4 More Peoples">+4</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-5">
                <div className="card rounded shadow-none border">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-4 d-sm-flex">
                        <div className="user-avatar mb-auto">
                          <img src={require("../../assets/images/faces/face3.jpg")} alt="profile" className="profile img-lg rounded-circle" />
                          <span className="edit-avatar-icon"><i className="mdi mdi-camera"></i></span>
                        </div>
                        <div className="wrapper pl-4">
                          <div className="wrapper d-flex align-items-center">
                            <h4 className="mb-0 font-weight-medium">Tommy Jenkins</h4>
                          </div>
                          <div className="wrapper d-flex align-items-center font-weight-medium text-muted">
                            <i className="mdi mdi-map-marker-outline mr-2"></i>
                            <p className="mb-0 text-muted">Bouvet Island</p>
                          </div>
                          <div className="wrapper d-flex align-items-start pt-3">
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-check-circle-outline icon-sm"></i>
                            </div>
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-email-outline icon-sm"></i>
                            </div>
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-format-list-bulleted icon-sm"></i>
                            </div>
                            <div className="wrapper pl-2">
                              <h6 className="mt-n1 mb-0 font-weight-medium">34526</h6>
                              <p className="text-muted">Viewers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8 col-xl-4">
                        <div className="d-flex align-items-center justify-content-between w-100">
                          <p className="mb-0 mr-3 font-weight-semibold">Progress</p>
                          <p className="mb-0 ml-3 font-weight-semibold">77%</p>
                        </div>
                        <ProgressBar variant="danger" now={77}/>
                        <p className="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                      <div className="col-sm-4 col-xl-3">
                        <div className="wrapper d-flex justify-content-end">
                          <button type="button" className="btn btn-sm btn-inverse-primary mr-2">ASK</button>
                          <button type="button" className="btn btn-sm btn-info">HIRE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper border-top">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-traffic-light icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">TOTAL TRAFFIC</p>
                            <h4 className="font-weight-semibold mb-0">563,645</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-account-plus icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">NEW USERS</p>
                            <h4 className="font-weight-semibold mb-0">2,543</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-server-security icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">SALES</p>
                            <h4 className="font-weight-semibold mb-0">765</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-chart-arc icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">PERFORMANCE</p>
                            <h4 className="font-weight-semibold mb-0 text-primary">23.56%</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex align-items-center">
                          <div className="image-grouped ml-md-auto">
                            <img src={require("../../assets/images/faces/face8.jpg")} data-toggle="tooltip" data-placement="top" title="Mary Sharp" alt="profile"/>
                            <img src={require("../../assets/images/faces/face7.jpg")} data-toggle="tooltip" data-placement="top" title="Cory Medina" alt="profile"/>
                            <img src={require("../../assets/images/faces/face9.jpg")} data-toggle="tooltip" data-placement="top" title="Clyde Hammond" alt="profile"/>
                            <div className="text-avatar" data-toggle="tooltip" data-placement="top" title="4 More Peoples">+4</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-5">
                <div className="card rounded shadow-none border">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-5 d-sm-flex">
                        <div className="user-avatar mb-auto">
                          <img src={require("../../assets/images/faces/face6.jpg")} alt="profile" className="profile-img img-lg rounded-circle"/>
                          <span className="edit-avatar-icon"><i className="mdi mdi-camera"></i></span>
                        </div>
                        <div className="wrapper pl-4">
                          <div className="wrapper d-flex align-items-center">
                            <h4 className="mb-0 font-weight-medium">Ramiz Dedaković</h4>
                          </div>
                          <div className="wrapper d-flex align-items-center font-weight-medium text-muted">
                            <i className="mdi mdi-map-marker-outline mr-2"></i>
                            <p className="mb-0 text-muted">Saint Kitts and Nevis</p>
                          </div>
                          <div className="wrapper d-flex align-items-start pt-3">
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-check-circle-outline icon-sm"></i>
                            </div>
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-email-outline icon-sm"></i>
                            </div>
                            <div className="badge badge-secondary text-dark mr-2">
                              <i className="mdi mdi-email-outline icon-sm"></i>
                            </div>
                            <div className="wrapper pl-2">
                              <h6 className="mt-n1 mb-0 font-weight-medium">69434</h6>
                              <p className="text-muted">Viewers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8 col-xl-4">
                        <div className="d-flex align-items-center justify-content-between w-100">
                          <p className="mb-0 mr-3 font-weight-semibold">Progress</p>
                          <p className="mb-0 ml-3 font-weight-semibold">55%</p>
                        </div>
                        <ProgressBar variant="warning" now={55}/>
                        <p className="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                      <div className="col-sm-4 col-xl-3">
                        <div className="wrapper d-flex justify-content-end">
                          <button type="button" className="btn btn-sm btn-inverse-primary mr-2">ASK</button>
                          <button type="button" className="btn btn-sm btn-info">HIRE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper border-top">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-traffic-light icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">TOTAL TRAFFIC</p>
                            <h4 className="font-weight-semibold mb-0">343,525</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-account-plus icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">NEW USERS</p>
                            <h4 className="font-weight-semibold mb-0">5,324</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-server-security icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">SALES</p>
                            <h4 className="font-weight-semibold mb-0">235</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex">
                          <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                            <i className="mdi mdi-chart-arc icon-sm my-0 "></i>
                          </div>
                          <div className="wrapper pl-3">
                            <p className="mb-0 font-weight-medium text-muted">PERFORMANCE</p>
                            <h4 className="font-weight-semibold mb-0 text-primary">45.23%</h4>
                          </div>
                        </div>
                        <div className="col-md mb-2 mb-md-0 d-flex align-items-center">
                          <div className="image-grouped ml-md-auto">
                            <img src={require("../../assets/images/faces/face13.jpg")} data-toggle="tooltip" data-placement="top" title="Mary Sharp" alt="profile"/>
                            <img src={require("../../assets/images/faces/face14.jpg")} data-toggle="tooltip" data-placement="top" title="Cory Medina" alt="profile"/>
                            <img src={require("../../assets/images/faces/face4.jpg")} data-toggle="tooltip" data-placement="top" title="Clyde Hammond" alt="profile"/>
                            <div className="text-avatar" data-toggle="tooltip" data-placement="top" title="4 More Peoples">+2</div>
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
      </div>
    )
  }
}

export default UserListing
