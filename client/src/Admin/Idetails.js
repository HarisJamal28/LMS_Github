import React from 'react';
import { Container, Row, Col, Card, Table, Badge, Pagination } from 'react-bootstrap';
import Navbar from '../LoginRegistarationComponents/Navbar';
import AsideBar from './AsideBar';
import Anavbar from '../Admin/AnavBar';


const InstructorDetail = () => {
  // Dummy Data
  const courses = [
    { name: 'Building Scalable APIs with GraphQL', enrolled: 472, status: 'Live' },
    { name: 'Graphic Design Masterclass', enrolled: 254, status: 'Live' },
    { name: 'Learn Invision', enrolled: 0, status: 'Pending' },
    { name: 'Deep Learning with React Native', enrolled: 98, status: 'Live' },
    { name: 'Bootstrap 5 From Scratch', enrolled: 39, status: 'Cancelled' }
  ];

  const reviews = [
    { studentName: 'Lori Stevens', courseName: 'Building Scalable APIs with GraphQL', rating: 5 },
    { studentName: 'Carolyn Ortiz', courseName: 'Graphic Design Masterclass', rating: 5 },
    { studentName: 'Dennis Barrett', courseName: 'Deep Learning with React Native', rating: 4.5 },
    { studentName: 'Billy Vasquez', courseName: 'Bootstrap 5 From Scratch', rating: 4.5 },
    { studentName: 'Jacqueline Miller', courseName: 'Learn Invision', rating: 5 }
  ];

  return (
    <>

    <AsideBar/>
    <div className='Box-margin d-flex flex-column'>
    <Anavbar/>

    <div className='m-3'>
<Container fluid className="p-4 pt-0">
      <Row>
        <Col xs={12}>
          <h2>Instructor Detail</h2>
        </Col>
      </Row>

      {/* Personal Information */}
      <Row className="mt-4">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Instructor"
                    className="img-fluid rounded-circle mb-3"
                  />
                </Col>
                <Col md={9}>
                  <p><strong>Title:</strong> Mr.</p>
                  <p><strong>Full Name:</strong> Louis Ferguson</p>
                  <p><strong>Username:</strong> Lousfer</p>
                  <p><strong>Email:</strong> example@gmail.com</p>
                  <p><strong>Mobile Number:</strong> +123 456 789 10</p>
                  <p><strong>Location:</strong> California</p>
                  <p><strong>Joining Date:</strong> 29 Aug 2019</p>
                  <p><strong>Education:</strong> Bachelor in Computer Graphics, Masters in Computer Graphics</p>
                  <p><strong>Description:</strong> Aliquam erat volutpat. Curabitur sit amet ligula a nibh volutpat
                    vehicula. Etiam nec lacinia lacus. Nam nec fringilla lacus.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Stats */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <h5>Active Students</h5>
              <h2>984</h2>
              <small className="text-success">+5.37% last 1 week</small>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h5>New Enrollment</h5>
              <h2>140</h2>
              <small className="text-success">+3.67% last 1 week</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Courses List */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Courses List</h5>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead className="thead-dark">
                  <tr>
                    <th>Course Name</th>
                    <th>Enrolled</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index}>
                      <td>{course.name}</td>
                      <td>{course.enrolled}</td>
                      <td>
                        {course.status === 'Live' && <Badge bg="success">Live</Badge>}
                        {course.status === 'Pending' && <Badge bg="warning">Pending</Badge>}
                        {course.status === 'Cancelled' && <Badge bg="danger">Cancelled</Badge>}
                      </td>
                      <td><a href="#" className="btn btn-primary btn-sm">View</a></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Pagination className="justify-content-end">
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Reviews */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>All Reviews</h5>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead className="thead-dark">
                  <tr>
                    <th>Student Name</th>
                    <th>Course Name</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review, index) => (
                    <tr key={index}>
                      <td>{review.studentName}</td>
                      <td>{review.courseName}</td>
                      <td>{'⭐'.repeat(Math.round(review.rating))}</td>
                      <td><a href="#" className="btn btn-primary btn-sm">View</a></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
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

export default InstructorDetail;
