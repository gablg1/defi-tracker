import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { withTranslation } from "react-i18next";
import { Model, serialize } from './model';
import { testAll } from './test';

const ABI = Model.register('abi', class ABI extends Model {
  static properties = {
    stringifiedJson: String,
  }
  constructor(json = {}) {
    super(json);
    this.stringifiedJson = this.stringifiedJson || '[]';
  }
});

function App(props) {
  return (
    <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
