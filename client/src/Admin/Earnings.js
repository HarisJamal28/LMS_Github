import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Pagination } from 'react-bootstrap';
import AsideBar from './AsideBar';
import Anavbar from '../Admin/AnavBar';
import axiosInstance from '../api/axiosConfig';

const InvoiceDashboard = () => {
  // Dummy Data for Invoices

  const [invoices, setInvoices] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [toBePaid, setToBePaid] = useState(0);
  const [lifetimeEarnings, setLifetimeEarnings] = useState(0);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axiosInstance.get('/api/invoices/AdminInvoices');
        setInvoices(response.data.invoices);

        const sales = response.data.invoices.reduce((acc, invoice) => acc + invoice.amount, 0);
        setTotalSales(sales);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  console.log(invoices)

  const markAsPaid = async (invoiceId) => {
    console.log('Updating invoice with ID:', invoiceId);
    try {
        const response = await axiosInstance.put('/api/invoices/payinvoice', { id: invoiceId });
        console.log('Response:', response);
        if (response.data.success) {
            setInvoices((prevInvoices) =>
                prevInvoices.map((invoice) =>
                    invoice._id === invoiceId ? { ...invoice, status: 'Paid' } : invoice
                )
            );
            alert('DONE');
        }
    } catch (error) {
        alert("Fail");
        console.error('Error updating invoice status:', error);
    }
};


  return (
    <>
    <AsideBar/>
    <div className='Box-margin d-flex flex-column'>
    <Anavbar />

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
                            <td>{invoice.invoiceNumber}</td>
                            <td>{invoice.courses.map(course => course.title).join(', ')}</td>
                            <td>{new Date(invoice.createdAt).toLocaleDateString()}</td>
                            <td>{invoice.paymentMethod}</td>
                            <td>${invoice.amount}</td>
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
                            <td className='d-flex gap-2 flex-column'>
                              <Button variant="outline-primary" size="sm">
                                <i className="fas fa-download"></i>
                              </Button>
                              <Button variant="outline-success" size="sm" onClick={() => markAsPaid(invoice._id)}>
                                <i className="fas fa-check"></i>
                              </Button>
                            </td>
                          </tr>
                        ))}
                </tbody>
              </Table>

              {/* <Pagination className="justify-content-end">
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
              </Pagination> */}
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
