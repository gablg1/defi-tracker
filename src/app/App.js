import React, { useReducer, useState, useEffect, Component } from 'react';
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
  const [worldState, setWorldState__onlyUseOnce] = useState(null);
  const [worldStateLoaded, setWorldStateLoaded] = useState(false);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const handleSave = () => {
    localStorage.setItem('__serializedWorldState', JSON.stringify(worldState.serialize()));
    forceUpdate();
  }

  const worldStateChange = (obj, attr) => (e) => {
    obj[attr] = e.target.value;
    handleSave();
  };

  // Load the world state upon page load
  useEffect(() => {
    const serializedState = JSON.parse(localStorage.getItem('__serializedWorldState') || '{}');
    setWorldState__onlyUseOnce(new WorldState(serializedState));
    setWorldStateLoaded(true);
  }, [worldStateLoaded]);

  if (!worldStateLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="container-scroller">
      <input type="text" className="form-control" placeholder="Testing..." value={worldState.defaultAddr}
        onChange={worldStateChange(worldState, 'defaultAddr')} />
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
