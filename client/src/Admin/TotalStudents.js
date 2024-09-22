import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';
import Navbar from '../LoginRegistarationComponents/Navbar';
import AsideBar from './AsideBar';

const Students = () => {
  const [students] = useState([
    {
      name: 'Carolyn Ortiz',
      location: 'Mumbai',
      payments: '$6,205',
      totalCourses: 21,
      progress: 85,
      joinDate: '29 Aug 2021',
      img: 'https://via.placeholder.com/50', // Replace with actual image path
    },
    {
      name: 'Billy Vasquez',
      location: 'Delhi',
      payments: '$1,256',
      totalCourses: 16,
      progress: 60,
      joinDate: '15 July 2021',
      img: 'https://via.placeholder.com/50', // Replace with actual image path
    },
    {
      name: 'Dennis Barrett',
      location: 'New York',
      payments: '$9,256',
      totalCourses: 38,
      progress: 74,
      joinDate: '22 June 2021',
      img: 'https://via.placeholder.com/50', // Replace with actual image path
    },
    {
      name: 'Lori Stevens',
      location: 'California',
      payments: '$10,688',
      totalCourses: 38,
      progress: 45,
      joinDate: '18 April 2021',
      img: 'https://via.placeholder.com/50', // Replace with actual image path
    },
    {
      name: 'Jacqueline Miller',
      location: 'Chennai',
      payments: '$856',
      totalCourses: 5,
      progress: 90,
      joinDate: '05 Aug 2021',
      img: 'https://via.placeholder.com/50', // Replace with actual image path
    },
    {
      name: 'Samuel Bishop',
      location: 'Canada',
      payments: '$3,578',
      totalCourses: 14,
      progress: 30,
      joinDate: '18 Jan 2021',
      img: 'https://via.placeholder.com/50', // Replace with actual image path
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <AsideBar />
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <h2>Students</h2>

            {/* Search Bar */}
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Search" />
            </div>

            {/* Student Cards Grid */}
            <div className="row">
              {students.map((student, index) => (
                <div className="col-md-6 col-lg-4 mb-4" key={index}>
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <img
                          src={student.img}
                          alt={student.name}
                          className="rounded-circle me-3"
                          style={{ width: '50px', height: '50px' }}
                        />
                        <div>
                          <h5 className="card-title mb-0">{student.name}</h5>
                          <small className="text-muted">
                            <i className="bi bi-geo-alt"></i> {student.location}
                          </small>
                        </div>
                      </div>

                      <hr />

                      <ul className="list-unstyled">
                        <li>
                          <i className="bi bi-currency-dollar"></i> Payments: {student.payments}
                        </li>
                        <li>
                          <i className="bi bi-journal-bookmark-fill"></i> Total Courses: {student.totalCourses}
                        </li>
                      </ul>

                      <ProgressBar now={student.progress} label={`${student.progress}%`} />

                      <p className="mt-2">
                        <small>
                          <i className="bi bi-calendar"></i> Joined on: {student.joinDate}
                        </small>
                      </p>
                    </div>

                    <div className="card-footer d-flex justify-content-between">
                      <a href="#!" className="text-muted">
                        <i className="bi bi-envelope"></i>
                      </a>
                      <a href="#!" className="text-muted">
                        <i className="bi bi-three-dots"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#!" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
