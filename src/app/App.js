import React, { useReducer, useState, useEffect, Suspense } from 'react';
import './App.scss';
import { Form } from 'react-bootstrap';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Model } from './model';
import abiCoder from 'web3-eth-abi';
import { sha3, BN } from "web3-utils";
import { Harmony } from "@harmony-js/core";
import { ChainType } from "@harmony-js/utils";

import { useNavigate, useSearchParams, Navigate, Routes, Route } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

import {Balances} from './accounting';
import {isAddress, parseJsonWithBigInts, stringifyJsonWithBigInts, addressesEqual, normalizeAddress } from './utils';

import {PriceFetcherManager, EventRuleManager, ContractManager, StateEditor} from './Pages';
import {SingleTransactionViewer, TransactionsViewer} from './TransactionsViewer';
import _ from 'lodash';

/* global BigInt */
const _knownAbis = {}

const sign = (me, from, to) => {
  const fromMe = addressesEqual(me, from);
  const toMe = addressesEqual(me, to);
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
      // eslint-disable-next-line no-new-func
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
      // eslint-disable-next-line no-new-func
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
    priceFetcher: String,
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

    if (!isAddress(this.address)) {
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
    return this.isAsset();
  }

  isAsset() {
    return ['ERC20', 'ERC721'].includes(this.type);
  }

  connect() {
    const rpc = 'https://api.s0.t.hmny.io/';
    const hmy = new Harmony(rpc, {
      chainType: ChainType.Harmony,
      chainId: 1666600000,
    });

    return hmy.contracts.createContract(
      JSON.parse(this.stringifiedAbi),
      this.address
    );
  }
});

export const WorldState = Model.register('world-state', class WorldState extends Model {
  static properties = {
    contracts: [Contract],
    rules: [Rule],
    shouldCacheTransactions: Boolean,
  }

  constructor(json) {
    super(json);

    this.addAllContractAbis();
  }

  decodeReceiptLogs(logs) {
    try {
      return logs.map(log => {
        const contract = this.findContract(log.address);
        return contract ? decodeLog(log, JSON.parse(contract.stringifiedAbi)) : log;
      }).filter(log => log.decoded);
    } catch(err) {
      console.warn("Error decoding logs");
      console.warn(err);
      return undefined;
    }
  }

  decodeContractCall(encodedString, contractAddr) {
    const contract = this.findContract(contractAddr);
    return contract ? decodeMethod(encodedString, JSON.parse(contract.stringifiedAbi)) : encodedString;
  }

  addAllContractAbis() {
    for (const contract of this.contracts) {
      if (!_knownAbis[contract.address]) {
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

    let totalEffect = new Balances({ONE: oneValue});
    for (const evt of (btx.events || [])) {
      const effectOfEvent = this.effectOfEvent(evt);
      if (effectOfEvent instanceof Error) {
        return effectOfEvent;
      }
      totalEffect = totalEffect.plus(effectOfEvent);
    }
    return totalEffect;
  }

  effectOfEvent(evt) {
    let totalEffect = new Balances({});

    for (const rule of this.rulesThatApply(evt, evt.tx)) {
      const ruleEffect = rule.apply(evt, evt.tx, this);
      if (ruleEffect instanceof Error) {
        return ruleEffect;
      }
      totalEffect = totalEffect.plus(ruleEffect);
    }
    return totalEffect
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


function App(props) {
  const navigate = useNavigate();
  const [initialAddr, setInitialAddr] = useState('');
  const [worldState, setWorldState] = useState(null);
  const [worldStateLoaded, setWorldStateLoaded] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const addr = searchParams.get("addr");
  if (worldState) {
    worldState.defaultAddr = addr;
  }
  const setAddr = (newAddr) => setSearchParams({addr: newAddr});

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
      <Header setAddr={setAddr} worldState={worldState} forceUpdate={forceUpdate} handleSave={handleSave} />
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <Suspense fallback={<Spinner/>}>
            {(_.isEmpty(addr)) ?
              <div className="row" style={{justifyContent: 'center'}}>
                <div className="col-6 grid-margin">
                  <div className="card">
                    <div className="card-body">

                <h4 className="card-title">DFK History Report Generator</h4>
                <h6 className="text-muted font-weight-normal"> Please enter the address you're interested in</h6>
                <Form.Group>
                  <div className="input-group">
                  <Form.Control type="text" className="form-control" placeholder="0x1234... or one1234..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={initialAddr} onChange={evt => setInitialAddr(evt.target.value)} />
                    <div className="input-group-append">
                      <button className="btn btn-sm btn-primary" type="button" onClick={() => {
                        if (!isAddress(initialAddr)) {
                          window.alert("Invalid address. Please enter an address of type 0x1234.... or one1234...");
                          return;
                        }
                        navigate(`/?addr=${initialAddr}`);
                      }}>Search</button>
                    </div>
                  </div>
                </Form.Group>

                    </div>
                  </div>
                </div>
              </div>
              :
              <Routes>
                <Route path="/transactions" element={<TransactionsViewer worldState={worldState} />} />
                <Route path="/contracts" element={<ContractManager worldState={worldState} handleSave={handleSave} />} />
                <Route path="/rules" element={<EventRuleManager worldState={worldState} handleSave={handleSave} />} />
                <Route path="/price-fetchers" element={<PriceFetcherManager worldState={worldState} handleSave={handleSave} />} />
                <Route path="/state-editor" element={<StateEditor worldState={worldState} setWorldState={setWorldState} handleSave={handleSave} />} />
                <Route path="/tx/:txHash" element={<SingleTransactionViewer worldState={worldState} />} />
                <Route path="/" element={<Navigate replace to={`/transactions?addr=${worldState.defaultAddr}`} />} />
              </Routes>
            }
            </Suspense>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

function decodeLog(logItem, abiArray) {
  return _decodeLog(logItem, makeAbiState(abiArray));
}

function _decodeLog(logItem, state) {
  const methodID = logItem.topics[0].slice(2);
  const method = state.methodIDs[methodID];
  if (!method) {
    return logItem;
  }

  const logData = logItem.data;
  let decodedParams = [];
  let dataIndex = 0;
  let topicsIndex = 1;

  let dataTypes = [];
  // eslint-disable-next-line array-callback-return
  method.inputs.map(function(input) {
    if (!input.indexed) {
      dataTypes.push(input.type);
    }
  });

  const decodedData = abiCoder.decodeParameters(
    dataTypes,
    logData.slice(2)
  );

  // Loop topic and data to get the params
  // eslint-disable-next-line array-callback-return
  method.inputs.map(function(param) {
    let decodedP = {
      name: param.name,
      type: param.type,
    };

    if (param.indexed) {
      decodedP.value = logItem.topics[topicsIndex];
      topicsIndex++;
    } else {
      decodedP.value = decodedData[dataIndex];
      dataIndex++;
    }

    if (param.type === "address") {
      decodedP.value = decodedP.value.toLowerCase();
      // 42 because len(0x) + 40
      if (decodedP.value.length > 42) {
        let toRemove = decodedP.value.length - 42;
        let temp = decodedP.value.split("");
        temp.splice(2, toRemove);
        decodedP.value = temp.join("");
      }
    }

    if (
      param.type === "uint256" ||
      param.type === "uint8" ||
      param.type === "int"
    ) {
      // ensure to remove leading 0x for hex numbers
      if (typeof decodedP.value === "string" && decodedP.value.startsWith("0x")) {
        decodedP.value = new BN(decodedP.value.slice(2), 16).toString(10);
      } else {
        decodedP.value = new BN(decodedP.value).toString(10);
      }

    }

    decodedParams.push(decodedP);
  });

  return {
    decoded: true,
    name: method.name,
    events: decodedParams,
    address: logItem.address,
  };
}

function _typeToString(input) {
  if (input.type === "tuple") {
    return "(" + input.components.map(_typeToString).join(",") + ")";
  }
  return input.type;
}

const makeAbiState = (abiArray) => {
  let state = {methodIDs: {}};

  if (Array.isArray(abiArray)) {
    // Iterate new abi to generate method id"s
    // eslint-disable-next-line array-callback-return
    abiArray.map(function(abi) {
      if (abi.name) {
        const signature = sha3(
          abi.name +
            "(" +
            abi.inputs
              .map(_typeToString)
              .join(",") +
            ")"
        );
        if (abi.type === "event") {
          state.methodIDs[signature.slice(2)] = abi;
        } else {
          state.methodIDs[signature.slice(2, 10)] = abi;
        }
      }
    });

    state.savedABIs = abiArray;
  } else {
    throw new Error("Expected ABI array, got " + typeof abiArray);
  }
  return state;
}

function decodeMethod(data, abiArray) {
  return _decodeMethod(data, makeAbiState(abiArray));
}

function _decodeMethod(data, state) {
  const methodID = data.slice(2, 10);
  const abiItem = state.methodIDs[methodID];
  if (abiItem) {
    let decoded = abiCoder.decodeParameters(abiItem.inputs, data.slice(10));

    let retData = {
      name: abiItem.name,
      params: [],
    };

    for (let i = 0; i < decoded.__length__; i++) {
      let param = decoded[i];
      let parsedParam = param;
      const isUint = abiItem.inputs[i].type.indexOf("uint") === 0;
      const isInt = abiItem.inputs[i].type.indexOf("int") === 0;
      const isAddress = abiItem.inputs[i].type.indexOf("address") === 0;

      if (isUint || isInt) {
        const isArray = Array.isArray(param);

        if (isArray) {
          parsedParam = param.map(val => new BN(val).toString());
        } else {
          parsedParam = new BN(param).toString();
        }
      }

      // Addresses returned by web3 are randomly cased so we need to standardize and lowercase all
      if (isAddress) {
        const isArray = Array.isArray(param);

        if (isArray) {
          parsedParam = param.map(_ => _.toLowerCase());
        } else {
          parsedParam = param.toLowerCase();
        }
      }

      retData.params.push({
        name: abiItem.inputs[i].name,
        value: parsedParam,
        type: abiItem.inputs[i].type,
      });
    }

    return retData;
  }
}
