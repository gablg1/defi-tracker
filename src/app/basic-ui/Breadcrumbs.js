import React, { Component } from 'react'

export class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Breadcrumbs
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Breadcrumbs</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Breadcrumbs</h4>
                <p className="card-description">Add class <code>.breadcrumbs</code></p>
                <div className="template-demo">
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Data</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Files</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Custom Breadcrumbs</h4>
                <p className="card-description">Add class <code>.breadcrumb-custom</code> for custom styling</p>
                <div className="template-demo">
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb breadcrumb-custom">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page"><span>Library</span></li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb breadcrumb-custom">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page"><span>Data</span></li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb breadcrumb-custom">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Data</a></li>
                      <li className="breadcrumb-item active" aria-current="page"><span>Files</span></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Inverse Breadcrumbs</h4>
                <p className="card-description">Add class <code>.bg-inverse-*</code> for inverse skin</p>
                <div className="template-demo">
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-inverse-primary">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-inverse-info">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-inverse-danger">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-inverse-success">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-inverse-warning">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Inverse Custom Breadcrumbs</h4>
                <p className="card-description">Add class <code>.bg-inverse-*</code> for inverse skin</p>
                <div className="template-demo">
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb breadcrumb-custom bg-inverse-primary">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page"><span>Data</span></li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb breadcrumb-custom bg-inverse-info">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page"><span>Data</span></li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb breadcrumb-custom bg-inverse-danger">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page"><span>Data</span></li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb breadcrumb-custom bg-inverse-success">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page"><span>Data</span></li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb breadcrumb-custom bg-inverse-warning">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page"><span>Data</span></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Colored Breadcrumb Variations</h4>
                <p className="card-description">Add class <code>.bg-*</code> for solid colored breadcrumb</p>
                <div className="template-demo">
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-primary">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-info">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-danger">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-success">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-warning">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-light">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb bg-dark">
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Library</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Breadcrumbs
