import React, { Component } from 'react';
import { ProgressBar} from 'react-bootstrap';
import Rating from 'react-rating';

export class Profile extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Profile
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>General pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Profile</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="border-bottom text-center pb-4">
                      <img src={require("../../assets/images/faces/face12.jpg")} alt="profile" className="img-lg rounded-circle mb-3"/>
                      <div className="mb-3">
                        <h3>David Grey. H</h3>
                        <div className="d-flex align-items-center justify-content-center">
                          <h5 className="mb-0 mr-2 text-muted">Canada</h5>
                          {/* <bar-rating [(rate)]="profileRate" [max]="5"></bar-rating> */}
                          <Rating
                            emptySymbol="fa fa-star-o fa-1x"
                            fullSymbol="fa fa-star fa-1x"
                            className="rating"
                          />
                        </div>
                      </div>
                      <p className="w-75 mx-auto mb-3">Bureau Oberhaeuser is a design bureau focused on Information- and Interface Design. </p>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-success mr-1">Hire Me</button>
                        <button className="btn btn-success">Follow</button>
                      </div>
                    </div>
                    <div className="border-bottom py-4">
                      <p>Skills</p>
                      <div>
                        <label className="badge badge-outline-light mr-1">Chalk</label>
                        <label className="badge badge-outline-light mr-1">Hand lettering</label>
                        <label className="badge badge-outline-light mr-1">Information Design</label>
                        <label className="badge badge-outline-light mr-1">Graphic Design</label>
                        <label className="badge badge-outline-light mr-1">Web Design</label>  
                      </div>                                                               
                    </div>
                    <div className="border-bottom py-4">
                      <div className="mb-3">
                        <ProgressBar variant="primary" now={55}/>
                      </div>
                      <div>
                        <ProgressBar variant="success" now={75}/>
                      </div>
                    </div>
                    <div className="py-4">
                      <p className="clearfix">
                        <span className="float-left">
                          Status
                        </span>
                        <span className="float-right text-muted">
                          Active
                        </span>
                      </p>
                      <p className="clearfix">
                        <span className="float-left">
                          Phone
                        </span>
                        <span className="float-right text-muted">
                          006 3435 22
                        </span>
                      </p>
                      <p className="clearfix">
                        <span className="float-left">
                          Mail
                        </span>
                        <span className="float-right text-muted">
                          Jacod@testmail.com
                        </span>
                      </p>
                      <p className="clearfix">
                        <span className="float-left">
                          Facebook
                        </span>
                        <span className="float-right text-muted">
                          <a href="!#" onClick={event => event.preventDefault()}>David Grey</a>
                        </span>
                      </p>
                      <p className="clearfix">
                        <span className="float-left">
                          Twitter
                        </span>
                        <span className="float-right text-muted">
                          <a href="!#" onClick={event => event.preventDefault()}>@davidgrey</a>
                        </span>
                      </p>
                    </div>
                    <button className="btn btn-primary btn-block mb-2">Preview</button>
                  </div>
                  <div className="col-lg-8">
                    <div className="d-block d-md-flex justify-content-between mt-4 mt-md-0">
                      <div className="text-center mt-4 mt-md-0">
                        <button className="btn btn-outline-primary mr-1">Message</button>
                        <button className="btn btn-primary">Request</button>
                      </div>
                    </div>
                    <div className="mt-4 py-2 border-top border-bottom">
                      <ul className="nav profile-navbar">
                        <li className="nav-item">
                          <a className="nav-link d-flex align-items-center" href="!#" onClick={event => event.preventDefault()}>
                            <i className="mdi mdi-account-outline mr-1"></i>
                            Info
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link d-flex align-items-center active" href="!#" onClick={event => event.preventDefault()}>
                            <i className="mdi mdi-newspaper mr-1"></i>
                            Feed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link d-flex align-items-center" href="!#" onClick={event => event.preventDefault()}>
                            <i className="mdi mdi-calendar mr-1"></i>
                            Agenda
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link d-flex align-items-center" href="!#" onClick={event => event.preventDefault()}>
                            <i className="mdi mdi-attachment mr-1"></i>
                            Resume
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="profile-feed">
                      <div className="d-flex align-items-start profile-feed-item">
                        <img src={require("../../assets/images/faces/face13.jpg")} alt="profile" className="img-sm rounded-circle"/>
                        <div className="ml-4">
                          <h6>
                            Mason Beck
                            <small className="ml-4 text-muted"><i className="mdi mdi-clock mr-1"></i>10 hours</small>
                          </h6>
                          <p>
                            There is no better advertisement campaign that is low cost and also successful at the same time.
                          </p>
                          <p className="small text-muted mt-2 mb-0">
                            <span>
                              <i className="mdi mdi-star mr-1"></i>4
                            </span>
                            <span className="ml-2">
                              <i className="mdi mdi-comment mr-1"></i>11
                            </span>
                            <span className="ml-2">
                              <i className="mdi mdi-reply"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-start profile-feed-item">
                        <img src={require("../../assets/images/faces/face16.jpg")} alt="profile" className="img-sm rounded-circle"/>
                        <div className="pl-4">
                          <h6>
                            Willie Stanley
                            <small className="ml-4 text-muted"><i className="mdi mdi-clock mr-1"></i>10 hours</small>
                          </h6>
                          <img src={require("../../assets/images/samples/1280x768/12.jpg")} alt="sample" className="rounded mw-100"/>                            
                          <p className="small text-muted mt-2 mb-0">
                            <span>
                              <i className="mdi mdi-star mr-1"></i>4
                            </span>
                            <span className="ml-2">
                              <i className="mdi mdi-comment mr-1"></i>11
                            </span>
                            <span className="ml-2">
                              <i className="mdi mdi-reply"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-start profile-feed-item">
                        <img src={require("../../assets/images/faces/face19.jpg")} alt="profile" className="img-sm rounded-circle"/>
                        <div className="pl-4">
                          <h6>
                            Dylan Silva
                            <small className="ml-4 text-muted"><i className="mdi mdi-clock mr-1"></i>10 hours</small>
                          </h6>
                          <p>
                            When I first got into the online advertising business, I was looking for the magical combination 
                            that would put my website into the top search engine rankings
                          </p>
                          <img src={require("../../assets/images/samples/1280x768/5.jpg")} alt="sample" className="rounded mw-100"/>                                                        
                          <p className="small text-muted mt-2 mb-0">
                            <span>
                              <i className="mdi mdi-star mr-1"></i>4
                            </span>
                            <span className="ml-2">
                              <i className="mdi mdi-comment mr-1"></i>11
                            </span>
                            <span className="ml-2">
                              <i className="mdi mdi-reply"></i>
                            </span>
                          </p>
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

export default Profile
