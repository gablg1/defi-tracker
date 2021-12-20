import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { useLocation } from "react-router-dom";
import _ from 'lodash';


class InnerHeader extends Component {
  render () {
    return (
      <div className="horizontal-menu">
        <nav className="navbar top-navbar default-layout-navbar col-lg-12 col-12 p-0 d-flex flex-row">
          <div className="container">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <Link className="navbar-brand brand-logo" to="/" style={{color: 'white', width: 200}}>
                DFK Reports
                <img src={require('../../assets/images/dfk-jewel.png')} alt="dfk" style={{marginLeft: 10}} />
              </Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-end">
              <ul className="navbar-nav w-100">
                <li className="nav-item w-100">
                  <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                    <input type="text" className="form-control" placeholder="Search here..." />
                  </form>
                </li>
              </ul>
              <ul className="navbar-nav navbar-nav-right">
                <Dropdown alignRight as="li" className="nav-item border-left" >
                  <Dropdown.Toggle as="a" className="nav-link count-indicator cursor-pointer">
                    <i className="mdi mdi-email"></i>
                    <span className="count bg-danger">5</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="navbar-dropdown preview-list">
                    <h6 className="p-3 mb-0"><Trans>Messages</Trans></h6>
                    <Dropdown.Divider />
                    <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-dark rounded-circle">
                          <img src={require('../../assets/images/faces/face4.jpg')} alt="profile" className="rounded-circle profile-pic" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <p className="preview-subject ellipsis mb-1"><Trans>Mark send you a message</Trans></p>
                        <p className="text-muted mb-0"> 1 <Trans>Minutes ago</Trans> </p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-dark rounded-circle">
                          <img src={require('../../assets/images/faces/face2.jpg')} alt="profile" className="rounded-circle profile-pic" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <p className="preview-subject ellipsis mb-1"><Trans>Cregh send you a message</Trans></p>
                        <p className="text-muted mb-0"> 15 <Trans>Minutes ago</Trans> </p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-dark rounded-circle">
                          <img src={require('../../assets/images/faces/face3.jpg')} alt="profile" className="rounded-circle profile-pic" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <p className="preview-subject ellipsis mb-1"><Trans>Profile picture updated</Trans></p>
                        <p className="text-muted mb-0"> 18 <Trans>Minutes ago</Trans> </p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <p className="p-3 mb-0 text-center">4 <Trans>new messages</Trans></p>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown alignRight as="li" className="nav-item border-left">
                  <Dropdown.Toggle as="a" className="nav-link count-indicator cursor-pointer">
                    <i className="mdi mdi-bell"></i>
                    <span className="count bg-danger">7</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                    <h6 className="p-3 mb-0"><Trans>Notifications</Trans></h6>
                    <Dropdown.Divider />
                    <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-dark rounded-circle">
                          <i className="mdi mdi-calendar text-success"></i>
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <p className="preview-subject mb-1"><Trans>Event today</Trans></p>
                        <p className="text-muted ellipsis mb-0">
                        <Trans>Just a reminder that you have an event today</Trans>
                        </p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-dark rounded-circle">
                          <i className="mdi mdi-settings text-danger"></i>
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject mb-1"><Trans>Settings</Trans></h6>
                        <p className="text-muted ellipsis mb-0">
                        <Trans>Update dashboard</Trans>
                        </p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-dark rounded-circle">
                          <i className="mdi mdi-link-variant text-warning"></i>
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject mb-1"><Trans>Launch Admin</Trans></h6>
                        <p className="text-muted ellipsis mb-0">
                        <Trans>New admin wow</Trans>!
                        </p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <p className="p-3 mb-0 text-center"><Trans>See all notifications</Trans></p>
                  </Dropdown.Menu>
                </Dropdown>
                <li className="nav-item">
                  <a className="nav-link cursor-pointer no-caret" href="!#">
                    <div className="navbar-profile">
                      <img className="img-xs rounded-circle" src={require('../../assets/images/faces/face15.jpg')} alt="profile" />
                    </div>
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <a className="nav-link" href="!#" onClick={event => event.preventDefault()}>
                    <i className="mdi mdi-view-grid"></i>
                  </a>
                </li>
              </ul>
              <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleBottomMenu}>
                <span className="ti-menu"></span>
              </button>
            </div>
          </div>
        </nav>
        <nav className="bottom-navbar">
          <div className="container">
            <ul className="nav page-navigation">
              <li className={ this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                <Link className="nav-link" to="/dashboard">
                  <i className="mdi mdi-speedometer menu-icon"></i>
                  <span className="menu-title"><Trans>Dashboard</Trans></span>
                </Link>
              </li>
              <li className={ this.isPathActive('/layout/RtlLayout') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                <Link className="nav-link" to="/layout/RtlLayout">
                  <i className="mdi mdi-file-restore menu-icon"></i>
                  <span className="menu-title">RTL</span>
                </Link>
              </li>
              <li className={ this.isPathActive('/widgets') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                <Link className="nav-link" to="/widgets">
                  <i className="mdi mdi mdi-texture menu-icon"></i>
                  <span className="menu-title"><Trans>Widgets</Trans></span>
                </Link>
              </li>
              <li className={ this.isPathActive('/basic-ui') ? 'nav-item menu-items mega-menu active' : this.isPathActive('/advanced-ui') ? 'nav-item menu-items mega-menu active' : this.isPathActive('/icons') ? 'nav-item menu-items mega-menu active' : 'nav-item menu-items mega-menu' }>
                <div href="#" className="nav-link">
                  <i className="mdi mdi-crosshairs-gps menu-icon"></i>
                  <span className="menu-title"><Trans>UI Elements</Trans></span>
                  <i className="menu-arrow"></i>
                </div>
                <div className="submenu">
                  <div className="col-group-wrapper row">
                    <div className="col-group col-md-4">
                      <div className="row">
                        <div className="col-12">
                          <p className="category-heading"><Trans>Basic Elements</Trans></p>
                          <div className="submenu-item">
                            <div className="row">
                              <div className="col-md-6">
                                <ul>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/accordions') ? 'nav-link active' : 'nav-link' } to="/basic-ui/accordions"><Trans>Accordions</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons"><Trans>Buttons</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/badges') ? 'nav-link active' : 'nav-link' } to="/basic-ui/badges"><Trans>Badges</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/breadcrumbs') ? 'nav-link active' : 'nav-link' } to="/basic-ui/breadcrumbs"><Trans>Breadcrumbs</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns"><Trans>Dropdowns</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/modals') ? 'nav-link active' : 'nav-link' } to="/basic-ui/modals"><Trans>Modals</Trans></Link></li>
                                </ul>
                              </div>
                              <div className="col-md-6">
                                <ul>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/progressbar') ? 'nav-link active' : 'nav-link' } to="/basic-ui/progressbar"><Trans>Progress bar</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/pagination') ? 'nav-link active' : 'nav-link' } to="/basic-ui/pagination"><Trans>Pagination</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/tabs') ? 'nav-link active' : 'nav-link' } to="/basic-ui/tabs"><Trans>Tabs</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography"><Trans>Typography</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/tooltips') ? 'nav-link active' : 'nav-link' } to="/basic-ui/tooltips"><Trans>Tooltips</Trans></Link></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-group col-md-4">
                      <div className="row">
                        <div className="col-12">
                          <p className="category-heading"><Trans>Advanced Elements</Trans></p>
                          <div className="submenu-item">
                            <div className="row">
                              <div className="col-md-6">
                                <ul>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/dragula') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/dragula"><Trans>Dragula</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/clipboard') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/clipboard"><Trans>Clipboard</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/context-menu') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/context-menu"><Trans>Context menu</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/sliders') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/sliders"><Trans>Sliders</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/carousel') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/carousel"><Trans>Carousel</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/loaders') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/loaders"><Trans>Loaders</Trans></Link></li>
                                </ul>
                              </div>
                              <div className="col-md-6">
                                <ul>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/popups') ? 'nav-link active' : 'nav-link' } to="/basic-ui/popups"><Trans>Popups</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/notifications') ? 'nav-link active' : 'nav-link' } to="/notifications"><Trans>Notifications</Trans></Link></li>
                                  <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/tree-view') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/tree-view"><Trans>Tree View</Trans></Link></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-group col-md-4">
                      <p className="category-heading">Icons</p>
                      <ul className="submenu-item">
                        <li className="nav-item"> <Link className={ this.isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link' } to="/icons/mdi"><Trans>Material</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/icons/flag-icons') ? 'nav-link active' : 'nav-link' } to="/icons/flag-icons"><Trans>Flag icons</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/icons/font-awesome') ? 'nav-link active' : 'nav-link' } to="/icons/font-awesome"><Trans>Font Awesome</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/icons/simple-line') ? 'nav-link active' : 'nav-link' } to="/icons/simple-line"><Trans>Simple Line Icons</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/icons/themify') ? 'nav-link active' : 'nav-link' } to="/icons/themify"><Trans>Themify</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/icons/typicons') ? 'nav-link active' : 'nav-link' } to="/icons/typicons"><Trans>Typicons</Trans></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className={ this.isPathActive('/form-elements') ? 'nav-item menu-items active' : this.isPathActive('/editors/text-editors') ? 'nav-item menu-items active' : this.isPathActive('/editors/code-editor') ? 'nav-item menu-items active' :  'nav-item menu-items' }>
                <div className="nav-link">
                  <i className="mdi mdi-clipboard-text menu-icon"></i>
                  <span className="menu-title"><Trans>Forms</Trans></span>
                  <i className="menu-arrow"></i></div>
                <div className="submenu">
                  <ul className="submenu-item">
                    <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/basic-elements') ? 'nav-link active' : 'nav-link' } to="/form-elements/basic-elements"><Trans>Basic Elements</Trans></Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/advanced-elements') ? 'nav-link active' : 'nav-link' } to="/form-elements/advanced-elements"><Trans>Advanced Elements</Trans></Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/validation') ? 'nav-link active' : 'nav-link' } to="/form-elements/validation"><Trans>Validation</Trans></Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/wizard') ? 'nav-link active' : 'nav-link' } to="/form-elements/wizard"><Trans>Wizard</Trans></Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/editors/text-editors') ? 'nav-link active' : 'nav-link' } to="/editors/text-editors"><Trans>Text Editor</Trans></Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/editors/code-editor') ? 'nav-link active' : 'nav-link' } to="/editors/code-editor"><Trans>Code Editor</Trans></Link></li>
                  </ul>
                </div>
              </li>
              <li className={ this.isPathActive('/charts') ? 'nav-item menu-items mega-menu active' : this.isPathActive('/tables') ? 'nav-item menu-items mega-menu active' : this.isPathActive('/maps') ? 'nav-item menu-items mega-menu active' : 'nav-item menu-items mega-menu' }>
                <div className="nav-link">
                  <i className="mdi mdi-chart-bar menu-icon"></i>
                  <span className="menu-title"><Trans>Data</Trans></span>
                  <i className="menu-arrow"></i></div>
                <div className="submenu">
                  <div className="col-group-wrapper row">
                    <div className="col-group col-md-6">
                      <p className="category-heading"><Trans>Charts</Trans></p>
                      <div className="submenu-item">
                        <div className="row">
                          <div className="col-md-6">
                            <ul>
                            <li className="nav-item"> <Link className={ this.isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link' } to="/charts/chart-js"><Trans>Chart Js</Trans></Link></li>
                            <li className="nav-item"> <Link className={ this.isPathActive('/charts/c3-chart') ? 'nav-link active' : 'nav-link' } to="/charts/c3-chart"><Trans>C3 Charts</Trans></Link></li>
                            <li className="nav-item"> <Link className={ this.isPathActive('/charts/chartist') ? 'nav-link active' : 'nav-link' } to="/charts/chartist"><Trans>Chartist</Trans></Link></li>
                            <li className="nav-item"> <Link className={ this.isPathActive('/charts/google-charts') ? 'nav-link active' : 'nav-link' } to="/charts/google-charts"><Trans>Google Charts</Trans></Link></li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul>
                              <li className="nav-item"> <Link className={ this.isPathActive('/charts/sparkline-charts') ? 'nav-link active' : 'nav-link' } to="/charts/sparkline-charts"><Trans>Sparkline Charts</Trans></Link></li>
                              <li className="nav-item"> <Link className={ this.isPathActive('/charts/guage-chart') ? 'nav-link active' : 'nav-link' } to="/charts/guage-chart"><Trans>Guage Chart</Trans></Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-group col-md-3">
                      <p className="category-heading"><Trans>Table</Trans></p>
                      <ul className="submenu-item">
                        <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Basic Table</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/tables/data-table') ? 'nav-link active' : 'nav-link' } to="/tables/data-table"><Trans>Data Table</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/tables/react-table') ? 'nav-link active' : 'nav-link' } to="/tables/react-table"><Trans>React Table</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/tables/sortable-table') ? 'nav-link active' : 'nav-link' } to="/tables/sortable-table"><Trans>Sortable Table</Trans></Link></li>
                      </ul>
                    </div>
                    <div className="col-group col-md-3">
                      <p className="category-heading"><Trans>Maps</Trans></p>
                      <ul className="submenu-item">
                        <li className="nav-item"> <Link className={ this.isPathActive('/maps/vector-map') ? 'nav-link active' : 'nav-link' } to="/maps/vector-map"><Trans>Vector Maps</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/maps/simple-map') ? 'nav-link active' : 'nav-link' } to="/maps/simple-map"><Trans>Simple Maps</Trans></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className={ this.isPathActive('/user-pages') ? 'nav-item menu-items  mega-menu active' : this.isPathActive('/error-pages') ? 'nav-item menu-items mega-menu active' : this.isPathActive('/ecommerce') ? 'nav-item menu-items mega-menu active' : this.isPathActive('/general-pages') ? 'nav-item menu-items mega-menu active' : 'nav-item menu-items mega-menu' }>
                <div className="nav-link">
                  <i className="mdi mdi-content-copy menu-icon"></i>
                  <span className="menu-title"><Trans>Sample Pages</Trans></span>
                  <i className="menu-arrow"></i></div>
                <div className="submenu">
                  <div className="col-group-wrapper row">
                    <div className="col-group col-md-2">
                      <p className="category-heading"><Trans>User Pages</Trans></p>
                      <ul className="submenu-item">
                        <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1"><Trans>Login</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-2') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-2"><Trans>Login 2</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1"><Trans>Register</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-2') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-2"><Trans>Register 2</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/lockscreen') ? 'nav-link active' : 'nav-link' } to="/user-pages/lockscreen"><Trans>Lockscreen</Trans></Link></li>
                      </ul>
                    </div>
                    <div className="col-group col-md-2">
                      <p className="category-heading">Error Pages</p>
                      <ul className="submenu-item">
                        <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-404">404</Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-500">500</Link></li>
                      </ul>
                    </div>
                    <div className="col-group col-md-3">
                      <p className="category-heading">E-commerce</p>
                      <ul className="submenu-item">
                        <li className="nav-item"> <Link className={ this.isPathActive('/ecommerce/invoice') ? 'nav-link active' : 'nav-link' } to="/ecommerce/invoice"><Trans>Invoice</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/ecommerce/pricing') ? 'nav-link active' : 'nav-link' } to="/ecommerce/pricing"><Trans>Pricing</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/ecommerce/product-catalogue') ? 'nav-link active' : 'nav-link' } to="/ecommerce/product-catalogue"><Trans>Product Catalogue</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/ecommerce/project-list') ? 'nav-link active' : 'nav-link' } to="/ecommerce/project-list"><Trans>Project List</Trans></Link></li>
                        <li className="nav-item"> <Link className={ this.isPathActive('/ecommerce/orders') ? 'nav-link active' : 'nav-link' } to="/ecommerce/orders"><Trans>Orders</Trans></Link></li>
                      </ul>
                    </div>
                    <div className="col-group col-md-5">
                      <p className="category-heading">General</p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="submenu-item">
                            <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/general-pages/blank-page"><Trans>Blank Page</Trans></Link></li>
                            <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/profile') ? 'nav-link active' : 'nav-link' } to="/general-pages/profile"><Trans>Profile</Trans></Link></li>
                            <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/faq-1') ? 'nav-link active' : 'nav-link' } to="/general-pages/faq-1"><Trans>FAQ</Trans></Link></li>
                            <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/faq-2') ? 'nav-link active' : 'nav-link' } to="/general-pages/faq-2"><Trans>FAQ 2</Trans></Link></li>
                            <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/news-grid') ? 'nav-link active' : 'nav-link' } to="/general-pages/news-grid"><Trans>News Grid</Trans></Link></li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/timeline') ? 'nav-link active' : 'nav-link' } to="/general-pages/timeline"><Trans>Timeline</Trans></Link></li>
                            <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/search-results') ? 'nav-link active' : 'nav-link' } to="/general-pages/search-results"><Trans>Search Results</Trans></Link></li>
                            <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/portfolio') ? 'nav-link active' : 'nav-link' } to="/general-pages/portfolio"><Trans>Portfolio</Trans></Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={ this.isPathActive('/apps') ? 'nav-item  menu-items active' : 'nav-item menu-items' }>
                <div className="nav-link">
                  <i className="mdi mdi-webpack menu-icon"></i>
                  <span className="menu-title"><Trans>Apps</Trans></span>
                  <i className="menu-arrow"></i></div>
                <div className="submenu">
                  <ul className="submenu-item">
                    <li className="nav-item"> <Link className={ this.isPathActive('/apps/kanban-board') ? 'nav-link active' : 'nav-link' } to="/apps/kanban-board"><Trans>Kanban Board</Trans></Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/apps/todo-list') ? 'nav-link active' : 'nav-link' } to="/apps/todo-list"><Trans>Todo List</Trans></Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/apps/chats') ? 'nav-link active' : 'nav-link' } to="/apps/chats"><Trans>Chats</Trans></Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/apps/email') ? 'nav-link active' : 'nav-link' } to="/apps/email"><Trans>E-mail</Trans></Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/apps/calendar') ? 'nav-link active' : 'nav-link' } to="/apps/calendar"><Trans>Calendar</Trans></Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/apps/gallery') ? 'nav-link active' : 'nav-link' } to="/apps/gallery"><Trans>Gallery</Trans></Link></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item menu-items">
                <a className="nav-link" href="http://bootstrapdash.com/demo/corona/react/documentation/documentation.html" rel="noopener noreferrer" target="_blank">
                  <i className="mdi mdi-file-document-box menu-icon"></i>
                  <span className="menu-title"><Trans>Docs</Trans></span></a>
              </li>     
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  toggleBottomMenu() {
    document.querySelector('.bottom-navbar').classList.toggle('header-toggled');
  }

  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }

  componentDidMount() {
    // Horizontal menu fixed when scrolling
    let navbar = document.querySelector('.horizontal-menu');
    let body = document.querySelector('body');
    if ( navbar ) {
      window.addEventListener('scroll', function() { 
        if (window.scrollY >= 70) { 
          navbar.classList.add('fixed-on-scroll');
          body.classList.add('horizontal-menu-fixed-on-scroll');
         }
        else { 
          navbar.classList.remove('fixed-on-scroll');
          body.classList.remove('horizontal-menu-fixed-on-scroll');
         }
      });
    }

    // Horizontal menu navigation in mobile menu on click
    let navItemClicked = document.querySelectorAll('.horizontal-menu .page-navigation >.nav-item');
    navItemClicked.forEach(function (el) {
      el.addEventListener('click', function () {
        var result = [],
          node = this.parentNode.firstChild;
        while (node) {
          if (node !== this)
            result.push(node);
          node = node.nextElementSibling || node.nextSibling;
        }
        result.forEach( (el) => el.classList.remove('show-submenu') )
        this.classList.toggle('show-submenu');
      });
    })
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

}

function Header(props) {
  let loc = useLocation();
  const propsWithLocation = _.extend({}, props, {location: loc});
  return <InnerHeader {...propsWithLocation} />
}

export default Header;
