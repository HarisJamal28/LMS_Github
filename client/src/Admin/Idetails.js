import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Table, Badge, Pagination } from 'react-bootstrap';
import AsideBar from './AsideBar';
import Anavbar from '../Admin/AnavBar';
import axiosInstance from '../api/axiosConfig';


const InstructorDetail = () => {

  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchInstructors = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/api/users/instructors');
        setInstructors(response.data);
      } catch (error) {
        console.error('Error fetching instructors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  const handleInstructorClick = async(instructor) => {
    setSelectedInstructor(instructor);
    setSelectedCourse(null);
    await fetchCourses(instructor._id);
  };

  const fetchCourses = async (instructorId) => {
    try {
      const response = await axiosInstance.get(`/api/courses/instructor/${instructorId}/courses`);
      setCourses(response.data);
      // console.log('ALL COURSES:',courses)
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);

  };

  const deleteInstructor = async (instructorId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this instructor?');
    if (!confirmDelete) return;
  
    try {
      const response = await axiosInstance.delete(`/api/users/students/${instructorId}`);
      if (response.data.success) {
        setInstructors(prevInstructors => prevInstructors.filter(instructor => instructor._id !== instructorId));
        setSelectedInstructor(null);
        alert('Instructor deleted successfully');
      } else {
        alert('Failed to delete the instructor');
      }
    } catch (error) {
      console.error('Error deleting instructor:', error);
      alert('An error occurred while deleting the instructor');
    }
  };

  const updateCourseStatus = async (status) => {
    if (!selectedCourse) return;

    try {
      const response = await axiosInstance.patch('/api/courses/update-status', {
        id: selectedCourse.courseId,
        status,
      });
      console.log('SENDING THIS:',selectedCourse.courseId)

      if (response.data.course) {
        setCourses((prevCourses) =>
          prevCourses.map((course) =>
            course.courseId === selectedCourse.courseId ? { ...course, status } : course
          )
        );
        setSelectedCourse((prev) => ({ ...prev, status }));
        alert(`Course status updated to ${status}`);
      }
    } catch (error) {
      console.error('Error updating course status:', error);
      alert('Failed to update course status');
    }
  };

  return (
    <>

    <AsideBar/>
    <div className='Box-margin d-flex flex-column'>
    <Anavbar/>
    
    <Container fluid className="p-4 pt-0">
    <Row className='mt-4'>
        <Col xs={12} className='mb-4 text-center'>
          <h2>Our Instructors</h2>
        </Col>
      </Row>
    <style>{`  .hide-scrollbar::-webkit-scrollbar {    display: none;   }  .hide-scrollbar {    -ms-overflow-style: none;   scrollbar-width: none; }`}</style>         
    {loading ? (
            <Row className="mb-0 d-flex justify-content-center align-items-center">
              <Col xs={12} className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </Col>
            </Row>
          ) : (
            // Avatar Section
            <Row className="mb-0 d-flex justify-content-center align-items-center">
              <Card className='w-75' style={{ minHeight: '100px' }}>
                <Card.Body className="hide-scrollbar" style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll', overflowY: 'hidden' }}>
                  {instructors.map((instructor, index) => (
                    <Col xs={1} md={2} key={index} className="text-center">
                        <img
                          className="img-fluid rounded-circle"
                          style={{ objectFit: 'cover', height: '40px', width: '40px', cursor: 'pointer' }}
                          src={instructor.image ? instructor.image : instructor.post_url || 'https://via.placeholder.com/50'}
                          onClick={() => handleInstructorClick(instructor)}
                        />
                      <p>{instructor.name}</p>
                    </Col>
                  ))}
                </Card.Body>
              </Card>
            </Row>
          )}
    </Container>

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
                        // src={selectedInstructor ? (selectedInstructor.image ? `data:image/jpeg;base64,${selectedInstructor.image}` : selectedInstructor.post_url) : 'https://via.placeholder.com/150'}
                        src={selectedInstructor 
                          ? (selectedInstructor.image 
                              ? selectedInstructor.image.startsWith('data:image/jpeg;base64,') 
                                ? selectedInstructor.image 
                                : `data:image/jpeg;base64,${selectedInstructor.image}` 
                              : selectedInstructor.post_url) 
                          : 'https://via.placeholder.com/150'}
                        className="img-fluid rounded-circle"
                        style={{objectFit:'cover', height:'150px', width:'150px',minHeight:'150px', minWidth:'150px'}}
                      />
                    </Col>
                    <Col md={9}>
                      {selectedInstructor ? (
                        <>
                          <p><strong>Full Name:</strong> {selectedInstructor.name}</p>
                          <p><strong>Email:</strong> {selectedInstructor.email || 'N/A'}</p>
                          <p><strong>Mobile Number:</strong> {selectedInstructor.mobile || 'N/A'}</p>
                          <p><strong>City:</strong> {selectedInstructor.city || 'N/A'}</p>
                          <p><strong>Address:</strong> {selectedInstructor.address || 'N/A'}</p>
                          <p><strong>Joining Date:</strong> {selectedInstructor.joiningDate || 'N/A'}</p>
                          <p><strong>Education:</strong> {selectedInstructor.qualification || 'N/A'}</p>
                          <p><strong>Description:</strong> {selectedInstructor.aboutMe || 'N/A'}</p>
                        </>
                      ) : (
                        <p>Select an instructor to see their details.</p>
                      )}
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
                  <h2>{selectedInstructor ? selectedInstructor.activeStudents || 0 : 0}</h2>
                  <small className="text-success">+5.37% last 1 week</small>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <h5>New Enrollment</h5>
                  <h2>{selectedInstructor ? selectedInstructor.newEnrollments || 0 : 0}</h2>
                  <small className="text-success">+3.67% last 1 week</small>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Body>
                {selectedInstructor ? (
                        <h2>
                          <button
                            className="btn-outline btn-danger btn-sm"
                            onClick={() => deleteInstructor(selectedInstructor._id)}
                          >
                            Delete Instructor
                          </button>
                          {/* <button className="btn-outline btn-danger btn-sm">Reject</button> */}
                        </h2>
                      ) : (
                        <p>No actions available.</p>
                      )}
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
                        {courses.length > 0 ? courses.map((course, index) => (
                          <tr key={index}>
                            <td>{course.title}</td>
                            <td>{course.enrolledCount}</td>
                            <td>
                              {course.status === 'Accepted' && <Badge bg="success">Live</Badge>}
                              {course.status === 'Pending' && <Badge bg="warning">Pending</Badge>}
                              {course.status === 'Rejected' && <Badge bg="danger">Cancelled</Badge>}
                            </td>
                            <td>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => handleCourseClick(course)} // Step 3: Update button
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan="4" className="text-center">No courses found for this instructor.</td>
                          </tr>
                        )}
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

      <Row>
        <Col xs={12}>
          <h2>Course Detail</h2>
        </Col>
      </Row>

      {/* Personal Information */}
      <Row className="mt-4">
              <Col md={8}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col md={4}>
                      {selectedCourse ? (
                      <>
                        <img
                          src={selectedCourse.imageUrl ? `data:image/jpeg;base64,${selectedCourse.imageUrl}` : 'https://via.placeholder.com/150'}
                          alt="Course"
                          className="img-fluid"
                          style={{ objectFit: 'contain', height: '200px', width: '100%', minHeight: '150px', minWidth: '150px' }}
                        />
                      </>
                    ) : (
                      <img
                      src={'https://via.placeholder.com/150'}
                      alt="Course"
                      className="img-fluid"
                      ></img>
                    )}
                      </Col>
                      <Col>
                    {selectedCourse ? (
                      <>
                        <h5><strong>Course Name:</strong> {selectedCourse.title}</h5>
                        <p><strong>Description:</strong> {selectedCourse.description}</p>
                        <p><strong>Enrolled Students:</strong> {selectedCourse.enrolledCount}</p>
                        <p><strong>Status: </strong>
                          {selectedCourse.status === 'Accepted' && <Badge bg="success">Live</Badge>}
                          {selectedCourse.status === 'Pending' && <Badge bg="warning">Pending</Badge>}
                          {selectedCourse.status === 'Rejected' && <Badge bg="danger">Cancelled</Badge>}
                        </p>
                        <p><strong>Created By:</strong> {selectedInstructor ? selectedInstructor.name : 'N/A'}</p>
                        {/* Add more course details as necessary */}
                      </>
                    ) : (
                      <p>Select a course to see its details.</p>
                    )}
                    </Col>
                    </Row>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <Row>
                      <Col >
                    {selectedCourse ? (
                      <>
                        <p className='d-flex gap-4'><strong>Actions:</strong>
                        {selectedCourse.status === 'Accepted' && (
                          <>
                            <button className="btn-outline btn-danger btn-sm"
                            onClick={() => updateCourseStatus('Pending')}
                            >Disable</button>
                          </>
                        )}
                        {selectedCourse.status === 'Rejected' && (
                          <>
                            <button className="btn-outline btn-success btn-sm"
                            onClick={() => updateCourseStatus('Accepted')}
                            >Accept</button>
                          </>
                        )}
                        {selectedCourse.status === 'Pending' && (
                          <>
                            <button className="btn-outline btn-success btn-sm"
                            onClick={() => updateCourseStatus('Accepted')}
                            >Accept</button>
                            <button className="btn-outline btn-danger btn-sm"
                            onClick={() => updateCourseStatus('Rejected')}
                            >Reject</button>
                          </>
                        )}
                        </p>
                      </>
                    ) : (
                      <p>Select a course to see what actions are available</p>
                    )}
                    </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              {/* Additional Stats for Course */}
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <h5>Total Lectures</h5>
                    <h2>{selectedCourse ? selectedCourse.lectures || 0 : 0}</h2>
                  </Card.Body>
                </Card>
                <Card className="mb-4">
                  <Card.Body>
                    <h5>Total Quizzes</h5>
                    <h2>{selectedCourse ? selectedCourse.quizzesCount || 0 : 0}</h2>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <h5>Total Assignments</h5>
                    <h2>{selectedCourse ? selectedCourse.totalAssignments || 0 : 0}</h2>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <h5>Total Videos</h5>
                    <h2>{selectedCourse ? selectedCourse.totalVideos || 0 : 0}</h2>
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
