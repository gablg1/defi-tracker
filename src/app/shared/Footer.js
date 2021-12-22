import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class Footer extends Component {
  render () {
    return (
      <footer className="footer container">
        <div className="d-sm-flex justify-content-end">
          <span className="text-muted float-none float-sm-right d-block mt-1 mt-sm-0 text-center"><Trans>Hand-crafted</Trans> & <Trans>made with</Trans> <i style={{padding: 0}} className="mdi mdi-heart text-danger"></i> by stringer</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
