import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Col, Row, Nav, Tab } from 'react-bootstrap';
export class Tickets extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="d-sm-flex pb-4 mb-4 border-bottom">
                  <div className="d-flex align-items-center">
                    <h5 className="page-title mb-n2">Open Tickets</h5>
                    <p className="mt-2 mb-n1 ml-3 text-muted">230 Tickets</p>
                  </div>
                  <form className="ml-lg-auto d-flex pt-2 pt-md-0 align-items-stretch justify-content-end">
                    <Form.Control type="text" className="h-auto w-50" placeholder="Search" />
                    <button type="submit" className="btn btn-success no-wrap ml-lg-4 ml-0 px-2 px-lg-4">Search Ticket</button>
                  </form>
                </div>

                <div className="tickets-tab-switch">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                  <Col sm={12}> 
                    <Nav>
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="d-flex align-items-center">
                        Open Tickets <div className="badge">13</div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="d-flex align-items-center">
                        Pending Tickets <div className="badge">50 </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="d-flex align-items-center">
                        On-hold Tickets <div className="badge">29 </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                  <Tab.Content className="w-100 px-0">
                    <Tab.Pane eventKey="first">
                      <div>
                        <div className="tickets-date-group"><i className="mdi mdi-calendar"></i>Tuesday, 21 May 2019 </div>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7 col-12">
                            <div className="wrapper pb-2">
                              <h5>#39033 - Design Admin Dashboard</h5>
                              <div className="badge badge-success">New</div>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face13.jpg") } alt="profile" />
                              <span>Brett Gonzales</span>
                              <span><i className="mdi mdi-clock-outline"></i>03:34AM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 d-none d-md-block pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face16.jpg") } alt="profile" />
                            <span className="text-muted">Frank Briggs</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6 d-none d-md-block">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Wireframe</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7 col-12">
                            <div className="wrapper pb-2">
                              <h5>#39040 - Website Redesign</h5>
                              <div className="badge badge-info">Pro</div>
                            </div>
                            <div className="wrapper text-muted d-none d-lg-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face18.jpg") } alt="profile" />
                              <span>Olivia Cross</span>
                              <span><i className="mdi mdi-clock-outline"></i>04:23AM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-12  pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face14.jpg") } alt="profile" />
                            <span className="text-muted">Frank Briggs</span>
                          </div>
                          <div className="ticket-float col-lg-2 d-none d-lg-block">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Wireframe</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#39041 - Bootstrap Framework not working</h5>
                              <div className="badge badge-info">Pro</div>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face11.jpg") } alt="profile" />
                              <span>Leah Frank</span>
                              <span><i className="mdi mdi-clock-outline"></i>04:24AM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6  pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face10.jpg") } alt="profile" />
                            <span className="text-muted">Emilie Barnett</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Deployed</span>
                          </div>
                        </a>
                        <div className="tickets-date-group"><i className="mdi mdi-calendar"></i>Tuesday, 20 Apr,2019 </div>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#39045 - Design Admin Dashboard</h5>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face18.jpg") } alt="profile" />
                              <span>Luella Sparks</span>
                              <span><i className="mdi mdi-clock-outline"></i>12:54PM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face6.jpg") } alt="profile" />
                            <span className="text-muted">Hunter Garza</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Concept</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#29033 - Set up the marketplace strategy </h5>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face15.jpg") } alt="profile" />
                              <span>Mitchell Barber</span>
                              <span><i className="mdi mdi-clock-outline"></i>4:19AM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face7.jpg") } alt="profile" />
                            <span className="text-muted">Michael Campbell</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Wireframe</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#29033 - Design Admin Dashboard</h5>
                              <div className="badge badge-success">New</div>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face13.jpg") } alt="profile" />
                              <span>Rhoda Jimenez</span>
                              <span><i className="mdi mdi-clock-outline"></i>01:27PM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face10.jpg") } alt="profile" />
                            <span className="text-muted">Maria Cook</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Deployed</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#29033 - Compose newsletter for the big launch</h5>
                              <div className="badge badge-success">New</div>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face17.jpg") } alt="profile" />
                              <span>Alta Little</span>
                              <span><i className="mdi mdi-clock-outline"></i>06:16PM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face20.jpg") } alt="profile" />
                            <span className="text-muted">Juan Little</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Concept</span>
                          </div>
                        </a>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div>
                        <div className="tickets-date-group"><i className="mdi mdi-calendar"></i>Tuesday, 21 May 2019 </div>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#39045 - Design Admin Dashboard</h5>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face18.jpg") } alt="profile" />
                              <span>Luella Sparks</span>
                              <span><i className="mdi mdi-clock-outline"></i>12:54PM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face6.jpg") } alt="profile" />
                            <span className="text-muted">Hunter Garza</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Concept</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#39033 - Design Admin Dashboard</h5>
                              <div className="badge badge-success">New</div>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face13.jpg") } alt="profile" />
                              <span>Brett Gonzales</span>
                              <span><i className="mdi mdi-clock-outline"></i>03:34AM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face16.jpg") } alt="profile" />
                            <span className="text-muted">Frank Briggs</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Wireframe</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#29033 - Compose newsletter for the big launch</h5>
                              <div className="badge badge-success">New</div>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face17.jpg") } alt="profile" />
                              <span>Alta Little</span>
                              <span><i className="mdi mdi-clock-outline"></i>06:16PM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face20.jpg") } alt="profile" />
                            <span className="text-muted">Juan Little</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Concept</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#39040 - Website Redesign</h5>
                              <div className="badge badge-info">Pro</div>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face18.jpg") } alt="profile" />
                              <span>Olivia Cross</span>
                              <span><i className="mdi mdi-clock-outline"></i>04:23AM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face14.jpg") } alt="profile" />
                            <span className="text-muted">Frank Briggs</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Wireframe</span>
                          </div>
                        </a>
                        <div className="tickets-date-group"><i className="mdi mdi-calendar"></i>Tuesday, 20 Apr,2019 </div>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#29033 - Set up the marketplace strategy </h5>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face15.jpg") } alt="profile" />
                              <span>Mitchell Barber</span>
                              <span><i className="mdi mdi-clock-outline"></i>4:19AM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face7.jpg") } alt="profile" />
                            <span className="text-muted">Michael Campbell</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Wireframe</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#39041 - Bootstrap Framework not working</h5>
                              <div className="badge badge-info">Pro</div>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face11.jpg") } alt="profile" />
                              <span>Leah Frank</span>
                              <span><i className="mdi mdi-clock-outline"></i>04:24AM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face10.jpg") } alt="profile" />
                            <span className="text-muted">Emilie Barnett</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Deployed</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#29033 - Design Admin Dashboard</h5>
                              <div className="badge badge-success">New</div>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face13.jpg") } alt="profile" />
                              <span>Rhoda Jimenez</span>
                              <span><i className="mdi mdi-clock-outline"></i>01:27PM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face10.jpg") } alt="profile" />
                            <span className="text-muted">Maria Cook</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Deployed</span>
                          </div>
                        </a>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div>
                        <div className="tickets-date-group"><i className="mdi mdi-calendar"></i>Tuesday, 21 May 2019 </div>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#39040 - Website Redesign</h5>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face18.jpg") } alt="profile" />
                              <span>Olivia Cross</span>
                              <span><i className="mdi mdi-clock-outline"></i>04:23AM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face14.jpg") } alt="profile" />
                            <span className="text-muted">Frank Briggs</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Wireframe</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#29033 - Design Admin Dashboard</h5>
                              <div className="badge badge-success">New</div>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face13.jpg") } alt="profile" />
                              <span>Rhoda Jimenez</span>
                              <span><i className="mdi mdi-clock-outline"></i>01:27PM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face10.jpg") } alt="profile" />
                            <span className="text-muted">Maria Cook</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Deployed</span>
                          </div>
                        </a>
                        <a href="!#" className="tickets-card row mx-0" onClick={evt =>evt.preventDefault()}>
                          <div className="tickets-details col-lg-7">
                            <div className="wrapper pb-2">
                              <h5>#29033 - Compose newsletter for the big launch</h5>
                            </div>
                            <div className="wrapper text-muted d-none d-md-block">
                              <span>Assigned to</span>
                              <img className="assignee-avatar" src={ require("../../assets/images/faces/face17.jpg") } alt="profile" />
                              <span>Alta Little</span>
                              <span><i className="mdi mdi-clock-outline"></i>06:16PM</span>
                            </div>
                          </div>
                          <div className="ticket-float col-lg-3 col-sm-6 pr-0">
                            <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face20.jpg") } alt="profile" />
                            <span className="text-muted">Juan Little</span>
                          </div>
                          <div className="ticket-float col-lg-2 col-sm-6">
                            <i className="category-icon mdi mdi-folder-outline"></i>
                            <span className="text-muted">Concept</span>
                          </div>
                        </a>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                  
                  </Col>
                  </Row>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tickets
          