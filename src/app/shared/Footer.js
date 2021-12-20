import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class Footer extends Component {
  render () {
    return (
      <footer className="footer container">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block"><Trans>Copyright</Trans> © 2020 <a href="https://www.bootstrapdash.com/" target="_blank" rel="noopener noreferrer">BootstrapDash</a>. <Trans>All rights reserved</Trans>.</span>
          <span className="text-muted float-none float-sm-right d-block mt-1 mt-sm-0 text-center"><Trans>Hand-crafted</Trans> & <Trans>made with</Trans> <i className="mdi mdi-heart text-danger"></i></span>
        </div>
      </footer>
    );
  }
}

export default Footer;