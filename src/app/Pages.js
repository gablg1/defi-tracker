import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import _ from 'lodash';
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';

import {formatTokenValue, Copiable, formatAddress, truncateLongAddressCopiable, truncateLongString } from './utils';

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

const addSign = (valueString) =>
  (valueString.startsWith('+') || valueString.startsWith('-')) ? valueString : `+${valueString}`;

export function ContractManager(props) {
  const [newContractAbi, setNewContractAbi] = useState('');
  const [newContractName, setNewContractName] = useState('');
  const [newContractAddr, setNewContractAddr] = useState('');

  const addNewContract = (e) => {
    // Prevent form from submitting
    e.preventDefault();

    try {
      props.worldState.addContract(new Contract({stringifiedAbi: newContractAbi, name: newContractName, address: newContractAddr}));
      props.handleSave();

      setNewContractAbi('');
      setNewContractName('');
      setNewContractAddr('');
    } catch (err) {
      window.alert(`Contract creation failed: ${err.message}`);
    }
  }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Contracts</h3>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
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
                      {props.worldState.contracts.map((contract) =>
                        <tr key={contract.address}>
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
              <div className="row">
                <h4 className="card-title">Add new Contract</h4>
              </div>
              <div className="row">
                <div className="col-md-6 grid-margin">
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
                    value={newContractAbi}
                    onChange={setNewContractAbi}
                  />
                </div>
                <div className="col-md-6 grid-margin">
                  <form className="forms-sample">
                    <Form.Group>
                      <label htmlFor="exampleInputUsername1">Contract Name</label>
                      <Form.Control type="text" id="exampleInputUsername1" placeholder="Master Gardener"
                         value={newContractName} onChange={(e) => setNewContractName(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="exampleInputEmail1">Contract address</label>
                      <Form.Control type="text" className="form-control" id="exampleInputEmail1" placeholder="one1mvcxg0r34j0zzgk2qdq76a7sn40en7fy7lytq4"
                         value={newContractAddr} onChange={(e) => setNewContractAddr(e.target.value)} />
                    </Form.Group>
                    <button onClick={addNewContract} className="btn btn-primary btn-fw">Add</button>
                  </form>
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

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">World State</h3>
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
                <button onClick={saveNewState} className="btn btn-primary btn-fw">Save new world state</button>
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
        <Link to={`/tx/${cellContent}`}>{truncateLongString(cellContent.hash)}</Link>
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
      dataField: 'effectOfRule',
      text: 'Rule Effect',
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
  // Rule Management state
  const [rule, setRule] = useState(new Rule());
  const setRuleFields = (fieldObj) => {
    return setRule(_.extend(new Rule(), rule, fieldObj));
  };

  const [ruleIndexBeingEdited, setRuleIndexBeingEdited] = useState(-1);
  const saveRule = (e) => {
    // Prevent form from submitting
    e.preventDefault();

    try {
      // Add new rule
      if (ruleIndexBeingEdited == -1) {
        props.worldState.addRule(rule);
      // Edit existing rule
      } else {
        props.worldState.rules.splice(ruleIndexBeingEdited, 1, rule);
      }
      props.handleSave();

    } catch (err) {
      window.alert(`Rule creation failed: ${err.message}`);
    }
  }

  // Load Transactions and Events
  const [isLoadingTxs, isLoadingReceipts, transactions] = useTransactionsForAddress(props.worldState.defaultAddr, props.worldState);

  if (isLoadingTxs || isLoadingReceipts) {
    return <div>Loading...</div>;
  }

  const events = _.flatten(transactions.map(tx => tx.events || []));

  const cols = buildColumns(props.worldState);

  const eventsAfterShouldApply = events.map(evt => {
    const shouldApply = rule.shouldApply(evt, evt.tx, props.worldState);
    return _.extend({}, evt, {filteredByRule: shouldApply});
  });

  const eventsAfterApply = eventsAfterShouldApply.map(evt => {
    if (evt.filteredByRule !== true) {
      return evt;
    }

    const effect = rule.apply(evt, evt.tx, props.worldState);
    return _.extend({}, evt, {effectOfRule: effect});
  });

  const rowStyler = (row, rowIndex) => (row.filteredByRule === true) ? {background: 'red'} : {};

  const filterError = _.find(_.map(eventsAfterApply, 'filteredByRule'), val => val instanceof Error);
  const effectError = _.find(_.map(eventsAfterApply, 'effectOfRule'), val => val instanceof Error);

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Event Rules</h3>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
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
                        <tr style={ruleIndexBeingEdited == i ? {background: 'gray'} : {}} key={rule.uniqueKey} onClick={() => {
                          setRuleIndexBeingEdited(i);
                          setRule(rule);
                        }}>
                          <td><div className="badge badge-pill badge-info">{rule.name}</div></td>
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
              <div className="row" style={{marginTop: 20}}>
                <h4 className="card-title">Rule</h4>
              </div>
              <div className="row">
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Rule name</label>
                    <Form.Control type="text" id="exampleInputUsername1" placeholder="MyRule"
                        value={rule.name} onChange={(e) => setRuleFields({name: e.target.value})} />
                  </Form.Group>
                  <button onClick={saveRule} className="btn btn-primary btn-fw">Save</button>
                </form>
                {filterError && rule.filterCode != '' &&
                  <div style={{background: 'red'}}>{filterError.message}</div>
                }
                {effectError && rule.effectCode != '' &&
                  <div style={{background: 'red'}}>{effectError.message}</div>
                }
              </div>
              <div className="row">
                <div className="col-md-6 grid-margin">
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
                    value={rule.filterCode}
                    onChange={val => setRuleFields({filterCode: val})}
                  />
                </div>
                <div className="col-md-6 grid-margin">
                  <AceEditor style={{minHeight: '300px'}}
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
                </div>
              </div>
              <div className="row" style={{marginTop: 20}}>
                <h4 className="card-title">Event Rule Simulator</h4>
              </div>
              <div className="row">
                <ToolkitProvider
                  sizePerPage={50}
                  keyField="timestamp"
                  bootstrap4
                  data={ eventsAfterApply }
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


