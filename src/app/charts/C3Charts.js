import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
const lineData = {
  columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 50, 20, 10, 40, 15, 25]
  ]
};
const splineData = {
  columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 50, 20, 10, 40, 15, 25]
  ],
  type: 'spline'
};
  const stepData = {
    columns: [
        ['data1', 300, 350, 300, 0, 0, 100],
        ['data2', 130, 100, 140, 200, 150, 50]
    ],
    types: {
        data1: 'step',
        data2: 'area-step'
    }
  }
  const areaData = {
    columns: [
      ['data1', 300, 350, 300, 0, 0, 0],
      ['data2', 130, 100, 140, 200, 150, 50]
    ],
    types: {
        data1: 'area',
        data2: 'area-spline'
    }
  }
  const barData = {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 130, 100, 140, 200, 150, 50]
    ],
    type: 'bar',
  }
  const barStackedData = {
    columns: [
      ['data1', -30, 200, 200, 400, -150, 250],
      ['data2', 130, 100, -100, 200, -150, 50],
      ['data3', -230, 200, 200, -300, 250, 250]
    ],
    type: 'bar',
    groups: [
        ['data1', 'data2',  'data3']
    ]
  }
  const pieData = {
    columns: [
      ['data1', 30],
      ['data2', 120],
      ['data3', 60],
    ],
    type : 'pie',
    onclick: function (d, i) { console.log("onclick", d, i); },
    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    onmouseout: function (d, i) { console.log("onmouseout", d, i); },
  }
  const doNutData = {
    columns: [
      ['data1', 30],
      ['data2', 120],
      ['data3', 60],
    ],
    type : 'donut',
    onclick: function (d, i) { console.log("onclick", d, i); },
    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  }

export class C3Charts extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> C3 </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
              <li className="breadcrumb-item active" aria-current="page">C3</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Line chart</h4>
                <C3Chart data={lineData} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Spline chart</h4>
                <C3Chart data={splineData} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Step Chart</h4>
                <C3Chart data={stepData} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Area Chart</h4>
                <C3Chart data={areaData} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Bar Chart</h4>
                <C3Chart data={barData} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Stacked Bar Chart</h4>
                <C3Chart data={barStackedData} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Pie Chart</h4>
                <C3Chart data={pieData} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Donut Chart</h4>
                <C3Chart data={doNutData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default C3Charts
