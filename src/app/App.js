import React, { Component } from 'react';
import './App.scss';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Model, serialize } from './model';
import { testAll } from './test';

import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

import {CodeEditor} from './editors/CodeEditor';
import {DataTable} from './tables/DataTables';

const ABI = Model.register('abi', class ABI extends Model {
  static properties = {
    stringifiedJson: String,
  }

  static defaultProperties = {
    stringifiedJson: '[]',
  }
});

const UserState = Model.register('user-state', class UserState extends Model {
  static properties = {
    contractAbis: [ABI],
    defaultAddr: String,
  }
});

function App(props) {
  const state = new UserState();
  console.log(state);
  return (
    <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <Suspense fallback={<Spinner/>}>
              <Routes>
                <Route path="/" element={<DataTable />} />
                <Route path="/code-editor" element={<CodeEditor />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
