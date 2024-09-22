import React from 'react';
import { Container, Row, Col, Card, Table, Button, Pagination } from 'react-bootstrap';
import Navbar from '../LoginRegistarationComponents/Navbar';
import AsideBar from './AsideBar';

const InvoiceDashboard = () => {
  // Dummy Data for Invoices



  const invoices = [
    { id: '#254684', courseName: 'Create a Design System in Figma', date: '29 Aug 2021', paymentMethod: 'Mastercard', amount: '$3,999', status: 'Paid' },
    { id: '#125464', courseName: 'Sketch from A to Z: for app designer', date: '26 Aug 2021', paymentMethod: 'PayPal', amount: '$4,201', status: 'Paid' },
    { id: '#123546', courseName: 'The Complete Web Development in python', date: '18 July 2021', paymentMethod: 'PayPal', amount: '$1,032', status: 'Pending' },
    { id: '#1235698', courseName: 'Deep Learning with React-Native', date: '09 July 2021', paymentMethod: 'Mastercard', amount: '$6,548', status: 'Paid' },
    { id: '#132456', courseName: 'Microsoft Excel - Excel from Beginner to Advanced', date: '21 June 2021', paymentMethod: 'PayPal', amount: '$2,546', status: 'Pending' },
    { id: '#145623', courseName: 'Twitter Marketing & Twitter Ads For Beginners', date: '05 June 2021', paymentMethod: 'Mastercard', amount: '$4,258', status: 'Cancel' },
    { id: '#145632', courseName: 'The Complete Digital Marketing Course - 12 Courses in 1', date: '15 April 2021', paymentMethod: 'PayPal', amount: '$854', status: 'Pending' },
    { id: '#165423', courseName: 'Create a Design System in Figma', date: '02 Jan 2021', paymentMethod: 'Mastercard', amount: '$965', status: 'Paid' },
  ];

  const totalSales = 899.95;
  const toBePaid = 750.35;
  const lifetimeEarnings = 4882.65;

  return (
    <>
    <Navbar/>
    <AsideBar/>
    <div className='Box-margin'>
      <div className='m-3'>
      <Container fluid className="p-4">
      {/* Earnings Summary Section */}
      <Row className="mb-4">
        <Col lg={4} md={6} sm={12} className="mb-3">
          <Card className="shadow-sm">
            <Card.Body>
              <h5>Sales this month</h5>
              <h3 className="text-primary">${totalSales}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-3">
          <Card className="shadow-sm">
            <Card.Body>
              <h5>To be paid</h5>
              <h3 className="text-secondary">${toBePaid}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-3">
          <Card className="shadow-sm">
            <Card.Body>
              <h5>Lifetime Earnings</h5>
              <h3 className="text-warning">${lifetimeEarnings}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Invoice History Table Section */}
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h5>Invoice History</h5>
              <Table responsive bordered hover className="mt-4">
                <thead className="thead-dark">
                  <tr>
                    <th>Invoice ID</th>
                    <th>Course Name</th>
                    <th>Date</th>
                    <th>Payment Method</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice, index) => (
                    <tr key={index}>
                      <td>{invoice.id}</td>
                      <td>{invoice.courseName}</td>
                      <td>{invoice.date}</td>
                      <td>{invoice.paymentMethod}</td>
                      <td>{invoice.amount}</td>
                      <td>
                        <span
                          className={`badge ${
                            invoice.status === 'Paid'
                              ? 'bg-success'
                              : invoice.status === 'Pending'
                              ? 'bg-warning'
                              : 'bg-danger'
                          }`}
                        >
                          {invoice.status}
                        </span>
                      </td>
                      <td>
                        <Button variant="outline-primary" size="sm">
                          <i className="fas fa-download"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* Pagination */}
              <Pagination className="justify-content-end">
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </div>
    </div>
    
    </>
  );
};

export default InvoiceDashboard;
