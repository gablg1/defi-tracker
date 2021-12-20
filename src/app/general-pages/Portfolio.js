import React, { Component } from 'react'

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Portfolio
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>General pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="row portfolio-grid">
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/1.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Photography</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/2.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Lifestyle</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/3.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Tech Geeks</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/4.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Explore World</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/5.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Travel</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/6.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Colors</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/7.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Through Nature</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/8.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>World</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/9.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Cultures</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/10.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Habits</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/11.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Being yourself</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/12.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Nature</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/13.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Routines</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/14.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Life</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <figure className="effect-text-in">
                          <img src={require("../../assets/images/samples/300x300/15.jpg")} alt="portfolio"/>
                          <figcaption>
                            <h4>Vision</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
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

export default Portfolio
