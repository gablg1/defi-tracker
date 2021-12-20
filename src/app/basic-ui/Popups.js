import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';
import { renderToStaticMarkup } from 'react-dom/server';

export class Popups extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Popups
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Dialogs</a></li>
              <li className="breadcrumb-item active" aria-current="page">Popups</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                    <div className="wrapper text-center">
                      <h4 className="card-title">Alerts Popups</h4>
                      <p className="card-description">A basic message</p>
                      <button className="btn btn-outline-primary" onClick={() => this.setState({ show1: true })}>Click here!</button>
                      <SweetAlert
                        show={this.state.show1}
                        text="Any fool can use a computer"
                        onConfirm={() => this.setState({ show1: false })}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                    <div className="wrapper text-center">
                      <h4 className="card-title">Alerts Popups</h4>
                      <p className="card-description">A title with a text under</p>
                      <button className="btn btn-outline-primary" onClick={() => this.setState({ show2: true })}>Click here!</button>
                      <SweetAlert
                        show={this.state.show2}
                        title="Read the alert!"
                        text="Click OK to close this alert"
                        onConfirm={() => this.setState({ show2: false })}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="wrapper text-center">
                      <h4 className="card-title">Alerts Popups</h4>
                      <p className="card-description">A success message!</p>
                      <button className="btn btn-outline-primary" onClick={() => this.setState({ show3: true })}>Click here!</button>
                      <SweetAlert
                        show={this.state.show3}
                        title="Read the alert!"
                        text="Click OK to close this alert"
                        type="success"
                        onConfirm={() => this.setState({ show3: false })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                    <div className="wrapper text-center">
                      <h4 className="card-title">Alerts Popups</h4>
                      <p className="card-description">A waring alert!</p>
                      <button className="btn btn-outline-primary" onClick={() => this.setState({ show4: true })}>Click here!</button>
                      <SweetAlert
                        show={this.state.show4}
                        title="Are you sure?"
                        text="You won't be able to revert this!"
                        type="warning"
                        showCancelButton
                        onConfirm={() => this.setState({ show4: false })}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                    <div className="wrapper text-center">
                      <h4 className="card-title">Alerts Popups</h4>
                      <p className="card-description">A question alert!</p>
                      <button className="btn btn-outline-primary" onClick={() => this.setState({ show5: true })}>Click here!</button>
                      <SweetAlert
                        show={this.state.show5}
                        title="Are you sure?"
                        text="You won't be able to revert this!"
                        type="question"
                        showCancelButton
                        onConfirm={() => this.setState({ show5: false })}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="wrapper text-center">
                      <h4 className="card-title">Alerts Popups</h4>
                      <p className="card-description">Custom HTML title and description alert</p>
                      <button className="btn btn-outline-primary" onClick={() => this.setState({ show6: true })}>Click here!</button>
                      <SweetAlert
                        show={this.state.show6}
                        title="<strong>HTML <u>example</u></strong>"
                        html={renderToStaticMarkup(<HelloWorld />)}
                        type="info"
                        onConfirm={() => this.setState({ show6: false })}                      
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
}

export class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h4 className="mt-4">Hellow world</h4>
        <p className="mb-0">You can use <b>bold text</b></p>
        <a href="//sweetalert2.github.io">links</a>
        <p className="mb-0">and other HTML tags</p>
      </div>
    )
  }
}

export default Popups
