import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Nav } from 'react-bootstrap';
import Navbar from '../LoginRegistarationComponents/Navbar';
import AsideBar from './AsideBar';
import Anavbar from '../Admin/AnavBar';

const AdminSettings = () => {
  // State for form inputs
  const [siteName, setSiteName] = useState('');
  const [siteCopyrights, setSiteCopyrights] = useState('');
  const [siteEmail, setSiteEmail] = useState('');
  const [siteDescription, setSiteDescription] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [supportEmail, setSupportEmail] = useState('');
  const [contactAddress, setContactAddress] = useState('');
  const [allowRegistration, setAllowRegistration] = useState('Enable');

  const handleUpdate = () => {
    // Perform update operation or API call
    alert('Settings updated successfully!');
  };

  return (
    <>
      {/* <Anavbar /> */}
      {/* <Navbar /> */}

      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        {/* Fixed Sidebar */}
        <AsideBar  />
          <Anavbar style={{position: 'fixed', top: 0, right: 0 }} />
        {/* Main content area */}
        <div className="flex-grow-1" style={{ marginLeft: '250px', padding: '20px'}}>
          <Container fluid className="p-4">
            <Row>
              {/* Sidebar Navigation */}
              <Col md={3}>
                <Card className="shadow-sm">
                  <Nav variant="pills" className="flex-column p-2">
                    <Nav.Item>
                      <Nav.Link active>Website Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>General Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>Notification Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>Account Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>Social Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>Email Settings</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card>
              </Col>

              {/* Website Settings Form */}
              <Col md={9}>
                <Card className="shadow-sm p-4">
                  <h5>Website Settings</h5>
                  <Form>
                    {/* Site Name */}
                    <Form.Group className="mb-3" controlId="siteName">
                      <Form.Label>Site Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Website Name"
                        value={siteName}
                        onChange={(e) => setSiteName(e.target.value)}
                      />
                    </Form.Group>

                    {/* Site Copyrights and Email */}
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="siteCopyrights">
                          <Form.Label>Site Copyrights</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Copyrights"
                            value={siteCopyrights}
                            onChange={(e) => setSiteCopyrights(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="siteEmail">
                          <Form.Label>Site Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Site Email"
                            value={siteEmail}
                            onChange={(e) => setSiteEmail(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Site Description */}
                    <Form.Group className="mb-3" controlId="siteDescription">
                      <Form.Label>Site Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter brief description"
                        value={siteDescription}
                        onChange={(e) => setSiteDescription(e.target.value)}
                      />
                    </Form.Group>

                    {/* Contact Phone and Support Email */}
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="contactPhone">
                          <Form.Label>Contact Phone</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Contact Phone"
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="supportEmail">
                          <Form.Label>Support Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Support Email"
                            value={supportEmail}
                            onChange={(e) => setSupportEmail(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Allow Registration */}
                    <Form.Group className="mb-3">
                      <Form.Label>Allow Registration</Form.Label>
                      <div>
                        <Form.Check
                          inline
                          label="Enable"
                          name="registrationOptions"
                          type="radio"
                          id="enableRegistration"
                          checked={allowRegistration === 'Enable'}
                          onChange={() => setAllowRegistration('Enable')}
                        />
                        <Form.Check
                          inline
                          label="Disable"
                          name="registrationOptions"
                          type="radio"
                          id="disableRegistration"
                          checked={allowRegistration === 'Disable'}
                          onChange={() => setAllowRegistration('Disable')}
                        />
                        <Form.Check
                          inline
                          label="On Request"
                          name="registrationOptions"
                          type="radio"
                          id="onRequestRegistration"
                          checked={allowRegistration === 'On Request'}
                          onChange={() => setAllowRegistration('On Request')}
                        />
                      </div>
                    </Form.Group>

                    {/* Contact Address */}
                    <Form.Group className="mb-3" controlId="contactAddress">
                      <Form.Label>Contact Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Enter Contact Address"
                        value={contactAddress}
                        onChange={(e) => setContactAddress(e.target.value)}
                      />
                    </Form.Group>

                    {/* Submit Button */}
                    <Button variant="primary" onClick={handleUpdate}>
                      Update
                    </Button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AdminSettings;
