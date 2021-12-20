import React, { Component } from 'react';
import GaugeChart from 'react-gauge-chart';

export class GuageChart extends Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        Guage Chart
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Guage Chart</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-6 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Default Chart</h4>
                                <GaugeChart id="gauge-chart1" textColor="#ffffff" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin">
                        <div className="card">
                            <div className="card-body">
                            <h4 className="card-title">With 20 levels and pointer at 86%</h4>
                                <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={0.86} textColor="#ffffff" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin">
                        <div className="card">
                            <div className="card-body">
                            <h4 className="card-title">Custom colors and larger arc width</h4>
                                <GaugeChart id="gauge-chart3" nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={0.37} textColor="#ffffff" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin">
                        <div className="card">
                            <div className="card-body">
                            <h4 className="card-title">Custom corner radius and larger padding</h4>
                                <GaugeChart id="gauge-chart4" nrOfLevels={10} arcPadding={0.1} cornerRadius={3} percent={0.6} textColor="#ffffff" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GuageChart
