import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';

export class ClipboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: Boolean,
      clipboardText1: 'Hello!',
      clipboardText2: 'Hello!',
      clipboardText3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      clipboardText4: 'dolor sit amet'
    }
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Clipboard
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Clipboard</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="card-body">
                    <h4 className="card-title">clipboard on text input</h4>
                    <p className="card-description">Copy from text input</p>
                    <input type="text" className="form-control" defaultValue={ this.state.clipboardText1 } onChange={ e => this.setState({ clipboardText1: e.target.value }) }/>
                    <div className="mt-3">
                      <Clipboard className="btn btn-inverse-primary" data-clipboard-text={ this.state.clipboardText1 }> Copy </Clipboard>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h4 className="card-title">Clipboard on textarea</h4>
                    <p className="card-description">Cut/copy from textarea</p>
                    <textarea className="form-control" rows="3" defaultValue={ this.state.clipboardText2 } onChange={ e => this.setState({ clipboardText2: e.target.value }) }></textarea>
                    <div className="mt-3">
                      <Clipboard className="btn btn-inverse-primary" data-clipboard-text={ this.state.clipboardText2 }> Copy </Clipboard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="card-body">
                    <h4 className="card-title">Clipboard on paragraph</h4>
                    <p className="card-description">Copy paragraph</p>
                    <div className="card card-inverse-primary">
                      <div className="card-body">
                        {this.state.clipboardText3}
                      </div>
                    </div>
                    <div className="mt-3">
                      <Clipboard className="btn btn-inverse-primary" data-clipboard-text={ this.state.clipboardText3 }> Copy </Clipboard>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h4 className="card-title">Copy portion from paragraph</h4>
                    <p className="card-description">Copy the highlighted text from this paragraph</p>
                    <div className="card card-inverse-primary">
                      <div className="card-body">
                        <p className="mb-0">
                          Lorem ipsum <span className="bg-info text-white">{this.state.clipboardText4}</span>, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Clipboard className="btn btn-inverse-primary" data-clipboard-text={ this.state.clipboardText4 }> Copy </Clipboard>
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
}

export default ClipboardPage
