import React, { Component } from 'react'
import { VectorMap } from "react-jvectormap"
const mapData = {
  CN: 100000,
  IN: 9900,
  SA: 86,
  EG: 70,
  SE: 0,
  FI: 0,
  FR: 0,
  US: 20
};


export class VectorMapPage extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Vector maps </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Maps</a></li>
              <li className="breadcrumb-item active" aria-current="page">Vector maps</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Vectormap</h4>
                <p className="card-description">Simple world map using Vectormap plugin</p>
                <div className="map-dimension">
                <div>
                  <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent" //change it to ocean blue: #0077be
                    zoomOnScroll={false}
                    containerClassName="map"
                    regionStyle={{
                      initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                      },
                      hover: {
                        "fill-opacity": 0.8,
                        cursor: "pointer"
                      },
                      selected: {
                        fill: "#8cbf99" //color for the clicked country
                      },
                      selectedHover: {}
                    }}
                    regionsSelectable={true}
                    series={{
                      regions: [
                        {
                          values: mapData, //this is your data
                          scale: ["#146804", "#8cbf99"], //your color game's here
                          normalizeFunction: "polynomial"
                        }
                      ]
                    }}
                  />
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

export default VectorMapPage
