import React, { Component } from 'react';

class Badges extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render () {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Badges
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Badges</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Normal Badges</h4>
                <p className="card-description">Add class <code>.badge-&#123;color&#125;</code> with <code>.badge</code></p>
                <div className="template-demo">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="pl-0">Item</th>
                        <th className="text-right">Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pl-0">Primary label</td>
                        <td className="pr-0 text-right"><div className="badge badge-primary">Primary</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Info label</td>
                        <td className="pr-0 text-right"><div className="badge badge-info">Info</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Danger label</td>
                        <td className="pr-0 text-right"><div className="badge badge-danger">Danger</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Success label</td>
                        <td className="pr-0 text-right"><div className="badge badge-success">Success</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Warning label</td>
                        <td className="pr-0 text-right"><div className="badge badge-warning">Warning</div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Badge Pills</h4>
                <p className="card-description">Add class <code>.badge-pill</code></p>
                <div className="template-demo">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="pl-0">Item</th>
                        <th className="text-right">Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pl-0">Primary label</td>
                        <td className="pr-0 text-right"><div className="badge badge-primary badge-pill">Primary</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Info label</td>
                        <td className="pr-0 text-right"><div className="badge badge-info badge-pill">Info</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Danger label</td>
                        <td className="pr-0 text-right"><div className="badge badge-danger badge-pill">Danger</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Success label</td>
                        <td className="pr-0 text-right"><div className="badge badge-success badge-pill">Success</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Warning label</td>
                        <td className="pr-0 text-right"><div className="badge badge-warning badge-pill">Warning</div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Badge Outlined Variations</h4>
                <p className="card-description">Add class <code>.badge-outline-*</code></p>
                <div className="template-demo">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="pl-0">Rounded</th>
                        <th className="text-right">Normal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pl-0"><div className="badge badge-outline-primary badge-pill">Primary</div></td>
                        <td className="pr-0 text-right"><div className="badge badge-outline-primary">Primary</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0"><div className="badge badge-outline-info badge-pill">Info</div></td>
                        <td className="pr-0 text-right"><div className="badge badge-outline-info">Info</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0"><div className="badge badge-outline-danger badge-pill">Danger</div></td>
                        <td className="pr-0 text-right"><div className="badge badge-outline-danger">Danger</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0"><div className="badge badge-outline-success badge-pill">Success</div></td>
                        <td className="pr-0 text-right"><div className="badge badge-outline-success">Success</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0"><div className="badge badge-outline-warning badge-pill">Warning</div></td>
                        <td className="pr-0 text-right"><div className="badge badge-outline-warning">Warning</div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Badge Outlined Variations</h4>
                <div className="template-demo">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="pl-0">Item</th>
                        <th className="text-right">Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pl-0">Rounded Primary</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-outline-primary">2</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Rounded Info</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-outline-info">5</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Rounded Danger</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-outline-danger">1</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Rounded Success</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-outline-success">9</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Rounded Warning</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-outline-warning">4</div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Badge Variations</h4>
                <div className="template-demo">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="pl-0">Item</th>
                        <th className="text-right">Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pl-0">Rounded Primary</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-primary">2</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Rounded Info</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-info">5</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Rounded Danger</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-danger">1</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Rounded Success</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-success">9</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Rounded Warning</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-warning">4</div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Badge With Icons</h4>
                <div className="template-demo">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="pl-0">Item</th>
                        <th className="text-right">Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pl-0">Icon Badge</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-primary"><i className="mdi mdi-account"></i></div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Outlined Icons</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-outline-info"><i className="mdi mdi-cloud-outline"></i></div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Icon With Text</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-danger"><i className="mdi mdi-email mr-2"></i>12</div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Icon With Text</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-success">12<i className="mdi mdi-email ml-2"></i></div></td>
                      </tr>
                      <tr>
                        <td className="pl-0">Icon Badge</td>
                        <td className="pr-0 text-right"><div className="badge badge-pill badge-warning"><i className="mdi mdi-comment"></i></div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;