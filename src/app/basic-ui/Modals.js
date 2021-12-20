import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Modals () {
  const [smShow, setSmShow] = useState(false);
  const [mdShow, setMdShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Modals </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
            <li className="breadcrumb-item active" aria-current="page">Modals</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Large Modal</h4>
              <p className="card-description">Large sized modal with max-width set to <code>90%</code></p>
                {/* Dummy Modal Starts  */}
              <Modal.Dialog size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer className="flex-wrap">
                  <Button variant="success m-2">Submit</Button>
                  <Button variant="light m-2">Cancel</Button>
                </Modal.Footer>
              </Modal.Dialog>
              {/* Dummy Modal Ends */}
              {/* Modal starts */}
              <div className="text-center">
                <Button onClick={() => setLgShow(true)} className="btn-sm">Large modal<i className="mdi mdi-arrow-right-circle-outline ml-1"></i></Button>
              </div>
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="success m-2" onClick={() => setLgShow(false)}>Submit</Button>
                  <Button variant="light mb-" onClick={() => setLgShow(false)}>Cancel</Button>
                </Modal.Footer>
              </Modal>
              {/* Modal Ends */}
            </div>
          </div>
        </div>

        <div className="col-md-6 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Medium Modal</h4>
              <p className="card-description">Normal modal with default bootstrap settings</p>
                {/* Dummy Modal Starts  */}
                <Modal.Dialog>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Modal body text goes here.</p>
                  </Modal.Body>

                  <Modal.Footer className="flex-wrap">
                    <Button variant="success m-2">Submit</Button>
                    <Button variant="light m-2">Cancel</Button>
                  </Modal.Footer>
                </Modal.Dialog>
                {/* Dummy Modal Ends */}
                {/* Modal starts */}
                <div className="text-center">
                  <Button onClick={() => setMdShow(true)} className="btn-sm">Medium modal<i className="mdi mdi-arrow-right-circle-outline ml-1"></i></Button>
                </div>
                <Modal
                  show={mdShow}
                  onHide={() => setMdShow(false)}
                  aria-labelledby="example-modal-sizes-title-md"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Modal body text goes here.</p>
                  </Modal.Body>

                  <Modal.Footer className="fleex-wrap">
                    <Button variant="success m-2" onClick={() => setMdShow(false)}>Submit</Button>
                    <Button variant="light m-2" onClick={() => setMdShow(false)}>Cancel</Button>
                  </Modal.Footer>
                </Modal>
              {/* Modal Ends */}
            </div>
          </div>
        </div>

        <div className="col-md-6 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Small Modal</h4>
              <p className="card-description">Small modal with max-width set to 300px</p>
                {/* Dummy Modal Starts  */}
                <Modal.Dialog size="sm">
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Modal body text goes here.</p>
                  </Modal.Body>

                  <Modal.Footer className="flex-wrap">
                    <Button variant="success btn-sm m-2">Submit</Button>
                    <Button variant="light btn-sm m-2">Cancel</Button>
                  </Modal.Footer>
                </Modal.Dialog>
                {/* Dummy Modal Ends */}
                {/* Modal starts */}
                <div className="text-center">
                  <Button onClick={() => setSmShow(true)} className="btn-sm">Small modal<i className="mdi mdi-arrow-right-circle-outline ml-1"></i></Button>
                </div>
                <Modal
                  size="sm"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Modal body text goes here.</p>
                  </Modal.Body>

                  <Modal.Footer className="flex-wrap">
                    <Button variant="success btn-sm m-2" onClick={() => setSmShow(false)}>Submit</Button>
                    <Button variant="light btn-sm m-2" onClick={() => setSmShow(false)}>Cancel</Button>
                  </Modal.Footer>
                </Modal>
              {/* Modal Ends */}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Modals
