import React, { Component } from 'react'

export class NewsGrid extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            News grid
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>General pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">News grid</li>
            </ol>
          </nav>
        </div>
        <div className="card-columns">
          <div className="card">
            <img className="card-img-top" src={require("../../assets/images/samples/300x300/3.jpg")} alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">Card title that wraps to a new line</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis quam, sequi dolorum excepturi repudiandae atque dignissimos voluptatum aperiam!</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={require("../../assets/images/samples/300x300/9.jpg")} alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">Card title that wraps to a new line</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam deleniti</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={require("../../assets/images/samples/300x300/5.jpg")} alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">Card title that wraps to a new line</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo omnis, nesciunt neque quisquam deserunt, fugiat quasi sint recusandae, ipsa architecto quos adipisci facilis necessitatibus sequi repellat mollitia, minus maxime porro. Asperiores necessitatibus pariatur, sunt accusamus cupiditate. Voluptates.</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={require("../../assets/images/samples/300x300/2.jpg")} alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">Card title that wraps to a new line</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum hic officia animi quod iure, vel aliquam quia recusandae accusantium quo impedit labore, eligendi ipsam, fugit tempora, explicabo deleniti minus iste!</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={require("../../assets/images/samples/300x300/8.jpg")} alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">Card title that wraps to a new line</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eaque similique veniam consequatur ipsum.</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={require("../../assets/images/samples/300x300/6.jpg")} alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">Card title that wraps to a new line</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nostrum et libero quasi obcaecati laborum cumque quos hic at commodi soluta, dolorum ea, repellat nulla fugit.</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={require("../../assets/images/samples/300x300/8.jpg")} alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">Card title that wraps to a new line</h4>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={require("../../assets/images/samples/300x300/10.jpg")} alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">Card title that wraps to a new line</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eum enim aliquam architecto modi?</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={require("../../assets/images/samples/300x300/3.jpg")} alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">Card title that wraps to a new line</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ratione nisi veniam numquam, commodi fugiat qui iste.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsGrid
