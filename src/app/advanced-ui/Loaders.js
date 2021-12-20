import React, { Component } from 'react'

export class Loaders extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Loaders </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Loaders</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Loaders</h4>
                <p className="card-description">A collection of awesome customizable loaders</p>
                <div className="row">
                  <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                    <div className="loader-demo-box">
                      <div className="square-box-loader">
                        <div className="square-box-loader-container">
                          <div className="square-box-loader-corner-top"></div>
                          <div className="square-box-loader-corner-bottom"></div>
                        </div>
                        <div className="square-box-loader-square"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                    <div className="loader-demo-box">
                      <div className="pixel-loader"></div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                    <div className="loader-demo-box">
                      <div className="bar-loader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                    <div className="loader-demo-box">
                      <div className="jumping-dots-loader">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                    <div className="loader-demo-box">
                      <div className="square-path-loader"></div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                    <div className="loader-demo-box">
                      <div className="dot-opacity-loader">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                    <div className="loader-demo-box">
                      <div className="flip-square-loader mx-auto"></div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                    <div className="loader-demo-box">
                      <div className="moving-square-loader"></div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                    <div className="loader-demo-box">
                      <div className="circle-loader"></div>
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

export default Loaders
