import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../LoginRegistarationComponents/Navbar';
import AsideBar from './AsideBar';
import './Admin.css';  // Custom CSS for layout adjustments

const Acourses = () => {
  const courses = [
    {
      name: 'Building Scalable APIs with GraphQL',
      instructor: 'Lori Stevens',
      date: '28 Oct 2021',
      type: 'Beginner',
      price: '$350',
      status: 'Pending',
    },
    {
      name: 'Bootstrap 5 From Scratch',
      instructor: 'Billy Vasquez',
      date: '16 Oct 2021',
      type: 'Intermediate',
      price: '$256',
      status: 'Pending',
    },
    {
      name: 'Graphic Design Masterclass',
      instructor: 'Carolyn Ortiz',
      date: '28 Aug 2021',
      type: 'All level',
      price: '$347',
      status: 'Live',
    },
    {
      name: 'Learn Invision',
      instructor: 'Frances Guerrero',
      date: '15 June 2021',
      type: 'All level',
      price: '$445',
      status: 'Live',
    },
    {
      name: 'Angular – The Complete Guider',
      instructor: 'Louis Ferguson',
      date: '10 Dec 2020',
      type: 'Intermediate',
      price: '$165',
      status: 'Live',
    },
    {
      name: 'JavaScript: Full Understanding',
      instructor: 'Samuel Bishop',
      date: '09 Nov 2020',
      type: 'Beginner',
      price: '$575',
      status: 'Live',
    },
    {
      name: 'Build Responsive Websites with HTML',
      instructor: 'Dennis Barrett',
      date: '21 Aug 2020',
      type: 'Beginner',
      price: '$268',
      status: 'Live',
    },
    {
      name: 'Build Websites with CSS',
      instructor: 'Joan Wallace',
      date: '02 April 2020',
      type: 'All level',
      price: '$370',
      status: 'Live',
    },
  ];

  return (
    <>
      <Navbar />
      
      <div className="container-fluid d-flex" style={{ paddingTop: '56px' }}>
        {/* Sidebar */}
        <div className="sidebar col-md-3 p-0">
          <AsideBar />
        </div>

        {/* Main content */}
        <div className="main-content col-md-9 ms-auto">
          <div className="mt-4">
            {/* Stats */}
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <h5>Total Courses</h5>
                    <h2>1200</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <h5>Activated Courses</h5>
                    <h2>996</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <h5>Pending Courses</h5>
                    <h2>200</h2>
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
                                src={`https://via.placeholder.com/40`}
                                alt={course.name}
                                className="rounded me-2"
                                width="40"
                                height="40"
                              />
                              {course.name}
                            </div>
                          </td>
                          <td>{course.instructor}</td>
                          <td>{course.date}</td>
                          <td>
                            <span className="badge text-white" style={{ backgroundColor: 'grey' }}>
                              {course.type}
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
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <span>Showing 1 to 8 of 20 entries</span>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-sm">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                    </ul>
                  </nav>
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
