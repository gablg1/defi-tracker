import React, { Component } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Sphere,
  Graticule,
  Marker,
  Line
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export class SimpleMap extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> React Simple Maps </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Maps</a></li>
              <li className="breadcrumb-item active" aria-current="page">Simple Maps</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">ZoomableGroup</h4>
                <div className="map-dimension">
                  <ComposableMap>
                    <ZoomableGroup zoom={1}>
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map(geo => (
                            <Geography key={geo.rsmKey} geography={geo} />
                          ))
                        }
                      </Geographies>
                    </ZoomableGroup>
                  </ComposableMap>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sphere</h4>
                <div className="map-dimension">
                  <ComposableMap projectionConfig={{ scale: 147 }}>
                    <Sphere stroke="#FF5533" strokeWidth={2} />
                    <Geographies geography={geoUrl}>
                      {({ geographies }) =>
                        geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                      }
                    </Geographies>
                  </ComposableMap>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Graticule</h4>
                <div className="map-dimension">
                <ComposableMap projectionConfig={{ scale: 147 }}>
                  <Graticule stroke="#F53" />
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                    }
                  </Geographies>
                </ComposableMap>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Geographies</h4>
                <div className="map-dimension">
                  <ComposableMap>
                    <Geographies geography={geoUrl}>
                      {({ geographies }) =>
                        geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                      }
                    </Geographies>
                  </ComposableMap>`
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Marker</h4>
                <div className="map-dimension">
                  <ComposableMap projection="geoAlbers">
                    <Geographies geography={geoUrl}>
                      {({ geographies }) =>
                        geographies.map(geo => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#DDD"
                            stroke="#FFF"
                          />
                        ))
                      }
                    </Geographies>
                    <Marker coordinates={[-74.006, 40.7128]}>
                      <circle r={8} fill="#F53" />
                    </Marker>
                  </ComposableMap>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Line</h4>
                <div className="map-dimension">
                  <ComposableMap
                    projection="geoEqualEarth"
                    projectionConfig={{
                      scale: 420,
                      center: [-40, 30]
                    }}
                  >
                    <Graticule stroke="#DDD" />
                    <Geographies
                      geography={geoUrl}
                      fill="#D6D6DA"
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                    >
                      {({ geographies }) =>
                        geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                      }
                    </Geographies>
                    <Line
                      from={[2.3522, 48.8566]}
                      to={[-74.006, 40.7128]}
                      stroke="#FF5533"
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                  </ComposableMap>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleMap
