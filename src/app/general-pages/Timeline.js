import React, { Component } from 'react'

export class Timeline extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Timeline
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>General pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Timeline</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Timeline</h4>
                <p className="card-description">A simple timeline</p>
                <div className="mt-5">
                  <div className="timeline">
                    <div className="timeline-wrapper timeline-wrapper-warning">
                      <div className="timeline-badge"></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h6 className="timeline-title">Bootstrap 4 Beta</h6>
                        </div>
                        <div className="timeline-body">
                          <p>Two years in the making, we finally have our first beta release of Bootstrap 4.</p>
                        </div>
                        <div className="timeline-footer d-flex align-items-center flex-wrap">
                            <i className="mdi mdi-heart text-muted mr-1"></i>
                            <span>19</span>
                            <span className="ml-md-auto font-weight-bold">19 Oct 2017</span>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                      <div className="timeline-badge"></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h6 className="timeline-title">Bootstrap 4 Alpha 6</h6>
                        </div>
                        <div className="timeline-body">
                          <p>Alpha 6 has landed, and it’s one of our biggest ships to date.</p>
                        </div>
                        <div className="timeline-footer d-flex align-items-center flex-wrap">
                            <i className="mdi mdi-heart text-muted mr-1"></i>
                            <span>25</span>
                            <span className="ml-md-auto font-weight-bold">10th Aug 2017</span>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-wrapper timeline-wrapper-success">
                      <div className="timeline-badge"></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h6 className="timeline-title">Bootstrap 4 Alpha 5</h6>
                        </div>
                        <div className="timeline-body">
                          <p>Alpha 5 has arrived just over a month after Alpha 4 with some major feature improvements and a boat load of bug fixes.</p>
                        </div>
                        <div className="timeline-footer d-flex align-items-center flex-wrap">
                            <i className="mdi mdi-heart text-muted mr-1"></i>
                            <span>19</span>
                            <span className="ml-md-auto font-weight-bold">5th Sep 2016</span>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-wrapper timeline-inverted timeline-wrapper-info">
                      <div className="timeline-badge"></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h6 className="timeline-title">Bootstrap 4 Alpha 4</h6>
                        </div>
                        <div className="timeline-body">
                          <p>Alpha 4 is here to address those pesky build and package errors, a few CSS bugs, and some documentation inconsistencies we introduced in our last release.</p>
                        </div>
                        <div className="timeline-footer d-flex align-items-center flex-wrap">
                            <i className="mdi mdi-heart text-muted mr-1"></i>
                            <span>19</span>
                            <span className="ml-md-auto font-weight-bold">27th July 2016</span>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-wrapper timeline-wrapper-primary">
                      <div className="timeline-badge"></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h6 className="timeline-title">Bootstrap 4 Alpha 3</h6>
                        </div>
                        <div className="timeline-body">
                          <p>Alpha 3 has landed! We have an overhauled grid, updated form controls, a new font stack, tons of bug fixes, and more.</p>
                        </div>
                        <div className="timeline-footer d-flex align-items-center flex-wrap">
                            <i className="mdi mdi-heart text-muted mr-1"></i>
                            <span>25</span>
                            <span className="ml-md-auto font-weight-bold">25th July 2016</span>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-wrapper timeline-inverted timeline-wrapper-info">
                      <div className="timeline-badge"></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h6 className="timeline-title">Bootstrap 4 Alpha 2</h6>
                        </div>
                        <div className="timeline-body">
                          <p>The general plan for v4’s development starts with a few alpha releases. We’re a little behind on that, but should be getting caught up as the year winds down.</p>
                        </div>
                        <div className="timeline-footer d-flex align-items-center flex-wrap">
                            <i className="mdi mdi-heart text-muted mr-1"></i>
                            <span>32</span>
                            <span className="ml-md-auto font-weight-bold">19th Aug 2015</span>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-wrapper timeline-wrapper-success">
                      <div className="timeline-badge"></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h6 className="timeline-title">Bootstrap 4 alpha 1</h6>
                        </div>
                        <div className="timeline-body">
                          <p>Bootstrap 4 has been a massive undertaking that touches nearly every line of code.</p>
                        </div>
                        <div className="timeline-footer d-flex align-items-center flex-wrap">
                            <i className="mdi mdi-heart text-muted mr-1"></i>
                            <span>26</span>
                            <span className="ml-md-auto font-weight-bold">15th Jun 2015</span>
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

export default Timeline
