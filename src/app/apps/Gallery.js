import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
{
  src: require("../../assets/images/samples/1280x768/1.jpg"),
  width: 4,
  height: 3
},
{
  src: require("../../assets/images/samples/1280x768/2.jpg"),
  width: 1,
  height: 1
},
{
  src: require("../../assets/images/samples/1280x768/3.jpg"),
  width: 3,
  height: 4
},
{
  src: require("../../assets/images/samples/1280x768/4.jpg"),
  width: 3,
  height: 4
},
{
  src: require("../../assets/images/samples/1280x768/5.jpg"),
  width: 3,
  height: 4
},
{
  src: require("../../assets/images/samples/1280x768/6.jpg"),
  width: 4,
  height: 3
},
{
  src: require("../../assets/images/samples/1280x768/7.jpg"),
  width: 3,
  height: 4
},
{
  src: require("../../assets/images/samples/1280x768/8.jpg"),
  width: 4,
  height: 3
},
{
  src: require("../../assets/images/samples/1280x768/9.jpg"),
  width: 4,
  height: 3
},
{
  src: require("../../assets/images/samples/1280x768/10.jpg"),
  width: 3,
  height: 4
},
{
  src: require("../../assets/images/samples/1280x768/11.jpg"),
  width: 4,
  height: 3
},
{
  src: require("../../assets/images/samples/1280x768/12.jpg"),
  width: 3,
  height: 4
},
{
  src: require("../../assets/images/samples/1280x768/13.jpg"),
  width: 4,
  height: 3
},
{
  src: require("../../assets/images/samples/1280x768/14.jpg"),
  width: 3,
  height: 4
},
{
  src: require("../../assets/images/samples/1280x768/15.jpg"),
  width: 4,
  height: 3
}
];

export class GalleryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      viewerIsOpen: false
    };
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  openLightbox(event, { photo, index }) {
    this.setState({
      currentImage: index,
      viewerIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    });
  }
  
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Gallery </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={evt =>evt.preventDefault()}>Apps</a></li>
              <li className="breadcrumb-item active" aria-current="page">Gallery</li>
            </ol>
          </nav>
        </div>
        <div className="row grid-margin">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">light Gallery</h4>
                <p className="card-text"> Click on any image to open in lightbox gallery </p>
                <Gallery photos={photos} onClick={this.openLightbox} />
                  <ModalGateway>
                    {this.state.viewerIsOpen ? (
                      <Modal onClose={this.closeLightbox}>
                        <Carousel
                          currentIndex={this.state.currentImage}
                          views={photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                          }))}
                        />
                      </Modal>
                    ) : null}
                  </ModalGateway>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default GalleryPage
