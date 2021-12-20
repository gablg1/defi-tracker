import React, { Component } from 'react';
import Slider from "react-slick";

export class Carousel extends Component {
  render() {
    var settings1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    var settings2 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    var settings3 = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    var settings4 = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    var settings5 = {
      dots: true,
      rtl: true,
      autoplay: true,
      autoplaySpeed: 1000,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    var settings6 = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Carousel
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Carousel</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic carousel</h4>
                <Slider {...settings1}>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_1.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_2.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_12.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Carousel with captions</h4>
                <Slider {...settings1}>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_4.jpg")} alt="carousel item" className="img-fluid"/>
                    <div className="card-img-overlay d-flex">
                      <div className="mt-auto text-center w-100">
                        <h3>First Slide Label</h3>
                        <h6 className="card-text mb-4 font-weight-normal">Nulla vitae elit libero, a pharetra augue mollis interdum.</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_5.jpg")} alt="carousel item" className="img-fluid"/>
                    <div className="card-img-overlay d-flex">
                      <div className="mt-auto text-center w-100">
                        <h3>Second Slide Label</h3>
                        <h6 className="card-text mb-4 font-weight-normal">Nulla vitae elit libero, a pharetra augue mollis interdum.</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_6.jpg")} alt="carousel item" className="img-fluid"/>
                    <div className="card-img-overlay d-flex">
                      <div className="mt-auto text-center w-100">
                        <h3>Third Slide Label</h3>
                        <h6 className="card-text mb-4 font-weight-normal">Nulla vitae elit libero, a pharetra augue mollis interdum.</h6>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="row grid-margin">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Loop</h4>
                <Slider {...settings2}>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_7.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_8.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_9.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_10.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_11.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_12.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_2.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="row grid-margin">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">non-Loop</h4>
                <Slider {...settings3}>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_3.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_4.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_5.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_6.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_7.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_8.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_9.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="row grid-margin">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Lazy load</h4>
                <Slider {...settings4}>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_7.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_8.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_9.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_10.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_11.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_12.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_2.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="row grid-margin">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Right to left</h4>
                <Slider {...settings5}>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_3.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_4.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_5.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_6.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_7.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_8.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_9.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Auto Play</h4>
                <Slider {...settings6}>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_7.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_8.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_9.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_10.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_11.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_12.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src={require("../../assets/images/carousel/banner_2.jpg")} alt="carousel item" className="img-fluid"/>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel
