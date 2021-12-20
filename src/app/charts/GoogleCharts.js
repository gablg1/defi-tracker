import React, { Component } from 'react'
import { Chart } from 'react-google-charts';

export class GoogleCharts extends Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        Google Charts
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Google Charts</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Bar Chart</h4>
                                <Chart
                                    chartType="Bar"
                                    data={[
                                        ['Opening Move', 'Percentage'],
                                        ["King's pawn (e4)", 44],
                                        ["Queen's pawn (d4)", 31],
                                        ["Knight to King 3 (Nf3)", 12],
                                        ["Queen's bishop pawn (c4)", 10],
                                        ['Other', 3]]}
                                    options={{
                                        title: 'Approximating Normal Distribution',
                                        legend: {
                                          position: 'none'
                                        },
                                        colors: ['#76C1FA'],
                                    
                                        chartArea: {
                                          width: 401
                                        },
                                        hAxis: {
                                          ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]
                                        },
                                        bar: {
                                          gap: 0
                                        },
                                    
                                        histogram: {
                                          bucketSize: 0.02,
                                          maxNumBuckets: 200,
                                          minValue: -1,
                                          maxValue: 1
                                        }
                                      }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Histogram Chart</h4>
                                <Chart
                                    chartType="Histogram"
                                    data={[
                                        ['Quarks', 'Leptons', 'Gauge Bosons', 'Scalar Bosons'],
                                        [2 / 3, -1, 0, 0],
                                        [2 / 3, -1, 0, null],
                                        [2 / 3, -1, 0, null],
                                        [-1 / 3, 0, 1, null],
                                        [-1 / 3, 0, -1, null],
                                        [-1 / 3, 0, null, null],
                                        [-1 / 3, 0, null, null]]}
                                    options={{
                                        title: 'Charges of subatomic particles',
                                        legend: {
                                          position: 'top',
                                          maxLines: 2
                                        },
                                        colors: ['#76C1FA', '#63CF72', '#F36368', '#FABA66'],
                                        interpolateNulls: false,
                                        chartArea: {
                                          width: 401
                                        },
                                      }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Area Chart</h4>
                                <Chart
                                    chartType="AreaChart"
                                    data={[
                                        ['Year', 'Sales', 'Expenses'],
                                        ['2013', 1000, 400],
                                        ['2014', 1170, 460],
                                        ['2015', 660, 1120],
                                        ['2016', 1030, 540]
                                    ]}
                                    options={{
                                        title: 'Company Performance',
                                        hAxis: {
                                          title: 'Year',
                                          titleTextStyle: {
                                            color: '#333'
                                          }
                                        },
                                        colors: ['#76C1FA', '#63CF72', '#F36368', '#FABA66'],
                                        chartArea: {
                                          width: 500
                                        },
                                        vAxis: {
                                          minValue: 0
                                        }
                                      }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Doughnut Chart</h4>
                                <Chart
                                    chartType="PieChart"
                                    data={[
                                        ['Task', 'Hours per Day'],
                                        ['Work', 11],
                                        ['Eat', 2],
                                        ['Commute', 2],
                                        ['Watch TV', 2],
                                        ['Sleep', 7]
                                    ]}
                                    options={{
                                        title: 'My Daily Activities',
                                        pieHole: 0.4,
                                        colors: ['#76C1FA', '#63CF72', '#F36368', '#FABA66'],
                                        chartArea: {
                                          width: 500
                                        },
                                      }}
                                 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Area Chart</h4>
                                <Chart
                                    chartType="LineChart"
                                    data={[
                                        ['Year', 'Sales', 'Expenses'],
                                        ['2004', 1000, 400],
                                        ['2005', 1170, 460],
                                        ['2006', 660, 1120],
                                        ['2007', 1030, 540]
                                    ]}
                                    options={{
                                        title: 'Company Performance',
                                        curveType: 'function',
                                        legend: {
                                          position: 'bottom'
                                        },
                                        colors: ['#76C1FA', '#63CF72', '#F36368', '#FABA66'],
                                        chartArea: {
                                          width: 500
                                        },
                                      }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleCharts
