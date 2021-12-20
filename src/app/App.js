import React, { useState, useEffect, Component } from 'react';
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

const Contract = Model.register('contract', class Contract extends Model {
  static properties = {
    stringifiedAbi: String,
  }

  static defaultProperties = {
    stringifiedAbi: '[]',
  }
});

const WorldState = Model.register('world-state', class WorldState extends Model {
  static properties = {
    contracts: [Contract],
    defaultAddr: String,
  }
});

function App(props) {
  const [worldState, setWorldState] = useState(null);
  const [worldStateLoaded, setWorldStateLoaded] = useState(false);

  useEffect(() => {
    const serializedState = JSON.parse(localStorage.getItem('__serializedWorldState') || '{}');
    setWorldState(new WorldState(serializedState));
    setWorldStateLoaded(true);
  }, [worldStateLoaded]);

  useEffect(() => {
    if (worldStateLoaded && worldState != null) {
      localStorage.setItem('__serializedWorldState', JSON.stringify(worldState.serialize()));
    }
  }, [worldState]);

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
