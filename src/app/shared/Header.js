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
            <ul className="nav page-navigation" style={{justifyContent: 'left'}}>
              <li className={ this.isPathActive('/transactions') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                <Link className="nav-link" to="/transactions">
                  <i className="mdi mdi-speedometer menu-icon"></i>
                  <span className="menu-title"><Trans>Transactions</Trans></span>
                </Link>
              </li>
              <li className={ this.isPathActive('/contracts') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                <Link className="nav-link" to="/contracts">
                  <i className="mdi mdi-file-restore menu-icon"></i>
                  <span className="menu-title">Contracts</span>
                </Link>
              </li>
              <li className={ this.isPathActive('/state-editor') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                <Link className="nav-link" to="/state-editor">
                  <i className="mdi mdi mdi-texture menu-icon"></i>
                  <span className="menu-title"><Trans>Debug</Trans></span>
                </Link>
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
