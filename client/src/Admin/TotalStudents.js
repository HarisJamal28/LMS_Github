import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';
import Anavbar from '../Admin/AnavBar';
import AsideBar from './AsideBar';
import axios from '../api/axiosConfig'; // Import your Axios instance

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/api/users/students'); // Fetch students from your API
        setStudents(response.data.students); // Update state with the fetched students
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Error fetching students');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div className="text-danger">{error}</div>;

  return (
    <>
      <Anavbar />
      <div className="container-fluid d-flex flex-column">
        <div className="row">
          <div className="col-md-3">
            <AsideBar />
          </div>
          <div className="col-md-8">
            <h2>Students</h2>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="row">
              {students.map((student, index) => (
                <div className="col-md-6 col-lg-4 mb-4" key={index}>
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <img
                          src={student.img || 'https://via.placeholder.com/50'}
                          alt={student.name}
                          className="rounded-circle me-3"
                          style={{ width: '50px', height: '50px' }}
                        />
                        <div>
                          <h5 className="card-title mb-0">{student.name}</h5>
                          <small className="text-muted">
                            <i className="bi bi-geo-alt"></i> {student.city}
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
                  <a className="page-link" href="#!">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">3</a>
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
