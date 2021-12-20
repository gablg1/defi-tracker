import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

export class Chartist extends Component {
    simpleLineData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      };
      
      simpleLineOptions = {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      }

      times = function(n) {
        return Array.apply(null, new Array(n));
      };

      lineScattererData = this.times(52).map(Math.random).reduce(function(data, rnd, index) {
        data.labels.push(index + 1);
        for (var i = 0; i < data.series.length; i++) {
          data.series[i].push(Math.random() * 100)
        }
        return data;
      }, {
        labels: [],
        series: this.times(4).map(function() {
          return [];
        })
      });

      lineScattererOptions = {
        showLine: false,
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 13 === 0 ? 'W' + value : null;
          }
        }
      };
    
      lineScattererResponsiveOptions = [
        ['screen and (min-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 4 === 0 ? 'W' + value : null;
            }
          }
        }]
      ];

      stackedBarChartData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [
          ['800000', '1200000', '1400000', '1300000'],
          ['200000', '400000', '500000', '300000'],
          ['100000', '200000', '400000', '600000'],
          ['400000', '600000', '200000', '0000']
        ]
      };
      stackedBarChartOptions = {
        stackBars: true,
        axisY: {
          labelInterpolationFnc: function(value) {
            return (value / 1000) + 'k';
          }
        }
      };

    hoizontalBarChartData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
          [5, 4, 3, 7, 5, 10, 3],
          [3, 2, 9, 5, 4, 6, 4],
          [2, 6, 7, 1, 3, 5, 9],
          [2, 6, 7, 1, 3, 5, 19],
        ]
      };

      hoizontalBarChartOptions = {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
          offset: 20
        }
      };

      pieData = {
        series: [5, 3, 4]
      };

    pieOptions = {
        labelInterpolationFnc: (value) => {
            return (Math.round(value / this.pieData.series.reduce((a,b)=> a + b) * 100) + '%')
      }
    }

    doughnutLabels = ['safari', 'chrome', 'explorer', 'firefox'];
    doughnutData = {
        series: [20, 40, 10, 30]
    };
    doughnutOptions = {
        donut: true,
        donutWidth: 60,
        donutSolid: true,
        startAngle: 270,
        showLabel: true,
        labelInterpolationFnc: (value, index) => {
        var percentage = Math.round(value / this.doughnutData.series.reduce((a,b) => a + b) * 100) + '%';
        return this.doughnutLabels[index] + ' ' + percentage;
        }
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        Chartist
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Chartist</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Simple Line Chart</h4>
                                <ChartistGraph className="ct-perfect-fourth" data={this.simpleLineData} type="Line" options={this.simpleLineOptions} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Line Scatterer</h4>
                                <ChartistGraph className="ct-perfect-fourth" data={this.lineScattererData} type="Line" options={this.lineScattererOptions} responsive-options={this.lineScattererResponsiveOptions} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Stacked Bar Chart</h4>
                                <ChartistGraph className="ct-perfect-fourth" data={this.stackedBarChartData} type="Bar" options={this.stackedBarChartOptions} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Horizontal Bar Chart</h4>
                                <ChartistGraph className="ct-perfect-fourth" data={this.hoizontalBarChartData} type="Bar" options={this.hoizontalBarChartOptions} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Pie Chart</h4>
                                <ChartistGraph className="ct-perfect-fourth" data={this.pieData} type="Pie" options={this.pieOptions} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Doughnut Chart</h4>
                                <ChartistGraph className="ct-perfect-fourth" data={this.doughnutData} type="Pie" options={this.doughnutOptions} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chartist
