import React from 'react';
import { Container, Row, Col, Card, Table, Pagination, Form, ButtonGroup, Button, Navbar as BootstrapNavbar } from 'react-bootstrap';
import AsideBar from './AsideBar'; // Assuming this is a custom component with styles.
import Navbar from '../LoginRegistarationComponents/Navbar'; // Your custom Navbar
import Anavbar from '../Admin/AnavBar';


// Dummy Data for Reviews Table
const reviews = [
  { id: 1, studentName: 'Lori Stevens', courseName: 'Building Scalable APIs with GraphQL', rating: 5 },
  { id: 2, studentName: 'Carolyn Ortiz', courseName: 'Graphic Design Masterclass', rating: 5 },
  { id: 3, studentName: 'Dennis Barnett', courseName: 'JavaScript: Full Understanding', rating: 5 },
  { id: 4, studentName: 'Billy Vasquez', courseName: 'Time Management Mastery', rating: 4.5 },
  { id: 5, studentName: 'Jacqueline Miller', courseName: 'The Complete Digital Marketing Course', rating: 5 },
  { id: 6, studentName: 'Amanda Reed', courseName: 'Microsoft Excel - Beginner to Advanced', rating: 4.5 },
  { id: 7, studentName: 'Samuel Bishop', courseName: 'Behavior, Psychology, and Care Training', rating: 5 },
  { id: 8, studentName: 'Louis Ferguson', courseName: 'Create a Design System in Figma', rating: 5 }
];

// Reviews Table Component
const ReviewsTable = () => {
  return (
    <Container fluid className="p-4">
      <Row>
        <Col xs={12}>
          <h2 className="mb-4 text-center">Reviews</h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Student Name</th>
                    <th>Course Name</th>
                    <th>Rating</th>
                    <th>Hide/Show</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{review.studentName}</td>
                      <td>{review.courseName}</td>
                      <td>{'⭐'.repeat(Math.round(review.rating))}</td>
                      <td>
                        <Form.Check
                          type="switch"
                          id={`custom-switch-${index}`}
                          label=""
                        />
                      </td>
                      <td>
                        <ButtonGroup>
                          <Button variant="success" size="sm">
                            <i className="bi bi-eye"></i> {/* Bootstrap icon */}
                          </Button>
                          <Button variant="danger" size="sm">
                            <i className="bi bi-trash"></i> {/* Bootstrap icon */}
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Pagination className="justify-content-end mt-3">
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Dummy Data for Courses
const courses = [
  {
    name: 'Building Scalable APIs with GraphQL',
    enrolled: 2598,
    rating: 5,
  },
  {
    name: 'Graphic Design Masterclass',
    enrolled: 1203,
    rating: 5,
  },
  {
    name: 'Learn Invision',
    enrolled: 8215,
    rating: 4.5,
  },
  {
    name: 'Deep Learning with React Native',
    enrolled: 4125,
    rating: 4,
  },
  {
    name: 'Bootstrap 5 From Scratch',
    enrolled: 4103,
    rating: 5,
  },
];

// Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>); // Filled star
    } else {
      stars.push(<i key={i} className="bi bi-star text-warning"></i>); // Empty star
    }
  }
  return <>{stars}</>;
};

// Course Table Component
const CourseTable = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Top Rated Courses</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Enrolled</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.enrolled}</td>
              <td>
                <StarRating rating={course.rating} />
              </td>
              <td>
                <Button variant="info" className="me-2">
                  View
                </Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Main Component that renders both tables
const Main = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>

      <AsideBar />
      <div className="flex-grow-1 d-flex flex-column" style={{ marginLeft: '250px', overflowX: 'hidden' }}>
    <Anavbar />
        
        {/* <BootstrapNavbar>
          {/* <BootstrapNavbar.Brand href="#home">Dashboard</BootstrapNavbar.Brand>
        </BootstrapNavbar> */}
        <Container fluid>
          <ReviewsTable />
          <CourseTable />
        </Container>
      </div>
    </div>
  );
};

export default Main;
