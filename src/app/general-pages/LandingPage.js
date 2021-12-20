import React, { Component } from 'react'

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="banner-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="!#" onClick={event => event.preventDefault()}><img src={ require( "../../assets/images/logo.svg") } alt="logo" /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="mdi mdi-menu"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="!#" onClick={event => event.preventDefault()}>HOME</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="!#" onClick={event => event.preventDefault()}>PRICING</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="!#" onClick={event => event.preventDefault()}>CONTACT</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="row py-sm-5 py-0">
              <div className="col-lg-7 banner-content">
                <h1 className="mr-2 text-white"> All you need for creating dashboard UI and complex web interfaces. </h1>
                <h3 className="font-weight-light text-white pt-2 pb-5"> Corona Admin Template </h3>
                <div className="my-5">
                  <button className="btn btn-primary btn-lg mr-2 mb-3">VIEW ALL DEMO</button>
                  <button className="btn btn-danger btn-lg ml-2 mb-3">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="details-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 pb-3">
                <div className="card card-icon-top">
                  <div className="card-body text-center">
                    <img src={ require( "../../assets/images/samples/bootstrap-stack.png")} alt="sample" className="card-icon" />
                    <h4>Bootstrap 4</h4>
                    <p className="card-text"> Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 pb-3">
                <div className="card card-icon-top">
                  <div className="card-body text-center">
                    <img src={ require( "../../assets/images/samples/logo.svg" )}alt="sample" className="card-icon" />
                    <h4>React</h4>
                    <p className="card-text"> React is a platform that makes it easy to build applications with the web. </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 pb-3">
                <div className="card card-icon-top">
                  <div className="card-body text-center">
                    <img src={ require( "../../assets/images/samples/html5.png")} alt="sample" className="card-icon" />
                    <h4>Static HTML</h4>
                    <p className="card-text"> This is built with Jquery and static HTML that can be integrated to any framewroks </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-md-8 mx-auto py-5 text-center">
                <h1>Choose Your Demo</h1>
                <h4 className="font-weight-light"> This template comes with React and HTML5/jQuery version, which helps to choose the best dashboard solution to fit your project needs. </h4>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-4 grid-margin">
                <div className="m-3">
                  <div className="card card-item-preview">
                    <img className="card-img-top" src={ require( "../../assets/images/samples/dashboard.jpg")} alt="sample" />
                    <div className="card-body py-3 border-top">
                      <label className="badge badge-warning">New</label>
                      <h3 className="font-weight-normal mb-0 text-center">Dashboard</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin">
                <div className="m-3">
                  <div className="card card-item-preview">
                    <img className="card-img-top" src={ require( "../../assets/images/samples/widgets.jpg")} alt="sapmle" />
                    <div className="card-body py-3 border-top">
                      <h3 className="font-weight-normal mb-0 text-center">Widgets</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin">
                <div className="m-3">
                  <div className="card card-item-preview">
                    <img className="card-img-top" src={ require( "../../assets/images/samples/modal.jpg")} alt="demo" />
                    <div className="card-body py-3 border-top">
                      <h3 className="font-weight-normal mb-0 text-center">Modals</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin">
                <div className="m-3">
                  <div className="card card-item-preview">
                    <img className="card-img-top" src={ require( "../../assets/images/samples/e-commerce.jpg")} alt="demo" />
                    <div className="card-body py-3 border-top">
                      <h3 className="font-weight-normal mb-0 text-center">E-commerce</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin">
                <div className="m-3">
                  <div className="card card-item-preview">
                    <img className="card-img-top" src={ require( "../../assets/images/samples/email.jpg")} alt="demo" />
                    <div className="card-body py-3 border-top">
                      <h3 className="font-weight-normal mb-0 text-center">Email</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin">
                <div className="m-3">
                  <div className="card card-item-preview">
                    <img className="card-img-top" src={ require( "../../assets/images/samples/charts.jpg")} alt="demo" />
                    <div className="card-body py-3 border-top">
                      <label className="badge badge-success">New</label>
                      <h3 className="font-weight-normal mb-0 text-center">Charts</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin">
                <div className="m-3">
                  <div className="card card-item-preview">
                    <img className="card-img-top" src={ require( "../../assets/images/samples/editors.jpg")} alt="demo" />
                    <div className="card-body py-3 border-top">
                      <h3 className="font-weight-normal mb-0 text-center">Code-Editors</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin">
                <div className="m-3">
                  <div className="card card-item-preview">
                    <img className="card-img-top" src={ require( "../../assets/images/samples/forms.jpg")} alt="demo" />
                    <div className="card-body py-3 border-top">
                      <label className="badge badge-info">New</label>
                      <h3 className="font-weight-normal mb-0 text-center">Forms</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin">
                <div className="m-3">
                  <div className="card card-item-preview">
                    <img className="card-img-top" src={ require( "../../assets/images/samples/popup.jpg")} alt="demo" />
                    <div className="card-body py-3 border-top">
                      <h3 className="font-weight-normal mb-0 text-center">Popups</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-12 pb-5 text-center">
                <h1>Top Features</h1>
              </div>
              <div className="feature-list pt-5">
                <div className="row feature-list-row text-center border-bottom">
                  <div className="col-lg-3 feature-list-item border-right">
                    <i className="mdi mdi-briefcase"></i>
                    <h3>Lots of widgtes</h3>
                    <p className="feature-description">Wide range of Widgets are available with this Package.</p>
                  </div>
                  <div className="col-lg-3 feature-list-item border-right">
                    <i className="mdi mdi-target"></i>
                    <h3>Bootstrap 4</h3>
                    <p className="feature-description">It is made with bootstrap 4 framework</p>
                  </div>
                  <div className="col-lg-3 feature-list-item border-right">
                    <i className="mdi mdi-cellphone"></i>
                    <h3>Fully Responsive</h3>
                    <p className="feature-description">Fully responsive accross all devices</p>
                  </div>
                  <div className="col-lg-3 feature-list-item">
                    <i className="mdi mdi-emoticon-happy-outline"></i>
                    <h3>3000+ icon fonts</h3>
                    <p className="feature-description">Lots of icon fonts are included in the package</p>
                  </div>
                </div>
                <div className="row feature-list-row text-center">
                  <div className="col-lg-3 feature-list-item border-right">
                    <i className="mdi mdi-select-compare"></i>
                    <h3>Dark and light sidebars</h3>
                    <p className="feature-description">Included Dark and Light Sidebar for getting desired look and feel.</p>
                  </div>
                  <div className="col-lg-3 feature-list-item border-right">
                    <i className="mdi mdi-monitor"></i>
                    <h3>Easy to customize</h3>
                    <p className="feature-description">Customization will be easy as we understand your pain.</p>
                  </div>
                  <div className="col-lg-3 feature-list-item border-right">
                    <i className="mdi mdi-format-color-fill"></i>
                    <h3>6 theme colors</h3>
                    <p className="feature-description">We have included 6 pre-defined color schemes with this admin.</p>
                  </div>
                  <div className="col-lg-3 feature-list-item">
                    <i className="mdi mdi-receipt"></i>
                    <h3>Detailed documentation</h3>
                    <p className="feature-description">We have made detailed documentation, for ease of use.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="border-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <img className="img-fluid" src={ require( "../../assets/images/logo.svg")} alt="logo" />
                  <div className="d-flex pt-5 pb-5">
                    <div className="social-icons bg-info text-white"><span className="mdi mdi-facebook"></span></div>
                    <div className="social-icons bg-info text-white"><span className="mdi mdi-pinterest"></span></div>
                    <div className="social-icons bg-info text-white"><span className="mdi mdi-dribbble"></span></div>
                    <div className="social-icons bg-info text-white"><span className="mdi mdi-twitter"></span></div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex">
                    <i className="mdi mdi-cellphone-android"></i>
                    <h6 className="font-weight-normal">(0000) 1234 5678</h6>
                  </div>
                  <div className="d-flex">
                    <i className="mdi mdi-settings"></i>
                    <h6 className="font-weight-normal">support@staradmin.org</h6>
                  </div>
                  <ul className="nav mt-3">
                    <li className="nav-item">
                      <a className="nav-link pl-0" href="!#" onClick={event => event.preventDefault()}>Demos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="!#" onClick={event => event.preventDefault()}>Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="!#" onClick={event => event.preventDefault()}>Support</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="!#" onClick={event => event.preventDefault()}>Documentation</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <h3 className="text-white">Newsletter</h3>
                  <p>To get the latest news from us please subscribe your email.</p>
                  <div className="mt-3">
                    <input type="email" className="form-control mb-2" placeholder="Enter your email" /> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <h4 className="mt-3">Copyright © 2020 <a href="!#" onClick={event => event.preventDefault()}>bootstrapdash</a>. All rights reserved.</h4>
              </div>
              <div className="col-sm-4">
                <h4>Hand-crafted &amp; made with <i className="mdi mdi-heart text-danger d-inline-block"></i>
                </h4>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default LandingPage
