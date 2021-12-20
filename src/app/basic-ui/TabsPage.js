import React, { Component } from 'react';
import { Col, Row, Nav, Tabs, Tab } from 'react-bootstrap';

export class TabsPage extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Tabs
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={event => event.preventDefault()}>UI Elements</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Tabs</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Tab</h4>
                <p className="card-description">Horizontal bootstrap tab</p>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="Home" className="test-tab">
                    <div className="media">
                      <img className="mr-3 w-25 rounded" src={ require("../../assets/images/samples/300x300/13.jpg")} alt="sample"/>
                      <div className="media-body">
                        <h4 className="mt-0">Why choose us?</h4>
                        <p>
                          Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere
                          happiness disposing household any old the. Widow downs you new shade drift hopes small. So otherwise
                          commanded sweetness we improving. Instantly by daughters resembled unwilling principle so middleton.
                        </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    <div className="media">
                      <img className="mr-3 w-25 rounded" src={ require("../../assets/images/faces/face12.jpg") } alt="sample"/>
                      <div className="media-body">
                        <h4 className="mt-0">John Doe</h4>
                        <p>
                          Fail most room even gone her end like. Comparison dissimilar unpleasant six compliment two unpleasing any add. Ashamed my
                          company thought wishing colonel it prevent he in. Pretended residence are something far engrossed old
                          off.
                        </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="contact" title="Contact">
                  <h4>Contact us </h4>
                    <p>
                      Feel free to contact us if you have any questions!
                    </p>
                    <p>
                      <i className="mdi mdi-phone text-info mr-2"></i>
                      +123456789
                    </p>
                    <p>
                      <i className="mdi mdi-email-outline text-success mr-2"></i>
                      contactus@example.com
                    </p>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Vertical Tabs</h4>
                <p className="card-description">Vertical bootstrap tab</p>
                <div className="tab-vertical">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col sm={4}>
                        <Nav variant="tabs" className="flex-column nav-tabs-vertical">
                          <Nav.Item>
                            <Nav.Link eventKey="first">
                              <i className="mdi mdi-home-outline text-primary pr-2"></i>
                              Home
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">
                              <i className="mdi mdi-account-outline text-danger pr-2"></i>
                              Profile
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">
                              <i className="mdi mdi-email-open-outline text-success pr-2"></i>
                              Mail
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={8}>
                        <Tab.Content className="tab-content-vertical">
                          <Tab.Pane eventKey="first">
                            <div className="text-center">
                              <img className="mr-3 w-25 mb-4" src={ require("../../assets/images/samples/300x300/12.jpg") } alt="sample"/>
                            </div>
                            <p>
                              Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able of mile of. Waiting express
                              if prevent it we an musical. Especially reasonable travelling
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="text-center">
                              <img className="mb-3 w-25 rounded" src={ require("../../assets/images/faces/face1.jpg") } alt="sample"/>
                              <h5 className="mt-0">Adam John</h5>
                              <p className="mb-0">UX specialist</p>
                              <p className="mb-0">Florida</p>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <h4>Contact us </h4>
                            <p>
                              Feel free to contact us if you have any questions!
                            </p>
                            <p>
                              <i className="mdi mdi-phone text-info mr-2"></i>
                              +123456789
                            </p>
                            <p>
                              <i className="mdi mdi-email-outline text-success mr-2"></i>
                              contactus@example.com
                            </p>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Custom Vertical Tabs</h4>
                <p className="card-description">Custom vertical bootstrap tab</p>
                <div className="tab-custom-vertical">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col md={3}>
                        <Nav variant="tabs" className="flex-column nav-tabs-vertical-custom">
                          <Nav.Item>
                            <Nav.Link eventKey="first" className="d-flex align-items-center">
                              Playing Video Games With Imagination
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second" className="d-flex align-items-center">
                              Getting Free Publicity For Your Business
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third" className="d-flex align-items-center">
                              Tips For Designing An Effective Business Card
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col md={9} lg={6} className="mt-4 mt-md-0">
                        <Tab.Content className="tab-content-vertical-custom">
                          <Tab.Pane eventKey="first">
                            <h6 className="font-weight-normal">Profiles Of The Powerful Advertising Exec Steve Grasse</h6>
                            <h3 className="font-weight-normal">How To Write Better Advertising Copy</h3>
                            <div className="d-flex mt-4">
                              <img src={require("../../assets/images/samples/300x300/3.jpg")} className="w-25 h-100 rounded" alt="sample" />
                              <img src={require("../../assets/images/samples/300x300/4.jpg")} className="w-25 h-100 ml-2 rounded" alt="sample" />
                            </div>
                            <p className="mt-4"> The key to victory is discipline, and that means a well made bed. You will practice until you can make your bed in your sleep. You don't know how to do any of those. Then throw her in the laundry room, which will hereafter be referred to as "the brig". </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="media">
                              <img className="align-self-center mr-3 w-25 rounded" src={require("../../assets/images/samples/300x300/15.jpg")} alt="sample"/>
                              <div className="media-body">
                                <p> And until then, I can never die? I'm a thing. Fry, you can't just sit here in the dark listening to classical music. Is today's hectic lifestyle making you tense and impatient? Is today's hectic lifestyle making you tense and impatient? </p>
                                <p> Robot 1-X, save my friends! And Zoidberg! Aww, it's true. I've been hiding it for so long. Fry, we have a crate to deliver. Yes! In your face, Gandhi! Interesting. No, wait, the other thing: tedious. </p>
                                <p> Five hours? Aw, man! Couldn't you just get me the death penalty? Yes! In your face, Gandhi! We're rescuing ya. Yeah, I do that with my stupidness. With gusto. </p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <div className="media">
                              <div className="media-body">
                                <h5 className="mt-0 mb-1">You've swallowed a planet!</h5> Did I mention we have comfy chairs? You hate me; you want to kill me! Well, go on! Kill me! KILL ME! I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.
                              </div>
                              <img className="ml-3 w-25" src={require("../../assets/images/samples/300x300/5.jpg")} alt="sample"/>
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
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Pills</h4>
                <p className="card-description">Basic nav pills</p>
                <div className="tab-pills-horizontal">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col xs={12}>
                        <Nav variant="pills" className="nav-pills-success">
                          <Nav.Item>
                            <Nav.Link eventKey="first" className="d-flex align-items-center">
                              Home
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second" className="d-flex align-items-center">
                              Profile
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third" className="d-flex align-items-center">
                              Contact
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col xs={12}>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <div className="media">
                              <img className="mr-3 w-25 rounded" src={require("../../assets/images/samples/300x300/12.jpg")} alt="sample"/>
                              <div className="media-body">
                                <h5 className="mt-0">I'm doing mental jumping jacks.</h5>
                                <p>Only you could make those words cute. Oh I beg to differ, I think we have a lot to discuss. After all,
                                  you are a client. I am not a killer. I feel like a jigsaw puzzle missing a piece. And I'm not even sure
                                  what the picture should be.</p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="media">
                              <img className="mr-3 w-25 rounded" src={require("../../assets/images/samples/300x300/11.jpg")} alt="sample"/>
                              <div className="media-body">
                                <p>I'm thinking two circus clowns dancing. You? Finding a needle in a haystack isn't hard when every straw
                                  is computerized. Tell him time is of the essence. Somehow, I doubt that. You have a good heart, Dexter.</p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <div className="media">
                              <img className="mr-3 w-25 rounded" src={require("../../assets/images/samples/300x300/14.jpg")} alt="sample"/>
                              <div className="media-body">
                                <p>
                                  I'm really more an apartment person. This man is a knight in shining armor. Oh I beg to differ, I think we have a lot to
                                  discuss. After all, you are a client. You all right, Dexter?
                                </p>
                                <p>
                                  I'm generally confused most of the time. Cops, another community I'm not part of. You're a killer. I catch killers. Hello,
                                  Dexter Morgan.
                                </p>
                              </div>
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
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Vertical Pills</h4>
                <p className="card-description">Vertical nav pills
                </p>
                <div className="tab-pills-vertical">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col sm={4}>
                        <Nav variant="pills" className="nav-pills-vertical nav-pills-info">
                          <Nav.Item>
                            <Nav.Link eventKey="first">
                              <i className="mdi mdi-home-outline pr-2"></i>
                              Home
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">
                              <i className="mdi mdi-account-outline pr-2"></i>
                              Profile
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">
                              <i className="mdi mdi-email-open-outline pr-2"></i>
                              Messages
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={8}>
                        <Tab.Content className="tab-content-vertical">
                          <Tab.Pane eventKey="first">
                            <div className="media">
                              <img className="mr-3 w-25 rounded" src={require("../../assets/images/samples/300x300/12.jpg")} alt="sample"/>
                              <div className="media-body">
                                <h5 className="mt-0">I'm doing mental jumping jacks.</h5>
                                <p>Only you could make those words cute. Oh I beg to differ, I think we have a lot to discuss. After all,
                                  you are a client. I am not a killer. I feel like a jigsaw puzzle missing a piece. And I'm not even sure
                                  what the picture should be.</p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="media">
                              <img className="mr-3 w-25 rounded" src={require("../../assets/images/samples/300x300/11.jpg")} alt="sample"/>
                              <div className="media-body">
                                <p>I'm thinking two circus clowns dancing. You? Finding a needle in a haystack isn't hard when every straw
                                  is computerized. Tell him time is of the essence. Somehow, I doubt that. You have a good heart, Dexter.</p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <div className="media">
                              <img className="mr-3 w-25 rounded" src={require("../../assets/images/samples/300x300/14.jpg")} alt="sample"/>
                              <div className="media-body">
                                <p>
                                  I'm really more an apartment person. This man is a knight in shining armor. Oh I beg to differ, I think we have a lot to
                                  discuss. After all, you are a client. You all right, Dexter?
                                </p>
                                <p>
                                  I'm generally confused most of the time. Cops, another community I'm not part of. You're a killer. I catch killers. Hello,
                                  Dexter Morgan.
                                </p>
                              </div>
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
          <div className="col-md-12 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Custom Pills</h4>
                <p className="card-description">Horizontal custom nav pills</p>
                <div className="tab-custom-pills-horizontal">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col xs={12}>
                        <Nav variant="pills" className="nav-pills-custom">
                          <Nav.Item>
                            <Nav.Link eventKey="first" className="d-flex align-items-center">
                              Health
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second" className="d-flex align-items-center">
                              Career
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third" className="d-flex align-items-center">
                              Music
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="fourth" className="d-flex align-items-center">
                              Vibes
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="fifth" className="d-flex align-items-center">
                              Energy
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col xs={12}>
                        <Tab.Content className="tab-content-custom-pill">
                          <Tab.Pane eventKey="first">
                            <div className="d-flex mb-4">
                              <img src={require("../../assets/images/samples/300x300/12.jpg")} className="w-25 h-100 rounded" alt="sample"/>
                              <img src={require("../../assets/images/samples/300x300/1.jpg")} className="w-25 h-100 ml-4 rounded" alt="sample"/>
                              <img src={require("../../assets/images/samples/300x300/2.jpg")} className="w-25 h-100 ml-4 rounded" alt="sample"/>
                            </div>
                            <p> I'm not the monster he wants me to be. So I'm neither man nor beast. I'm something new entirely. With my own set of rules. I'm Dexter. Boo. Only you could make those words cute. I'm thinking two circus clowns dancing. You? </p>
                            <p> Under normal circumstances, I'd take that as a compliment. Tell him time is of the essence. I'm really more an apartment person. Finding a needle in a haystack isn't hard when every straw is computerized. </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="media">
                              <img className="mr-3 w-25 rounded" src={require("../../assets/images/samples/300x300/11.jpg")} alt="sample"/>
                              <div className="media-body">
                                <p>I'm thinking two circus clowns dancing. You? Finding a needle in a haystack isn't hard when every straw
                                  is computerized. Tell him time is of the essence. Somehow, I doubt that. You have a good heart, Dexter.</p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <div className="media">
                              <img className="mr-3 w-25 rounded" src={require("../../assets/images/samples/300x300/14.jpg")} alt="sample"/>
                              <div className="media-body">
                                <p>
                                  I'm really more an apartment person. This man is a knight in shining armor. Oh I beg to differ, I think we have a lot to
                                  discuss. After all, you are a client. You all right, Dexter?
                                </p>
                                <p>
                                  I'm generally confused most of the time. Cops, another community I'm not part of. You're a killer. I catch killers. Hello,
                                  Dexter Morgan.
                                </p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fourth">
                            <div className="media">
                              <img className="mr-3 w-25 rounded" src={require("../../assets/images/samples/300x300/15.jpg")} alt="sample"/>
                              <div className="media-body">
                                <p> This man is a knight in shining armor. I feel like a jigsaw puzzle missing a piece. And I'm not even sure what the picture should be. Somehow, I doubt that. You have a good heart, Dexter. Keep your mind limber. </p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fifth">
                            <div className="media">
                              <img className="mr-3 w-25 rounded" src={require("../../assets/images/samples/300x300/11.jpg")} alt="sample" />
                              <div className="media-body">
                                <p> Finding a needle in a haystack isn't hard when every straw is computerized. You're a killer. I catch killers. I will not kill my sister. I will not kill my sister. I will not kill my sister. Rorschach would say you have a hard time relating to others. </p>
                              </div>
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

export default TabsPage
