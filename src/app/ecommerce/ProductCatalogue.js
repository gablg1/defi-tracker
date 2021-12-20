import React, { Component } from 'react'

export class ProductCatalogue extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="product-nav-wrapper row">
                  <div className="col-lg-4 col-md-5">
                    <ul className="nav product-filter-nav">
                      <li className="active"><a href="!#" onClick={event => event.preventDefault()}>BEST SELLERS</a></li>
                      <li><a href="!#" onClick={event => event.preventDefault()}>FEATURED</a></li>
                      <li><a href="!#" onClick={event => event.preventDefault()}>SALES</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-8 col-md-7 product-filter-options">
                    <ul className="account-user-info ml-auto">
                      <li><a href="!#" onClick={event => event.preventDefault()}>My Account</a></li>
                      <li><a href="!#" onClick={event => event.preventDefault()}>Wishlist</a></li>
                    </ul>
                    <ul className="account-user-link d-none d-lg-block">
                      <li><a href="!#" onClick={event => event.preventDefault()}>Login</a></li>
                      <li><a href="!#" onClick={event => event.preventDefault()}>Register</a></li>
                    </ul>
                    <ul className="account-user-actions">
                      <li><a href="!#" onClick={event => event.preventDefault()}><i className="mdi mdi-magnify"></i></a></li>
                      <li>
                        <a href="!#" onClick={event => event.preventDefault()}><i className="mdi mdi-cart"></i>
                          <div className="badge badge-pill badge-primary">0</div>
                        </a>
                      </li>
                      <li><a href="!#" onClick={event => event.preventDefault()}>$0.00</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row product-item-wrapper">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image12.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">Passion Chair</p>
                        <p className="product-price">$399.00</p>
                        <p className="product-actual-price">$499.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>M</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>L</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>XL</a></li>
                        </ul>
                        <p className="product-description">Product Dimensions: Length (13 Inches) Width (13Inches) & Height (30 Inches).</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image1.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">ASIAN Shoes Wonder</p>
                        <p className="product-price">$799.00</p>
                        <p className="product-actual-price">$899.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>8</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>9</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>10</a></li>
                        </ul>
                        <p className="product-description">Closure: Lace Up Colour: Grey</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image2.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">Headphones JBL</p>
                        <p className="product-price">$199.00</p>
                        <p className="product-actual-price">$99.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>S</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>M</a></li>
                        </ul>
                        <p className="product-description">Power Capability: 150mW Cable Length: 1.5 meter</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image3.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">Nike Runallday</p>
                        <p className="product-price">$745.00</p>
                        <p className="product-actual-price">$845.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>7</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>8</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>9</a></li>
                        </ul>
                        <p className="product-description">Material: Other<br /> Product Type: Sports Shoe</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image4.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">Puma shoe</p>
                        <p className="product-price">$799.00</p>
                        <p className="product-actual-price">$899.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>8</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>9</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>10</a></li>
                        </ul>
                        <p className="product-description">Material Type: Textile<br /> Lifestyle: Sports</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image5.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">Fastrack UV</p>
                        <p className="product-price">$129.00</p>
                        <p className="product-actual-price">$199.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>Black</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>Brown</a></li>
                        </ul>
                        <p className="product-description">Frame size: Lens Length = 16 cm<br /> Width = 8.1 cm,Height = 5.6 cm </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image6.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">Tryfeet Shoe</p>
                        <p className="product-price">$329.00</p>
                        <p className="product-actual-price">$499.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>M</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>L</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>XL</a></li>
                        </ul>
                        <p className="product-description">Product Dimensions: Length (13 Inches) Width (13Inches) & Height (30 Inches).</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image7.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">Jacques Lemans Watch</p>
                        <p className="product-price">$289.00</p>
                        <p className="product-actual-price">$499.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>M</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>L</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>XL</a></li>
                        </ul>
                        <p className="product-description">Product Dimensions: Length (13 Inches) Width (13Inches) & Height (30 Inches).</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image8.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">American Tourister</p>
                        <p className="product-price">$399.00</p>
                        <p className="product-actual-price">$499.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>M</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>L</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>XL</a></li>
                        </ul>
                        <p className="product-description">Product Dimensions: Length (13 Inches) Width (13Inches) & Height (30 Inches).</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image9.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">Women Handbag</p>
                        <p className="product-price">$299.00</p>
                        <p className="product-actual-price">$300.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>Black</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>Pink</a></li>
                        </ul>
                        <p className="product-description">Sole: Other<br /> Closure: Slip On</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image10.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">Plastic Wall Clock</p>
                        <p className="product-price">$99.00</p>
                        <p className="product-actual-price">$199.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>S</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>M</a></li>
                        </ul>
                        <p className="product-description">Dial Colour:Black<br /> Strap Colour:Brown </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="action-holder">
                          <div className="sale-badge bg-success">New</div>
                          <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                        </div>
                        <div className="product-img-outer">
                          <img className="product_image" src={ require("../../assets/images/product_images_2/thumb_image11.jpg") } alt="prduct" />
                        </div>
                        <p className="product-title">IPhone X</p>
                        <p className="product-price">$999.00</p>
                        <p className="product-actual-price">$1999.00</p>
                        <ul className="product-variation">
                          <li><a href="!#" onClick={event => event.preventDefault()}>128</a></li>
                          <li><a href="!#" onClick={event => event.preventDefault()}>256</a></li>
                        </ul>
                        <p className="product-description">5.8-inch Super Retina display<br /> Wireless charging</p>
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

export default ProductCatalogue
