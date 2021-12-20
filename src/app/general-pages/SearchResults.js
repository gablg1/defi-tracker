import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
export class SearchResults extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Search results
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>General pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Search results</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <form action="#">
                      <Form.Group className="d-flex">
                        <Form.Control type="text" placeholder="Search Here" className="h-auto" defaultValue="Bootstrapdash" />
                        <Button variant="primary" type="submit" className="ml-3"> Search </Button>
                      </Form.Group>
                    </form>
                  </div>
                  <div className="col-12 mb-5">
                    <h2>Search Result For<u className="ml-2">"Bootstrapdash"</u></h2>
                    <p className="text-muted">About 12,100 results (0.52 seconds)</p>
                  </div>
                  <div className="col-12 results">
                    <div className="pt-4 border-bottom">
                      <a className="d-block h4" href="!#" onClick={event => event.preventDefault()}>Bootstrapdash</a>
                      <a className="page-url text-primary" href="!#" onClick={event => event.preventDefault()}>https://www.bootstrapdash.com/</a>
                      <p className="page-description mt-1 w-75 text-muted">Bootstrapdash gives you the most beautiful, free and premium bootstrap admin dashboard templates and control panel themes based on Bootstrap 3 and 4.</p>
                    </div>
                  </div>
                  <div className="col-12 results">
                    <div className="pt-4 border-bottom">
                      <a className="d-block h4" href="!#" onClick={event => event.preventDefault()}>Bootstrapdash Team – Medium</a>
                      <a className="page-url text-primary" href="!#" onClick={event => event.preventDefault()}>https://medium.com/@bootstrapdash</a>
                      <p className="page-description mt-1 w-75 text-muted">Read writing from Bootstrapdash Team on Medium. We design and develop awesome admin dashboard templates with Bootstrap, so you can kick-start and speed up your development. www.bootstrapdash.com.</p>
                    </div>
                  </div>
                  <div className="col-12 results">
                    <div className="pt-4 border-bottom">
                      <a className="d-block h4" href="!#" onClick={event => event.preventDefault()}>Bootstrapdash · GitHub</a>
                      <a className="page-url text-primary" href="!#" onClick={event => event.preventDefault()}>https://github.com/bootstrapdash</a>
                      <p className="page-description mt-1 w-75 text-muted">Bootstrapdash has 1 repository available. Follow their code on GitHub.</p>
                    </div>
                  </div>
                  <div className="col-12 results">
                    <div className="pt-4 border-bottom">
                      <a className="d-block h4" href="!#" onClick={event => event.preventDefault()}>bootstrapdash.com - Home | Facebook</a>
                      <a className="page-url text-primary" href="!#" onClick={event => event.preventDefault()}>https://www.facebook.com/bootstrapdash</a>
                      <p className="page-description mt-1 w-75 text-muted">Bootstrapdash.com. 9 likes · 4 talking about this. Clean, customisable admin dashboard template themes / UI WebApp Kits with a huge collection of...</p>
                    </div>
                  </div>
                  <div className="col-12 results">
                    <div className="pt-4 border-bottom">
                      <a className="d-block h4" href="!#" onClick={event => event.preventDefault()}>Bootstrapdash Team – Hacker Noon</a>
                      <a className="page-url text-primary" href="!#" onClick={event => event.preventDefault()}>https://hackernoon.com/@bootstrapdash</a>
                      <p className="page-description mt-1 w-75 text-muted">Oct 9, 2017 - Read writing from Bootstrapdash Team in Hacker Noon. We design and develop awesome admin dashboard templates with Bootstrap, so you can kick-start and speed up your development. www.bootstrapdash.com.</p>
                    </div>
                  </div>
                  <div className="col-12 results">
                    <div className="pt-4 border-bottom">
                      <a className="d-block h4" href="!#" onClick={event => event.preventDefault()}>Bootstrapdash | Crunchbase</a>
                      <a className="page-url text-primary" href="!#" onClick={event => event.preventDefault()}>https://www.crunchbase.com/organization/bootstrapdash</a>
                      <p className="page-description mt-1 w-75 text-muted">Bootstrapdash creates quality admin templates that are based on Bootstrap, the most popular front end development framework.</p>
                    </div>
                  </div>
                  <div className="col-12 results">
                    <div className="pt-4 border-bottom">
                      <a className="d-block h4" href="!#" onClick={event => event.preventDefault()}>Bootstrapdash.com (@bootstrapdash) | Twitter</a>
                      <a className="page-url text-primary" href="!#" onClick={event => event.preventDefault()}>https://twitter.com/@bootstrapdash</a>
                      <p className="page-description mt-1 w-75 text-muted">The latest Tweets from bootstrapdash.com (@bootstrapdash). Clean, customisable admin dashboard template themes / UI WebApp Kits with a huge collection of pre-built widgets and plugins.</p>
                    </div>
                  </div>
                  <div className="col-12 results">
                    <div className="pt-4 border-bottom">
                      <a className="d-block h4" href="!#" onClick={event => event.preventDefault()}>Bootstrapdash on Behance</a>
                      <a className="page-url text-primary" href="!#">https://www.behance.net/bootstrapdash</a>
                      <p className="page-description mt-1 w-75 text-muted">Awesome Bootstrap Admin Dashboard Templates. For Faster, Easier Web Applications Development. Clean, customizable admin dashboard template theme / UI WebApp Kit with a huge collection of pre-built widgets and plugins. Design and build modern, robust, user-friendly web applications real fast!</p>
                    </div>
                  </div>
                  <nav className="col-12" aria-label="Page navigation">
                    <ul className="pagination mt-5">
                      <li className="page-item"><a className="page-link" href="!#" onClick={event => event.preventDefault()}>Previous</a></li>
                      <li className="page-item  active"><a className="page-link" href="!#" onClick={event => event.preventDefault()}>1</a></li>
                      <li className="page-item"><a className="page-link" href="!#" onClick={event => event.preventDefault()}>2</a></li>
                      <li className="page-item"><a className="page-link" href="!#" onClick={event => event.preventDefault()}>3</a></li>
                      <li className="page-item"><a className="page-link" href="!#" onClick={event => event.preventDefault()}>Next</a></li>
                    </ul>
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

export default SearchResults
