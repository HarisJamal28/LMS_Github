import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AsideBar from './AsideBar';
import Anavbar from '../Admin/AnavBar';
import axiosInstance from '../api/axiosConfig';
import './Admin.css';  // Custom CSS for layout adjustments

const Acourses = () => {
  const [courses, setCourses] = useState([]);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalPending, setTotalPending] = useState(0);
  const [totalAccepted, setTotalAccepted] = useState(0);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get('/api/courses/admin-courses'); // Adjust the endpoint if necessary
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } 
    };

    const CountCourses = async () => {
      try {
        const response = await axiosInstance.get('/api/courses/admin-count-courses'); // Adjust the endpoint if necessary
        setTotalCourses(response.data.totalCourses);
        setTotalPending(response.data.pendingCourses);
        setTotalAccepted(response.data.acceptedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } 
    };

    fetchCourses();
    CountCourses();
  }, []);


  // const courses = [
  //   {
  //     name: 'Building Scalable APIs with GraphQL',
  //     instructor: 'Lori Stevens',
  //     date: '28 Oct 2021',
  //     type: 'Beginner',
  //     price: '$350',
  //     status: 'Pending',
  //   },
  //   {
  //     name: 'Bootstrap 5 From Scratch',
  //     instructor: 'Billy Vasquez',
  //     date: '16 Oct 2021',
  //     type: 'Intermediate',
  //     price: '$256',
  //     status: 'Pending',
  //   },
  //   {
  //     name: 'Graphic Design Masterclass',
  //     instructor: 'Carolyn Ortiz',
  //     date: '28 Aug 2021',
  //     type: 'All level',
  //     price: '$347',
  //     status: 'Live',
  //   },
  //   {
  //     name: 'Learn Invision',
  //     instructor: 'Frances Guerrero',
  //     date: '15 June 2021',
  //     type: 'All level',
  //     price: '$445',
  //     status: 'Live',
  //   },
  //   {
  //     name: 'Angular – The Complete Guider',
  //     instructor: 'Louis Ferguson',
  //     date: '10 Dec 2020',
  //     type: 'Intermediate',
  //     price: '$165',
  //     status: 'Live',
  //   },
  //   {
  //     name: 'JavaScript: Full Understanding',
  //     instructor: 'Samuel Bishop',
  //     date: '09 Nov 2020',
  //     type: 'Beginner',
  //     price: '$575',
  //     status: 'Live',
  //   },
  //   {
  //     name: 'Build Responsive Websites with HTML',
  //     instructor: 'Dennis Barrett',
  //     date: '21 Aug 2020',
  //     type: 'Beginner',
  //     price: '$268',
  //     status: 'Live',
  //   },
  //   {
  //     name: 'Build Websites with CSS',
  //     instructor: 'Joan Wallace',
  //     date: '02 April 2020',
  //     type: 'All level',
  //     price: '$370',
  //     status: 'Live',
  //   },
  // ];

  return (
    <>
        <Anavbar />

      {/* <Navbar /> */}
      
      <div className="container-fluid d-flex flex-row text-center align-items-center justify-content-center w-75 text-xs">
        {/* Sidebar */}
          <AsideBar />

        {/* Main content */}
        <div className="main-content col-md-9 ms-auto">
          <div className="mt-4">
            {/* Stats */}
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <h5>Total Courses</h5>
                    <h2>{totalCourses}</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <h5>Activated Courses</h5>
                    <h2>{totalAccepted !== 0 ? totalAccepted : 0}</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <h5>Pending Courses</h5>
                    <h2>{totalPending}</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Table */}
            <div className="card">
              <div className="card-header">
                <h5>Courses</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Course Name</th>
                        <th>Instructor</th>
                        <th>Added Date</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course, index) => (
                        <tr key={index}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={
                                course.image 
                                  ? `data:image/jpeg;base64,${course.image}` 
                                  : course.post_url
                                }
                                alt={course.title}
                                className="rounded me-2"
                                width="40"
                                height="40"
                                style={{objectFit:'contain'}}
                              />
                              {course.title}
                            </div>
                          </td>
                          <td>{course.instructor}</td>
                          <td>{new Date(course.createdAt).toLocaleDateString()}</td>
                          <td>
                            <span className="badge text-white" style={{ backgroundColor: 'grey' }}>
                              {course.level}
                            </span>
                          </td>
                          <td>{course.price}</td>
                          <td>
                            <span className={`badge bg-${course.status === 'Pending' ? 'warning' : 'success'}`}>
                              {course.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acourses;
