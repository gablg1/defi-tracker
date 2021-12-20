import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

export class ProjectList extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <div className="wrapper">
                    <h4 className="card-title">All Projects (342)</h4>
                    <p>0 Selected - <span className="text-primary">Select all projects</span></p>
                  </div>
                  <div className="wrapper">
                  </div>
                </div>
                <div className="row project-list-showcase">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 project-grid">
                    <div className="project-grid-inner">
                      <div className="d-flex align-items-start">
                        <div className="wrapper">
                          <h5 className="project-title">Logo Design</h5>
                          <p className="project-location">San Francisco, California</p>
                        </div>
                        <div className="badge badge-success ml-auto">Finished</div>
                      </div>
                      <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2 font-weight-medium">Progress</p>
                        <p className="mb-2 font-weight-medium">70%</p>
                      </div>
                      <ProgressBar variant="success" className="progress-md mb-3" now={70} />
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="action-tags d-flex flex-row">
                          <div className="wrapper pr-4"><i className="mdi mdi-view-sequential mr-2"></i>50</div>
                          <div className="wrapper"><i className="mdi mdi-message-outline mr-2"></i>321</div>
                        </div>
                        <div className="image-grouped">
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face1.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face2.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face3.jpg") } alt="profile" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 project-grid">
                    <div className="project-grid-inner">
                      <div className="d-flex align-items-start">
                        <div className="wrapper">
                          <h5 className="project-title">Branding Mockup</h5>
                          <p className="project-location">San Francisco, CA</p>
                        </div>
                        <div className="badge badge-success ml-auto">Finished</div>
                      </div>
                      <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2 font-weight-medium">Progress</p>
                        <p className="mb-2 font-weight-medium">70%</p>
                      </div>
                        <ProgressBar variant="danger" className="progress-md mb-3" now={30} />
                      <div className="d-flex justify-content-between flex-wrap align-items-center">
                        <div className="action-tags d-flex flex-row">
                          <div className="wrapper pr-4"><i className="mdi mdi-view-sequential mr-2"></i>45</div>
                          <div className="wrapper"><i className="mdi mdi-message-outline mr-2"></i>123</div>
                        </div>
                        <div className="image-grouped">
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face12.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face4.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face15.jpg") } alt="profile" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 project-grid">
                    <div className="project-grid-inner">
                      <div className="d-flex align-items-start">
                        <div className="wrapper">
                          <h5 className="project-title">Mobile App Design</h5>
                          <p className="project-location">New York, USA</p>
                        </div>
                        <div className="badge badge-info ml-auto">On going</div>
                      </div>
                      <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2 font-weight-medium">Progress</p>
                        <p className="mb-2 font-weight-medium">50%</p>
                      </div>
                      <ProgressBar variant="warning" className="progress-md mb-3" now={50} />
                      <div className="d-flex justify-content-between flex-wrap align-items-center">
                        <div className="action-tags d-flex flex-row">
                          <div className="wrapper pr-4"><i className="mdi mdi-view-sequential mr-2"></i>50</div>
                          <div className="wrapper"><i className="mdi mdi-message-outline mr-2"></i>321</div>
                        </div>
                        <div className="image-grouped">
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face1.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face2.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face3.jpg") } alt="profile" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 project-grid">
                    <div className="img-holder img-bg-1">
                    </div>
                    <div className="project-grid-inner">
                      <div className="d-flex align-items-start">
                        <div className="wrapper">
                          <h5 className="project-title">Mobile App</h5>
                          <p className="project-location">Austin, Texas</p>
                        </div>
                        <div className="badge badge-success ml-auto">Finished</div>
                      </div>
                      <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2 font-weight-medium">Progress</p>
                        <p className="mb-2 font-weight-medium">70%</p>
                      </div>
                      <ProgressBar variant="info" className="progress-md mb-3" now={70} />
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="action-tags d-flex flex-row">
                          <div className="wrapper pr-4"><i className="mdi mdi-view-sequential mr-2"></i>50</div>
                          <div className="wrapper"><i className="mdi mdi-message-outline mr-2"></i>321</div>
                        </div>
                        <div className="image-grouped">
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face1.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face2.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face3.jpg") } alt="profile" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 project-grid">
                    <div className="img-holder img-bg-2">
                    </div>
                    <div className="project-grid-inner">
                      <div className="d-flex align-items-start">
                        <div className="wrapper">
                          <h5 className="project-title">Dashboard Design</h5>
                          <p className="project-location">Amsterdam, The Netherlands</p>
                        </div>
                        <div className="badge badge-danger ml-auto">Hold</div>
                      </div>
                      <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2 font-weight-medium">Progress</p>
                        <p className="mb-2 font-weight-medium">70%</p>
                      </div>
                      <ProgressBar variant="primary" className="progress-md mb-3" now={40} />
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="action-tags d-flex flex-row">
                          <div className="wrapper pr-4"><i className="mdi mdi-view-sequential mr-2"></i>34</div>
                          <div className="wrapper"><i className="mdi mdi-message-outline mr-2"></i>453</div>
                        </div>
                        <div className="image-grouped">
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face9.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face5.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face6.jpg") } alt="profile" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 project-grid">
                    <div className="img-holder img-bg-3">
                    </div>
                    <div className="project-grid-inner">
                      <div className="d-flex align-items-start">
                        <div className="wrapper">
                          <h5 className="project-title">Ecommerce Website</h5>
                          <p className="project-location">Shoreditch, London</p>
                        </div>
                        <div className="badge badge-info ml-auto">On going</div>
                      </div>
                      <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2 font-weight-medium">Progress</p>
                        <p className="mb-2 font-weight-medium">50%</p>
                      </div>
                      <ProgressBar variant="warning" className="progress-md mb-3" now={50} />
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="action-tags d-flex flex-row">
                          <div className="wrapper pr-4"><i className="mdi mdi-view-sequential mr-2"></i>65</div>
                          <div className="wrapper"><i className="mdi mdi-message-outline mr-2"></i>651</div>
                        </div>
                        <div className="image-grouped">
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face5.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face3.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face13.jpg") } alt="profile" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 project-grid">
                    <div className="project-grid-inner">
                      <img className="mb-3 mt-n3" src={ require("../../assets/images/brand_icons/bitmap.jpg") } alt="brand" />
                      <div className="d-flex align-items-start">
                        <div className="wrapper">
                          <h5 className="project-title">Logo Design</h5>
                          <p className="project-location">München, Germany</p>
                        </div>
                        <div className="badge badge-danger ml-auto">Hold</div>
                      </div>
                      <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2 font-weight-medium">Progress</p>
                        <p className="mb-2 font-weight-medium">70%</p>
                      </div>
                      <ProgressBar variant="success" className="progress-md mb-3" now={70} />
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="action-tags d-flex flex-row">
                          <div className="wrapper pr-4"><i className="mdi mdi-view-sequential mr-2"></i>34</div>
                          <div className="wrapper"><i className="mdi mdi-message-outline mr-2"></i>466</div>
                        </div>
                        <div className="image-grouped">
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face11.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face12.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face10.jpg") } alt="profile" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 project-grid">
                    <div className="project-grid-inner">
                    <img className="mb-3 mt-n3" src={ require("../../assets/images/brand_icons/oval-copy.jpg") } alt="profile" />
                      <div className="d-flex align-items-start">
                        <div className="wrapper">
                          <h5 className="project-title">Branding Mockup</h5>
                          <p className="project-location">Russia, Moscow</p>
                        </div>
                        <div className="badge badge-success ml-auto">Finished</div>
                      </div>
                      <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2 font-weight-medium">Progress</p>
                        <p className="mb-2 font-weight-medium">25%</p>
                      </div>
                      <ProgressBar variant="primary" className="progress-md mb-3" now={25} />
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="action-tags d-flex flex-row">
                          <div className="wrapper pr-4"><i className="mdi mdi-view-sequential mr-2"></i>67</div>
                          <div className="wrapper"><i className="mdi mdi-message-outline mr-2"></i>543</div>
                        </div>
                        <div className="image-grouped">
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face9.jpg") } alt="profile" />
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face8.jpg") } alt="profile" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 project-grid">
                    <div className="project-grid-inner">
                    <img className="mb-3 mt-n3" src={ require("../../assets/images/brand_icons/oval.jpg") } alt="brand" />
                      <div className="d-flex align-items-start">
                        <div className="wrapper">
                          <h5 className="project-title">Mobile App Design</h5>
                          <p className="project-location">Odessa, Ukraine</p>
                        </div>
                        <div className="badge badge-info ml-auto">On going</div>
                      </div>
                      <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2 font-weight-medium">Progress</p>
                        <p className="mb-2 font-weight-medium">22%</p>
                      </div>
                      <ProgressBar variant="warning" className="progress-md mb-3" now={22} />
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="action-tags d-flex flex-row">
                          <div className="wrapper pr-4"><i className="mdi mdi-view-sequential mr-2"></i>87</div>
                          <div className="wrapper"><i className="mdi mdi-message-outline mr-2"></i>558</div>
                        </div>
                        <div className="image-grouped">
                          <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face10.jpg") } alt="profile" />
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

export default ProjectList
