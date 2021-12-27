import React, { useReducer, useState, useEffect } from 'react';
import './App.scss';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Model } from './model';

import { Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

import { isBech32Address } from '@harmony-js/utils';
import { isValidEthereumAddress, assert } from './utils';

import {Balances} from './accounting';
import { addressesEqual, normalizeAddress } from './utils';

import {EventRuleManager, ContractManager, StateEditor} from './Pages';
import {SingleTransactionViewer, TransactionsViewer} from './TransactionsViewer';
import _ from 'lodash';
import abiDecoder from 'abi-decoder';

/* global BigInt */

const _knownAbis = {}

const sign = (me, from, to) => {
  const fromMe = addressesEqual(me, from);
  const toMe = addressesEqual(me, to);
  assert(() => fromMe || toMe);
  if (fromMe) {
    return BigInt(-1);
  } else if (toMe) {
    return BigInt(+1);
  } else {
    return BigInt(0);
  }

};

export const Asset = Model.register('asset', class Asset extends Model {
  static properties = {
    tokenName: String,
    contractAddress: String,
  }
});

export const Rule = Model.register('rule', class Rule extends Model {
  static properties = {
    name: String,
    effectCode: String,
    filterCode: String,
  }

  shouldApply(evt, tx, worldState) {
    const isMyAddr = addr => addressesEqual(worldState.defaultAddr, addr);
    let ret;
    try {
      ret = new Function('evt, tx, isMyAddr', this.filterCode)(evt, tx, isMyAddr);
    } catch(err) {
      return err;
    }

    if (ret !== false && ret !== true) {
      return new Error(`Filter function must return either true or false. Returned: ${ret}`);
    }
    return ret;
  }

  apply(evt, tx, worldState) {
    const isMyAddr = addr => addressesEqual(worldState.defaultAddr, addr);
    let effect = {};
    try {
      effect = new Function('evt, tx, isMyAddr', this.effectCode)(evt, tx, isMyAddr);
    } catch(err) {
      return err;
    }

    if (!(effect instanceof Object) || _.some(_.values(effect), v => isNaN(v))) {
      return new Error(`Effect must return an object of integers representing token deltas. Returned: ${effect}`);
    }
    return new Balances(effect);
  }
});

export const Contract = Model.register('contract', class Contract extends Model {
  static properties = {
    name: String,
    address: String,
    stringifiedAbi: String,
    blockchain: String,
    metadata: JSON,
    type: String,
    tokenName: String,
  }

  static defaultProperties = {
    stringifiedAbi: '[]',
    blockchain: 'Harmony',
    type: 'Other',
  }

  static validBlockchains = ['Harmony'];
  static validTypes = ['ERC20', 'ERC721', 'Other'];

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

    if (!this.constructor.validTypes.includes(this.type)) {
      return new Error(`Type ${this.type} is invalid`);
    }

    if (this.typeRequiresTokenName() && _.isEmpty(this.tokenName)) {
      return new Error(`Contract of type ${this.type} must have a tokenName`);
    }

    try {
      JSON.parse(this.stringifiedAbi);
    } catch(e) {
      return new Error("ABI is not a parseable JSON");
    }

    return undefined;
  }

  typeRequiresTokenName() {
    return ['ERC20', 'ERC721'].includes(this.type);
  }
});

export const WorldState = Model.register('world-state', class WorldState extends Model {
  static properties = {
    contracts: [Contract],
    rules: [Rule],
    defaultAddr: String,
    shouldCacheTransactions: Boolean,
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

  replaceContract(index, newContract) {
    this.throwIfErrorFromChange(clone => {
      clone.rules.splice(index, 1, newContract);
      return clone;
    });

    this.contracts.splice(index, 1, newContract);
    this.addAllContractAbis();
  }

  removeContract(contract) {
    const index = this.contracts.indexOf(contract);
    if (index === -1) {
      return;
    }
    this.contracts.splice(index, 1)
  }

  addRule(newRule) {
    this.throwIfErrorFromChange(clone => {
      clone.rules.push(newRule);
      return clone;
    });

    this.rules.push(newRule);
  }

  removeRule(rule) {
    const index = this.rules.indexOf(rule);
    if (index === -1) {
      return;
    }
    this.rules.splice(index, 1)
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

  rulesThatApply(evt, tx) {
    return _.filter(this.rules, r => r.shouldApply(evt, tx, this));
  }

  effectOfTransaction(btx) {
    const oneValue = BigInt(btx.value || 0) * sign(this.defaultAddr, btx.from, btx.to) - btx.gasFeePaid;

    let effect = new Balances({ONE: oneValue});

    for (const evt of (btx.events || [])) {
      for (const rule of this.rulesThatApply(evt, btx)) {
        effect = effect.plus(rule.apply(evt, btx, this));
      }
    }

    return effect;
  }

  loadCaches() {
    this.cachedTxsByAddress = parseJsonWithBigInts(localStorage.getItem('__cachedTxsByAddress') || '{}');
    this.cachedReceiptsByHash = parseJsonWithBigInts(localStorage.getItem('__cachedReceiptsByHash') || '{}');
  }

  flushCaches() {
    localStorage.setItem('__cachedTxsByAddress', stringifyJsonWithBigInts(this.cachedTxsByAddress));
    localStorage.setItem('__cachedReceiptsByHash', stringifyJsonWithBigInts(this.cachedReceiptsByHash));
  }

  blowUpCaches() {
    this.cachedTxsByAddress = {};
    this.cachedReceiptsByHash = {};
    this.flushCaches();
  }
});

const parseJsonWithBigInts = (data) => {
  return JSON.parse(data, (key, value) =>
    value.__tyForJsonParser__ === 'bigint' ? BigInt(value.value) : value
  );
};

const stringifyJsonWithBigInts = (json) => {
  return JSON.stringify(json, (key, value) =>
    typeof value === "bigint" ? {__tyForJsonParser__: 'bigint', value: value} : value
  );
};


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
    const worldState = WorldState.deserialize(serializedState);
    worldState.loadCaches();


    setWorldState(worldState);
    setWorldStateLoaded(true);
  }, [worldStateLoaded]);

  if (!worldStateLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="container-scroller">
      <Header worldState={worldState} handleSave={handleSave} />
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <Suspense fallback={<Spinner/>}>
              <Routes>
                <Route path="/transactions" element={<TransactionsViewer worldState={worldState} />} />
                <Route path="/contracts" element={<ContractManager worldState={worldState} handleSave={handleSave} />} />
                <Route path="/rules" element={<EventRuleManager worldState={worldState} handleSave={handleSave} />} />
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
