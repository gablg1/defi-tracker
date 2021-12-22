import React, { useReducer, useState, useEffect } from 'react';
import './App.scss';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Model } from './model';

import { Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

import { isBech32Address } from '@harmony-js/utils';
import { isValidEthereumAddress } from './utils';

import { normalizeAddress } from './utils';

import {ContractManager, StateEditor} from './Pages';
import {SingleTransactionViewer, TransactionsViewer} from './TransactionsViewer';
import _ from 'lodash';
import abiDecoder from 'abi-decoder';
const _knownAbis = {}

export const Contract = Model.register('contract', class Contract extends Model {
  static properties = {
    name: String,
    address: String,
    stringifiedAbi: String,
    blockchain: String,
  }

  static defaultProperties = {
    stringifiedAbi: '[]',
    blockchain: 'Harmony',
  }

  static validBlockchains = ['Harmony']

  anyError() {
    if (_.isEmpty(this.name)) {
      return new Error("Name cannot be empty");
    }

    if (!isBech32Address(this.address) && !isValidEthereumAddress(this.address)) {
      return new Error(`Address ${this.address} is not valid`);
    }

    if (!this.constructor.validBlockchains.includes(this.blockchain)) {
      return new Error(`Blockchain ${this.blockchain} is invalid`);
    }

    try {
      JSON.parse(this.stringifiedAbi);
    } catch(e) {
      return new Error("ABI is not a parseable JSON");
    }

    return undefined;
  }
});

export const WorldState = Model.register('world-state', class WorldState extends Model {
  static properties = {
    contracts: [Contract],
    defaultAddr: String,
  }

  constructor(json) {
    super(json);

    this.addAllContractAbis();
  }

  decodeReceiptLogs(logs) {
    try {
      return abiDecoder.decodeLogs(logs);
    } catch(err) {
      console.warn("Error decoding logs");
      console.warn(err);
      return undefined;
    }
  }

  decodeContractCall(encodedString) {
    return abiDecoder.decodeMethod(encodedString);
  }

  addAllContractAbis() {
    for (const contract of this.contracts) {
      if (!_knownAbis[contract.address]) {
        abiDecoder.addABI(JSON.parse(contract.stringifiedAbi));
        _knownAbis[contract.address] = true;
      }
    }
  }

  addContract(newContract) {
    this.throwIfErrorFromChange(clone => {
      clone.contracts.push(newContract);
      return clone;
    });

    this.contracts.push(newContract);
    this.addAllContractAbis();
  }

  removeContract(contract) {
    const index = this.contracts.indexOf(contract);
    if (index === -1) {
      return;
    }
    this.contracts.splice(index, 1)
  }

  anyError() {
    if (_.uniqBy(this.contracts, 'address').length !== this.contracts.length) {
      throw new Error("Duplicate contract addresses found")
    }

    // Return any errors in the contracts
    return _.find(_.map(this.contracts, c => c.anyError()), e => e !== undefined);
  }

  findContract(addr) {
    return _.find(this.contracts, c => normalizeAddress(c.address) === normalizeAddress(addr));
  }
});

function App(props) {
  const [worldState, setWorldState] = useState(null);
  const [worldStateLoaded, setWorldStateLoaded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [__, forceUpdate] = useReducer(x => x + 1, 0);

  const handleSave = (ws = worldState) => {
    const error = ws.anyError();
    if (error) {
      throw error;
    }

    localStorage.setItem('__serializedWorldState', JSON.stringify(ws.serialize()));
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
    setWorldState(WorldState.deserialize(serializedState));
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
                <Route path="/transactions" element={<TransactionsViewer worldState={worldState} />} />
                <Route path="/contracts" element={<ContractManager worldState={worldState} handleSave={handleSave} />} />
                <Route path="/state-editor" element={<StateEditor worldState={worldState} setWorldState={setWorldState} handleSave={handleSave} />} />
                <Route path="/tx/:txHash" element={<SingleTransactionViewer worldState={worldState} />} />
                <Route path="/" element={<Navigate replace to="/transactions" />} />
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
