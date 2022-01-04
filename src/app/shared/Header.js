import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { LinkWithAddr } from '../utils';
import { Trans } from 'react-i18next';
import { useLocation } from "react-router-dom";
import _ from 'lodash';


class InnerHeader extends Component {
  render () {
    const addr = this.props.worldState.defaultAddr || '';
    return (
      <div className="horizontal-menu">
        {!_.isEmpty(addr) &&
        <nav className="navbar top-navbar default-layout-navbar col-lg-12 col-12 p-0 d-flex flex-row">
          <div className="container">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <LinkWithAddr addr={addr} className="navbar-brand brand-logo" to="/" style={{color: 'white', width: 200}}>
                DFK Balances
                <img src={require('../../assets/images/dfk-jewel.png')} alt="dfk" style={{marginLeft: 10}} />
              </LinkWithAddr>
            </div>
              <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-end">
                <ul className="navbar-nav w-100">
                  <li className="nav-item w-100">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Address</span>
                      </div>
                      <Form.Control value={addr} onChange={evt => {
                        this.props.setAddr(evt.target.value);
                        this.props.forceUpdate();
                      }}
                        type="text" className="form-control" placeholder="0x123..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        }
        {_.isEmpty(addr) &&
        <div style={{background: 'black', height: 70, display: 'flex', padding: 20, justifyContent: 'center'}}>
            <div>
              <LinkWithAddr addr={addr}  to="/" style={{fontSize: '1.5rem', color: 'white', width: 200}}>
                DFK Balances
                <img src={require('../../assets/images/dfk-jewel.png')} alt="dfk" style={{marginLeft: 10, height: 30}} />
              </LinkWithAddr>
            </div>
        </div>
        }
        {!_.isEmpty(addr) &&
          <nav className="bottom-navbar">
            <div className="container">
              <ul className="nav page-navigation" style={{justifyContent: 'left'}}>
                <li className={ this.isPathActive('/transactions') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                  <LinkWithAddr addr={addr} className="nav-link" to="/transactions">
                    <i className="mdi mdi-speedometer menu-icon"></i>
                    <span className="menu-title"><Trans>Transactions</Trans></span>
                  </LinkWithAddr>
                </li>
                <li className={ this.isPathActive('/contracts') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                  <LinkWithAddr addr={addr} className="nav-link" to="/contracts">
                    <i className="mdi mdi-file-restore menu-icon"></i>
                    <span className="menu-title">Contracts</span>
                  </LinkWithAddr>
                </li>
                <li className={ this.isPathActive('/rules') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                  <LinkWithAddr addr={addr} className="nav-link" to="/rules">
                    <i className="mdi mdi mdi-texture menu-icon"></i>
                    <span className="menu-title"><Trans>Rules</Trans></span>
                  </LinkWithAddr>
                </li>
                <li className={ this.isPathActive('/price-fetchers') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                  <LinkWithAddr addr={addr} className="nav-link" to="/price-fetchers">
                    <i className="mdi mdi mdi-texture menu-icon"></i>
                    <span className="menu-title"><Trans>Price Fetchers</Trans></span>
                  </LinkWithAddr>
                </li>
                <li className={ this.isPathActive('/state-editor') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                  <LinkWithAddr addr={addr} className="nav-link" to="/state-editor">
                    <i className="mdi mdi mdi-texture menu-icon"></i>
                    <span className="menu-title"><Trans>App State</Trans></span>
                  </LinkWithAddr>
                </li>
              </ul>
            </div>
          </nav>
        }
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
