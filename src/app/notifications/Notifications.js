import React, { Component } from 'react'
import cogoToast from 'cogo-toast';
import Alert from 'react-bootstrap/Alert'

export class Notifications extends Component {

    toastoptions = {
        hideAfter: 5,
        position: 'top-right',
        heading: 'Attention'
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        Notifications
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Features</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Notifications</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card px-3">
                            <div className="card-body">
                                <h4 className="card-title">Toast Styles</h4>
                                <p className="card-description mb-0">
                                Click on the below buttons for notifications in different styles. 
                                </p>
                                <p className="card-description">
                                Specify the predefined types of toasts - success, info, warn and error
                                </p>
                                <div className="template-demo d-flex justify-content-md-between flex-wrap">
                                    <button type="button" className="btn btn-success btn-fw" onClick={() => cogoToast.success('This is a success message!', this.toastoptions)} >Success</button>
                                    <button type="button" className="btn btn-info btn-fw" onClick={() => cogoToast.info('This is a success message!', this.toastoptions)} >Info</button>
                                    <button type="button" className="btn btn-warning btn-fw" onClick={() => cogoToast.warn('This is a success message!', this.toastoptions)} >Warning</button>
                                    <button type="button" className="btn btn-danger btn-fw" onClick={() => cogoToast.error('This is a success message!', this.toastoptions)} >Error</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 grid-margin">
                        <div className="card px-3">
                            <div className="card-body">
                                <h4 className="card-title">Toast Positions</h4>
                                <p className="card-description mb-0">
                                The <code>position</code> property can be used to specify the predefined positions of toasts.
                                </p>
                                <p className="card-description">
                                Specify the predefined types of toasts - success, info, warn and error
                                </p>
                                <div className="template-demo d-flex justify-content-md-between flex-wrap">
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => cogoToast.info('Top Left!', {position: 'top-left'})} >Top Left</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => cogoToast.info('Top Center!', {position: 'top-center'})} >Top Center</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => cogoToast.info('Top Right!', {position: 'top-right'})} >Top Right</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => cogoToast.info('Bottom Left!', {position: 'bottom-left'})} >Bottom Left</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => cogoToast.info('Bottom Center!', {position: 'bottom-center'})} >Bottom Center</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => cogoToast.info('Bottom Right!', {position: 'bottom-right'})} >Bottom Right</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Bootstrap alert</h4>
                                <p className="card-description">
                                Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <code>variant</code>s.
                                </p>
                                {
                                    [
                                        'primary',
                                        'secondary',
                                        'success',
                                        'danger',
                                        'warning',
                                        'info',
                                        'light',
                                        'dark',
                                      ].map((variant, idx) => (
                                        <Alert key={idx} variant={variant}>
                                          This is a {variant} alert—check it out!
                                        </Alert>
                                      ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Custom alert</h4>
                                <p className="card-description">Alerts can contain whatever content you like. Headers, paragraphs, dividers, go crazy.</p>
                                <Alert variant="secondary">
                                    <p className="p-3 mb-0">
                                    Well done! You successfully read this important alert message.
                                    </p>
                                    <p className="mb-0 p-3">
                                        <button className="btn btn-secondary mb-2 mr-2">Ok</button><button className="btn btn-inverse-secondary mb-2">Cancel</button>
                                    </p>
                                </Alert>
                                <Alert variant="info">
                                    <p className="p-3 mb-0">
                                    Heads up! This alert needs your attention, but it's not super important.
                                    </p>
                                    <p className="mb-0 p-3">
                                        <button className="btn btn-info mb-2 mr-2">Ok</button><button className="btn btn-light mb-2">Cancel</button>
                                    </p>
                                </Alert>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notifications
