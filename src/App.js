import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tabs, Tab, Form, Button, Image } from 'react-bootstrap';
import './App.css';
import berg from './berg.jpg';
import pris from './pris.jpg';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function App() {
  return (
    <Container fluid style={{ paddingLeft: '-10px', paddingRight: '-10px' }}>
      <Row className="my-4">
        <Col className="text-center">
          <h1>Contact Us</h1>
        </Col>
      </Row>
      <Tabs defaultActiveKey="new-york" id="office-tabs" className="mb-3" justify>
        <Tab eventKey="new-york" title="New York Office">
          <Row className="justify-content-center ml-3">
            <Col md={10}>
              <div className="contact-info p-4">
                <Row className="text-center">
                  <Col md={4} className="mb-4 mb-md-0">
                    <FaPhoneAlt className="contact-icon" />
                    <h5>Phone Number</h5>
                    <p>+569 (58) 3259-3256</p>
                    <p>+569 (58) 3259-3256</p>
                  </Col>
                  <Col md={4} className="mb-4 mb-md-0">
                    <FaEnvelope className="contact-icon" />
                    <h5>Email Address</h5>
                    <p>info@tronix.com</p>
                    <p>inside.24tronix.com</p>
                  </Col>
                  <Col md={4}>
                    <FaMapMarkerAlt className="contact-icon" />
                    <h5>Office Address</h5>
                    <p>25 Hilton Street, Miana</p>
                    <p>Frankfurt. DE</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="washington" title="Washington Office">
          <Row className="justify-content-center ml-3">
            <Col md={10}>
              <div className="contact-info p-4">
                <Row className="text-center">
                  <Col md={4} className="mb-4 mb-md-0">
                    <FaPhoneAlt className="contact-icon" />
                    <h5>Phone Number</h5>
                    <p>+1 (123) 456-7890</p>
                    <p>+1 (987) 654-3210</p>
                  </Col>
                  <Col md={4} className="mb-4 mb-md-0">
                    <FaEnvelope className="contact-icon" />
                    <h5>Email Address</h5>
                    <p>washington@tronix.com</p>
                    <p>inside.washington.24tronix.com</p>
                  </Col>
                  <Col md={4}>
                    <FaMapMarkerAlt className="contact-icon" />
                    <h5>Office Address</h5>
                    <p>789 Elm Street, Washington D.C.</p>
                    <p>USA</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="las-vegas" title="Las Vegas Office">
          <Row className="justify-content-center ml-3">
            <Col md={10}>
              <div className="contact-info p-4">
                <Row className="text-center">
                  <Col md={4} className="mb-4 mb-md-0">
                    <FaPhoneAlt className="contact-icon" />
                    <h5>Phone Number</h5>
                    <p>+1 (702) 555-1234</p>
                    <p>+1 (702) 555-5678</p>
                  </Col>
                  <Col md={4} className="mb-4 mb-md-0">
                    <FaEnvelope className="contact-icon" />
                    <h5>Email Address</h5>
                    <p>vegas@tronix.com</p>
                    <p>inside.vegas.24tronix.com</p>
                  </Col>
                  <Col md={4}>
                    <FaMapMarkerAlt className="contact-icon" />
                    <h5>Office Address</h5>
                    <p>456 Oak Avenue, Las Vegas</p>
                    <p>USA</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="california" title="California Office">
          <Row className="justify-content-center ml-3">
            <Col md={10}>
              <div className="contact-info p-4">
                <Row className="text-center">
                  <Col md={4} className="mb-4 mb-md-0">
                    <FaPhoneAlt className="contact-icon" />
                    <h5>Phone Number</h5>
                    <p>+1 (415) 123-4567</p>
                    <p>+1 (415) 987-6543</p>
                  </Col>
                  <Col md={4} className="mb-4 mb-md-0">
                    <FaEnvelope className="contact-icon" />
                    <h5>Email Address</h5>
                    <p>california@tronix.com</p>
                    <p>inside.california.24tronix.com</p>
                  </Col>
                  <Col md={4}>
                    <FaMapMarkerAlt className="contact-icon" />
                    <h5>Office Address</h5>
                    <p>123 Pacific Blvd, Los Angeles</p>
                    <p>USA</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Tab>
      </Tabs>
      <br/>
      <Row className="bg-light p-4 rounded">
        <Col md={6}>
          <h2>We'd love to hear from you.</h2>
          <p>
            At our IT solution company, we are committed to providing exceptional customer service and support.
            If you are experiencing technical difficulties or need assistance with one of our services,
          </p>
          <ul className="list-unstyled">
            <li><i className="fas fa-check-circle text-primary"></i> Client-oriented</li>
            <li><i className="fas fa-check-circle text-primary"></i> Competent</li>
            <li><i className="fas fa-check-circle text-primary"></i> Problem-solving</li>
            <li><i className="fas fa-check-circle text-primary"></i> Independent</li>
            <li><i className="fas fa-check-circle text-primary"></i> Results-driven</li>
            <li><i className="fas fa-check-circle text-primary"></i> Transparent</li>
          </ul>
        </Col>
        <Col md={6}>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control as="select">
                <option>Basic</option>
                <option>Technical Support</option>
                <option>Sales</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Message
            </Button>
          </Form>
        </Col>
      </Row>
      <div className="my-4"></div>
      <Row className="text-center">
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Image src={berg} roundedCircle className="img-fluid small-img" alt="Berg Devien" />
          <div className="ms-3">
            <h5>Berg Devien</h5>
            <p>Head of communications</p>
            <p>Email: <a href="mailto:berg@consulting.wp">berg@consulting.wp</a></p>
            <p>Skype: <a href="skype:berg.consulting">berg.consulting</a></p>
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Image src={pris} roundedCircle className="img-fluid small-img" alt="Priscilla Sorvino" />
          <div className="ms-3">
            <h5>Priscilla Sorvino</h5>
            <p>Head of communications</p>
            <p>Email: <a href="mailto:priscilla@consulting.wp">priscilla@consulting.wp</a></p>
            <p>Skype: <a href="skype:priscilla.consulting">priscilla.consulting</a></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
