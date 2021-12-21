import React, { useReducer, useState, useEffect } from 'react';
import './App.scss';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Model } from './model';

import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

import ContractManager from './ContractManager';
import {DataTable} from './tables/DataTables';
import _ from 'lodash';

export const Contract = Model.register('contract', class Contract extends Model {
  static properties = {
    name: String,
    address: String,
    stringifiedAbi: String,
  }

  static defaultProperties = {
    stringifiedAbi: '[]',
  }
});

export const WorldState = Model.register('world-state', class WorldState extends Model {
  static properties = {
    contracts: [Contract],
    defaultAddr: String,
  }

  addContract(newContract) {
    if (_.find(this.contracts, ['address', newContract.address])) {
      throw new Error("Address already present")
    }

    this.contracts.push(newContract);
  }
});

function App(props) {
  const [worldState, setWorldState__onlyUseOnce] = useState(null);
  const [worldStateLoaded, setWorldStateLoaded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [__, forceUpdate] = useReducer(x => x + 1, 0);

  const handleSave = () => {
    localStorage.setItem('__serializedWorldState', JSON.stringify(worldState.serialize()));
    forceUpdate();
  }

  /*
  const worldStateChange = (obj, attr) => (e) => {
    obj[attr] = e.target.value;
    handleSave();
  };
  */

  // Load the world state upon page load
  useEffect(() => {
    const serializedState = JSON.parse(localStorage.getItem('__serializedWorldState') || null);
    setWorldState__onlyUseOnce(WorldState.deserialize(serializedState));
    setWorldStateLoaded(true);
  }, [worldStateLoaded]);

  if (!worldStateLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <Suspense fallback={<Spinner/>}>
              <Routes>
                <Route path="/" element={<DataTable />} />
                <Route path="/contracts" element={<ContractManager worldState={worldState} handleSave={handleSave} />} />
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
