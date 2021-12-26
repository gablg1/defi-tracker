import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import _ from 'lodash';
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

// import brace from "brace";

import AceEditor from "react-ace";

// Import a Mode (language)
import "brace/mode/json";
import 'brace/mode/javascript';

// Import a Theme (okadia, github, xcode etc)
import "brace/theme/github";
import "brace/theme/monokai";

import {Rule, Contract, WorldState} from './App';
import {useTransactionsForAddress, buildColumns} from './TransactionsViewer';

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

export function EventRuleManager(props) {
  const [isLoadingTxs, isLoadingReceipts, transactions] = useTransactionsForAddress(props.worldState.defaultAddr, props.worldState);

  const allEvents = _.flatten(transactions.map(tx => tx.events));

  const [rule, setRule] = useState(new Rule());
  const setRuleFields = (fieldObj) => {
    return setRule(_.extend(new Rule(), rule, fieldObj));
  };

  const addNewRule = (e) => {
    // Prevent form from submitting
    e.preventDefault();

    try {
      props.worldState.addRule(rule);
      props.handleSave();

      setRule(new Rule());
    } catch (err) {
      window.alert(`Rule creation failed: ${err.message}`);
    }
  }

  const dataFieldsToInclude = ['timestamp', 'input', 'value', 'hash', 'blockNumber', 'from', 'to', 'stateAfter'];
  const cols = buildColumns(props.worldState).filter(col => dataFieldsToInclude.includes(col.dataField));

  let transactionsAfterApply = transactions;
  let evalError = undefined;
  try {
    transactionsAfterApply = transactions.map(tx => {
      return _.extend({}, tx, {filteredByRule: rule.shouldApply(tx, tx, props.worldState)});
    });
  } catch(err) {
    evalError = err;
  }

  const rowStyler = (row, rowIndex) => {
    if (row.filteredByRule) {
      return {background: 'red'};
    } else {
      return {};
    }
  }

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
                        <th>Filter Code</th>
                        <th>Effect Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.worldState.rules.map((rule) =>
                        <tr key={rule.uniqueKey}>
                          <td>{rule.name}</td>
                          <td>{rule.filterCode}</td>
                          <td>{rule.effectCode}</td>
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
                <h4 className="card-title">Add new Rule</h4>
              </div>
              <div className="row">
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Rule name</label>
                    <Form.Control type="text" id="exampleInputUsername1" placeholder="MyRule"
                        value={rule.name} onChange={(e) => setRuleFields({name: e.target.value})} />
                  </Form.Group>
                  <button onClick={addNewRule} className="btn btn-primary btn-fw">Add</button>
                </form>
                {evalError &&
                  <div style={{background: 'red'}}>
                  {evalError.message}
                  </div>
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
                  keyField="hash"
                  bootstrap4
                  data={ transactionsAfterApply }
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


