import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import _ from 'lodash';
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import defaultWorldStateJson from './default-world-state.json';

import {formatFiatValue, LinkWithAddr, InfoTooltip, addSign, formatTokenValue, Copiable, formatAddress, truncateLongAddressCopiable, truncateLongString } from './utils';

// import brace from "brace";

import AceEditor from "react-ace";

// Import a Mode (language)
import "brace/mode/json";
import 'brace/mode/javascript';

// Import a Theme (okadia, github, xcode etc)
import "brace/theme/github";
import "brace/theme/monokai";

import {Rule, Contract, WorldState} from './App';
import {useTransactionsForAddress } from './TransactionsViewer';

/* global BigInt */

const filterColor = '#474747';

export function ContractManager(props) {
  const [contractIndexBeingEdited, setContractIndexBeingEdited] = useState(-1);
  const resetContractState = () => {
    setContractIndexBeingEdited(-1);
    setEditableContract(new Contract());
    setEditableMetadata('');
  };

  const [editableContract, setEditableContract] = useState(new Contract());
  const [editableMetadata, setEditableMetadata] = useState('');
  const setEditableContractFields = (fieldObj) => {
    return setEditableContract(_.extend(editableContract.clone(), fieldObj));
  };

  const addNewContract = (e) => {
    e.preventDefault();

    try {
      const clone = editableContract.clone();
      clone.metadata = _.isEmpty(editableMetadata) ? {} : JSON.parse(editableMetadata);
      props.worldState.addContract(clone);
      props.handleSave();
      resetContractState();

    } catch (err) {
      window.alert(`Contract creation failed: ${err.message}`);
    }
  }
  const saveContract = (e) => {
    e.preventDefault();

    try {
      const clone = editableContract.clone();
      clone.metadata = _.isEmpty(editableMetadata) ? {} : JSON.parse(editableMetadata);
      props.worldState.replaceContract(contractIndexBeingEdited, clone);
      props.handleSave();
      resetContractState();

    } catch (err) {
      window.alert(`Contract save failed: ${err.message}`);
    }
  }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Contracts</h3>
        <InfoTooltip title={'Contract Manager'}>
          Use this page to add any smart contracts you're interested in tracking. ERC20 and ERC721 contracts represent fungible and non fungible tokens. You can also define Price Fetchers for those, to track their price changes over time in $USD and other currencies.
        </InfoTooltip>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div onClick={resetContractState} style={{paddingBottom: 30}}>
                <div className="row">
                  <h4 className="card-title">Known Contracts</h4>
                </div>
                <div className="row">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Address</th>
                          <th>Blockchain</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.worldState.contracts.map((contract, i) =>
                          <tr style={contractIndexBeingEdited === i ? {background: filterColor} : {}} key={contract.address}
                            onClick={evt => {
                              setContractIndexBeingEdited(i);
                              setEditableContract(contract);
                              evt.stopPropagation();
                          }}>
                            <td>{contract.name}</td>
                            <td>{contract.address}</td>
                            <td>{contract.blockchain}</td>
                            <td><button onClick={() => {
                              if (window.confirm('Are you sure you wish to delete this item?')) {
                                props.worldState.removeContract(contract);
                                props.handleSave();
                              }
                            }} className="btn btn-danger btn-sm">Delete</button></td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <h4 className="card-title">Contract</h4>
              </div>
              <div className="row">
                <div className="col-md-6 grid-margin">
                  <div className="form-group">
                    <label>ABI</label>
                    <AceEditor style={{minHeight: '300px'}}
                      mode="json"
                      theme="monokai"
                      name="jsonEditor"
                      editorProps={{ $blockScrolling: true }}
                      placeholder="Contract ABI goes here..."
                      fontSize={14}
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      height="100%"
                      width="100%"
                      value={editableContract.stringifiedAbi}
                      onChange={val => setEditableContractFields({stringifiedAbi: val})}
                    />
                  </div>
                </div>
                <div className="col-md-6 grid-margin">
                  <form className="forms-sample">
                    <Form.Group>
                      <label htmlFor="exampleInputUsername1">Contract Name</label>
                      <Form.Control type="text" id="exampleInputUsername1" placeholder="Master Gardener"
                         value={editableContract.name} onChange={(e) => setEditableContractFields({name: e.target.value})} />
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="exampleInputEmail1">Contract address</label>
                      <Form.Control type="text" className="form-control" id="exampleInputEmail1" placeholder="one1mvcxg0r34j0zzgk2qdq76a7sn40en7fy7lytq4"
                         value={editableContract.address} onChange={(e) => setEditableContractFields({address: e.target.value})} />
                    </Form.Group>

                    <Form.Group style={{display: 'flex'}}>
                      <span className="form-check mr-2">
                        <label className="form-check-label" onClick={() => setEditableContractFields({type: 'ERC20'})}>
                          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1"
                            checked={editableContract.type === 'ERC20'} readOnly />
                          <i className="input-helper"></i>
                          ERC20
                        </label>
                      </span>
                      <span className="form-check mr-2">
                        <label className="form-check-label" onClick={() => setEditableContractFields({type: 'ERC721'})}>
                          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1"
                            checked={editableContract.type === 'ERC721'} readOnly />
                          <i className="input-helper"></i>
                          ERC721
                        </label>
                      </span>
                      <span className="form-check mr-2">
                        <label className="form-check-label" onClick={() => setEditableContractFields({type: 'Other'})}>
                          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1"
                            checked={editableContract.type === 'Other'} readOnly />
                          <i className="input-helper"></i>
                          Other
                        </label>
                      </span>
                    </Form.Group>

                    {editableContract.typeRequiresTokenName() &&
                      <Form.Group>
                        <label htmlFor="exampleInputUsername3">Token Name</label>
                        <Form.Control type="text" placeholder="JEWEL"
                          value={editableContract.tokenName} onChange={(e) => setEditableContractFields({tokenName: e.target.value})} />
                      </Form.Group>
                    }

                    <div>
                      <button disabled={contractIndexBeingEdited < 0 || contractIndexBeingEdited >= props.worldState.contracts.length} onClick={saveContract}
                        className="btn btn-primary btn-fw mr-3">
                        Save
                      </button>
                      <button onClick={addNewContract} className="btn btn-primary btn-fw">Add new contract</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 grid-margin">
                  <div className="form-group">
                    <label>Metadata</label>
                    <AceEditor style={{minHeight: '300px'}}
                      mode="json"
                      theme="monokai"
                      name="jsonEditor"
                      editorProps={{ $blockScrolling: true }}
                      placeholder="JSON Metadata added here can be accessed by rules"
                      fontSize={14}
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      height="100%"
                      width="100%"
                      value={editableMetadata}
                      onChange={setEditableMetadata}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export function StateEditor(props) {
  const [editableJson, setEditableJson] = useState(JSON.stringify(props.worldState.serialize(), null, 2));
  const saveNewState = () => {
    try {
      const newWorldState = WorldState.deserialize(JSON.parse(editableJson));
      props.setWorldState(newWorldState);
      props.handleSave(newWorldState);
      window.alert("New state saved successfully!");
    } catch (err) {
      window.alert(`Badly formatted WorldState json: ${err.message}`);
    }
  };

  const resetToDefaultState = () => {
    const defaultWorldState = WorldState.deserialize(defaultWorldStateJson);
    props.setWorldState(defaultWorldState);
    props.handleSave(defaultWorldState);
    window.alert("App state successfully reset back to defaults!");
  }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">App State Editor</h3>
        <InfoTooltip title={'Send your App state to a friend'}>
          <div style={{minWidth: 300}}>
            <div>
              Use this page if you want to send your rules, contracts, and price fetchers to a friend for them to use. Just copy the below JSON code and ask others to import it in their own App State Editor, so they can use the rules and configs you created!
            </div>

            <div className="mt-2">
              A more robust rules marketplace is coming soon! :)
            </div>
          </div>
        </InfoTooltip>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <AceEditor style={{minHeight: '600px'}}
                  mode="json"
                  theme="monokai"
                  name="jsonEditor"
                  editorProps={{ $blockScrolling: true }}
                  placeholder="Contract ABI goes here..."
                  fontSize={14}
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={true}
                  height="100%"
                  width="100%"
                  value={editableJson}
                  onChange={setEditableJson}
                />
              </div>
              <div className="row" style={{marginTop: 50}}>
                <button onClick={saveNewState} className="btn btn-primary btn-fw">Import new world state</button>
                <button onClick={resetToDefaultState} className="ml-3 btn btn-primary btn-fw">Reset to default world state</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const buildColumns = (worldState) => {
  return [
    {
      dataField: 'tx',
      text: 'tx.hash',
      sort: true,
      formatter: (cellContent, row) =>
        <LinkWithAddr addr={worldState.defaultAddr} to={`/tx/${cellContent.hash}`}>{truncateLongString(cellContent.hash)}</LinkWithAddr>
    }, {
      dataField: 'timestamp',
      text: 'evt.timestamp',
      sort: true,
    }, {
      dataField: 'methodCall',
      text: 'tx.methodCall',
      sort: true,
      formatter: (cellContent, row) => {
        return (row.tx.methodCall)
          ? <div className="badge badge-pill badge-info">{row.tx.methodCall.name}</div>
          : truncateLongAddressCopiable(row.tx.input);
      }
    }, {
      dataField: 'from',
      text: 'tx.from',
      sort: true,
      formatter: (cellContent, row) => formatAddress(row.tx.from, worldState)
    }, {
      dataField: 'to',
      text: 'tx.to',
      sort: true,
      formatter: (cellContent, row) => formatAddress(row.tx.to, worldState)
    }, {
      dataField: 'name',
      text: 'evt.name',
      sort: true,
    }, {
      dataField: 'contractAddress',
      text: 'evt.contract',
      sort: true,
      formatter: (cellContent, row) => formatAddress(cellContent, worldState),
    }, {
      dataField: 'args',
      text: 'evt.args',
      formatter: (cellContent, row) =>
        <div>
        {_.map(cellContent, (arg, name) =>
          <div key={name}>
            <Copiable textToCopy={arg.value} tooltipText={`Value (click to copy): ${arg.value}`}>
            {`${name}: ${arg.type}`}
            </Copiable>
          </div>
        )}
        </div>
    }, {
      dataField: 'rules',
      text: 'Matched Rules',
      formatter: (cellContent, row) =>
        <div>
        {_.map(cellContent, (rule) =>
          <div key={rule.name} className="badge badge-pill badge-success">{rule.name}</div>
        )}
        </div>
    }, {
      dataField: 'effectOfEvent',
      text: 'Overall Effect',
      formatter: (cellContent, row) => {
        if (cellContent instanceof Error) {
          return <div style={{background: 'purple'}}>{cellContent.message}</div>;
        }
        return (
          <div>
          {_.map(cellContent?.toJson() || {}, (effect, token) =>
            <div key={token}>{addSign(formatTokenValue(effect, token))}</div>
          )}
          </div>
        );
      }
    }, {
      dataField: 'effectOfRule',
      text: 'Simulated Effect',
      formatter: (cellContent, row) => {
        if (cellContent instanceof Error) {
          return <div style={{background: 'purple'}}>{cellContent.message}</div>;
        }
        return (
          <div>
          {_.map((row.filteredByRule === true ? cellContent.toJson() : {}), (effect, token) =>
            <div key={token}>{addSign(formatTokenValue(effect, token))}</div>
          )}
          </div>
        );
      }
    }
  ];
};


export function EventRuleManager(props) {
  const [isLoadingTxs, isLoadingReceipts, transactions] = useTransactionsForAddress(props.worldState.defaultAddr, props.worldState);
  return <EventRuleManagerInternal {...props} isLoadingTxs={isLoadingTxs} isLoadingReceipts={isLoadingReceipts} transactions={transactions} />
}

function EventRuleManagerInternal(props) {
  // Rule Management state
  const [showOnlyAffectedEvents, setShowOnlyAffectedEvents] = useState(false);
  const [rule, setRule] = useState(new Rule());
  const setRuleFields = (fieldObj) => {
    return setRule(_.extend(new Rule(), rule, fieldObj));
  };
  const [ruleIndexBeingEdited, setRuleIndexBeingEdited] = useState(-1);
  const resetRuleState = () => {
    setRuleIndexBeingEdited(-1);
    setRule(new Rule())
  };

  const saveRule = (e) => {
    e.preventDefault();

    if (ruleIndexBeingEdited < 0 || ruleIndexBeingEdited >= props.worldState.rules.length) {
      window.alert(`Trying to edit rule with bad index ${ruleIndexBeingEdited}`);
      return;
    }

    props.worldState.rules.splice(ruleIndexBeingEdited, 1, rule);
    props.handleSave();
    resetRuleState();
  }

  const addNewRule = (e) => {
    e.preventDefault();
    props.worldState.addRule(rule.clone());
    props.handleSave();
    resetRuleState();
  };

  const {isLoadingTxs, isLoadingReceipts, transactions} = props;

  if (isLoadingTxs || isLoadingReceipts) {
    return <div>Loading...</div>;
  }

  const events = _.flatten(transactions.map(tx => tx.events || []));

  const dataFieldsToInclude = ['tx', 'from', 'to', 'name', 'contractAddress', 'args', 'rules', 'effectOfEvent', 'effectOfRule'];
  const cols = buildColumns(props.worldState).filter(col => dataFieldsToInclude.includes(col.dataField));

  const eventsAfterShouldApply = events.map(evt => {
    const shouldApply = rule.shouldApply(evt, evt.tx, props.worldState);
    const effectOfEvent = props.worldState.effectOfEvent(evt);
    return _.extend({}, evt, {filteredByRule: shouldApply, effectOfEvent});
  });

  const eventsAfterApply = eventsAfterShouldApply.map(evt => {
    if (evt.filteredByRule !== true) {
      return evt;
    }

    const effect = rule.apply(evt, evt.tx, props.worldState);
    return _.extend({}, evt, {effectOfRule: effect});
  });

  const rowStyler = (row, rowIndex) => (row.filteredByRule === true) ? {background: filterColor} : {};

  const filterError = _.find(_.map(eventsAfterApply, 'filteredByRule'), val => val instanceof Error);
  const effectError = _.find(_.map(eventsAfterApply, 'effectOfRule'), val => val instanceof Error);

  const eventsToShow = _.map(showOnlyAffectedEvents ? eventsAfterApply.filter(evt => evt.filteredByRule === true) : eventsAfterApply, evt =>
    _.extend({}, evt, {rules: props.worldState.rulesThatApply(evt, evt.tx)})
  );

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Event Rules</h3>
          <InfoTooltip title={'Event Rules'}>
            <div style={{minWidth: 300}}>
              <div>
                Blockchain transactions produce Events to signal when something happens - like a token or NFT changing hands. This page allows you
                to create rules that transform these events into Balance diffs.
              </div>

              <div className="mt-2">
              For the more technically inclined, this page allows you to implement myFilter and myBalanceEffectMaker in:
              <p className="mt-2 text-monospace">events.filter(myFilter).map(myBalanceEffectMaker)</p>
            </div>
          </div>
          </InfoTooltip>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div onClick={resetRuleState} style={{paddingBottom: 30}}>
                <div className="row">
                  <h4 className="card-title">Existing Rules</h4>
                </div>
                <div className="row">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.worldState.rules.map((rule, i) =>
                          <tr style={ruleIndexBeingEdited === i ? {background: filterColor} : {}} key={rule.uniqueKey} onClick={(evt) => {
                            setRuleIndexBeingEdited(i);
                            setRule(rule);
                            evt.stopPropagation();
                          }}>
                            <td><div className="badge badge-pill badge-success">{rule.name}</div></td>
                            <td><button onClick={() => {
                              if (window.confirm('Are you sure you wish to delete this item?')) {
                                props.worldState.removeRule(rule);
                                props.handleSave();
                              }
                            }} className="btn btn-danger btn-sm">Delete</button></td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <h4 className="card-title">Rule</h4>
              </div>
              <div className="row mb-3">
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Rule name</label>
                    <Form.Control type="text" id="exampleInputUsername1" placeholder="MyRule"
                        value={rule.name} onChange={(e) => setRuleFields({name: e.target.value})} />
                  </Form.Group>
                  <div>
                    <button disabled={ruleIndexBeingEdited < 0 || ruleIndexBeingEdited >= props.worldState.rules.length} onClick={saveRule}
                      className="btn btn-primary btn-fw mr-3">
                      Save
                    </button>
                    <button onClick={addNewRule} className="btn btn-primary btn-fw">Add new rule</button>
                  </div>
                </form>
              </div>
              <div className="row">
                <div className="col-md-6 grid-margin">
                  <div>
                    <label>Filter</label>
                    <AceEditor style={{minHeight: '100px'}}
                      mode="javascript"
                      theme="monokai"
                      name="jsEditor"
                      editorProps={{ $blockScrolling: true }}
                      placeholder="return evt.name == 'Transfer' && gltx.tx.from == myAddr;"
                      fontSize={14}
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      height="100%"
                      width="100%"
                      value={rule.filterCode}
                      onChange={val => setRuleFields({filterCode: val})}
                    />
                    {filterError && rule.filterCode !== '' &&
                      <div style={{background: 'red'}}>{filterError.message}</div>
                    }
                  </div>
                </div>
                <div className="col-md-6 grid-margin">
                  <div>
                    <label>Balance Effect</label>
                    <AceEditor style={{minHeight: '100px'}}
                      mode="javascript"
                      theme="monokai"
                      name="jsEditor"
                      editorProps={{ $blockScrolling: true }}
                      placeholder="return {jewel: evt.value};"
                      fontSize={14}
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      height="100%"
                      width="100%"
                      value={rule.effectCode}
                      onChange={val => setRuleFields({effectCode: val})}
                    />
                    {effectError && rule.effectCode !== '' &&
                      <div style={{background: 'red'}}>{effectError.message}</div>
                    }
                  </div>
                </div>
              </div>
              <div className="row mt-3" style={{justifyContent: 'space-between'}}>
                <h4 className="card-title">Event Rule Simulator</h4>
                <label className="form-check-label text-muted">
                  <input type="checkbox" value={showOnlyAffectedEvents}
                    onClick={() => setShowOnlyAffectedEvents(!showOnlyAffectedEvents)} className="form-check-input"/>
                  <i className="input-helper"></i>
                  Show only affected events
                </label>
              </div>
              <div className="row">
                <ToolkitProvider
                  sizePerPage={50}
                  keyField="timestamp"
                  bootstrap4
                  data={ eventsToShow }
                  columns={ cols }
                  search={{searchFormatted: true}}
                >
                  {
                    props => (
                      <div>
                        <BootstrapTable
                          rowStyle={rowStyler}
                          defaultSorted={[{dataField: 'timestamp', order: 'desc'}]}
                          pagination={ paginationFactory() }
                          { ...props.baseProps }
                          wrapperClasses="table-responsive"
                        />
                      </div>
                    )
                  }
                </ToolkitProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function useTokenBalances(contracts, addr) {
  const [balances, setBalances] = useState({});

  useEffect(() => {
    async function fetchBalance(contract) {
      const balance = await contract.connect().methods.balanceOf(addr).call()
      setBalances(prevState => _.extend({}, prevState, {[contract.address]: BigInt(balance)}));
    }

    _.forEach(contracts, fetchBalance);
  }, [addr, contracts]);

  return balances;
}

async function fetchPrice(code) {
  try {
    const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
    return await new AsyncFunction(code)();
  } catch(err) {
    return err;
  }
}

export function PriceFetcherManager(props) {
  const [contractIndexBeingEdited, setContractIndexBeingEdited] = useState(-1);
  const [fetchedPricesByAddr, setFetchedPricesByAddr] = useState({});
  const assetContracts = props.worldState.contracts.filter(c => c.isAsset())
  const contract = (contractIndexBeingEdited >= 0 && contractIndexBeingEdited < assetContracts.length) ? assetContracts[contractIndexBeingEdited] : undefined;
  const priceFetchersByAddr = _.fromPairs(_.map(assetContracts, contract => [contract.address, contract.priceFetcher]))
  const balances = useTokenBalances(assetContracts, props.worldState.defaultAddr);

  const valuesByAddr = _.mapValues(fetchedPricesByAddr, (price, addr) =>
    (_.isNumber(price) && balances[addr]) ? BigInt(price) * balances[addr] : price
  )

  const activeFetchedPrice = contract && fetchedPricesByAddr[contract.address];

  useEffect(() => {
    async function doFetch(addr) {
      const price = await fetchPrice(priceFetchersByAddr[addr]);
      if (price) {
        setFetchedPricesByAddr(prevState => _.extend({}, prevState, {[addr]: price}));
      }
    }

    _.forEach(_.keys(priceFetchersByAddr), (addr) => {
      if (!(addr in fetchedPricesByAddr)) {
        doFetch(addr);
      }
    });
  }, [priceFetchersByAddr, fetchedPricesByAddr]);

  console.log(fetchedPricesByAddr);

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Historical Price Fetchers</h3>
        <span>
          <InfoTooltip title={'Price Fetchers'}>
            Historical prices for ERC20 or ERC721 tokens depend heavily on the token. Use this page to create historical price fetchers for each of the tokens you're interested in.
          </InfoTooltip>
        </span>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="row" style={{justifyContent: 'space-between'}}>
                <h4 className="card-title">Asset Contracts</h4>
              </div>
              <div className="row">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Balance</th>
                        <th>Value</th>
                        <th>Blockchain</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assetContracts.map((contract, i) =>
                        <tr style={contractIndexBeingEdited === i ? {background: filterColor} : {}} key={contract.address}
                          onClick={evt => {
                            setContractIndexBeingEdited(i);
                            evt.stopPropagation();
                        }}>
                          <td>{contract.name}</td>
                          <td>{contract.address}</td>
                          <td>{(contract.address in balances)
                            ? formatTokenValue(balances[contract.address], contract.tokenName)
                            : `?? ${contract.tokenName}`
                          }</td>
                          <td>{contract.address in valuesByAddr && formatFiatValue(valuesByAddr[contract.address])}</td>
                          <td>{contract.blockchain}</td>
                          <td><button onClick={() => {
                            if (window.confirm('Are you sure you wish to delete this item?')) {
                              props.worldState.removeContract(contract);
                              props.handleSave();
                            }
                          }} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {contract &&
                <div>
                  <div className="col-md-6 grid-margin">
                    <div className="form-group">
                      <h4 className="card-title">Price Fetcher</h4>
                      <AceEditor style={{minHeight: '300px'}}
                        mode="javascript"
                        theme="monokai"
                        name="jsEditor"
                        editorProps={{ $blockScrolling: true }}
                        placeholder="return evt.name == 'Transfer' && gltx.tx.from == myAddr;"
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        height="100%"
                        width="100%"
                        value={contract.priceFetcher}
                        onChange={val => {
                          contract.priceFetcher = val;
                          props.handleSave();
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 grid-margin">
                  {activeFetchedPrice instanceof Error &&
                    <div style={{background: 'red'}}>{activeFetchedPrice.message}</div>
                  }
                  {_.isNumber(activeFetchedPrice) &&
                    <div style={{background: 'green'}}>{formatFiatValue(activeFetchedPrice * 10 ** 18)}</div>
                  }
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

