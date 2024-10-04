import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';
import {jwtDecode} from 'jwt-decode';


const MyCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        // Decode the token to get the instructorId
        const decoded = jwtDecode(token);
        const instructorId = decoded.userId; // Assuming the instructor ID is stored under 'userId'

        // Fetch the courses using the instructorId
        const response = await axiosInstance.get(`/api/courses/instructor/${instructorId}/courses`);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to load courses.'); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <>
      <div className="Box-margin ">
        <div className="m-3">
        <br />
        <br />
        <br />
          <div className="container mb-1 text-end">
            <button type="button" className="mt-4 apply-btn btns ">
              Add Course
            </button>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card border bg-transparent rounded-3 mt-5">
                  <div className="card-header bg-transparent border-bottom">
                    <div className="d-sm-flex justify-content-sm-between align-items-center">
                      <h3 className="mb-2 mb-sm-0">My Courses</h3>

                      <button type="button" className="btn btn-primary btn-sm">
                        View all
                      </button>
                    </div>
                  </div>

                  <div className="container-fluid mt-3">
  {/* <form className="d-flex" role="search">
    <input
      className="form-control me-2 w-50"  
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button className="btn btn-outline-success" type="submit">
      Search
    </button>
  </form> */}
</div>


                  <div className="card-body">
                    <div className="table-responsive border-0 rounded-3">
                      <table className="table align-middle p-4 mb-0">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="border-0 rounded-start bg-dark text-white"
                            >
                              Course Title
                            </th>
                            <th scope="col" className="border-0 bg-dark text-white">
                              Enrolled
                            </th>
                            <th scope="col" className="border-0 bg-dark text-white">
                              Status
                            </th>
                            <th scope="col" className="border-0 bg-dark text-white">
                              Price
                            </th>
                            <th
                              scope="col"
                              className="border-0 rounded-end bg-dark text-white"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                        {courses.map((course) => (
                            <tr key={course.id}> {/* Assuming each course has a unique 'id' */}
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="w-60px">
                                    <img
                                      src={course.image} // Assuming imageUrl is a field in your data
                                      className="rounded"
                                    />
                                  </div>
                                  <h6 className="mb-0 ms-2 table-responsive-title">
                                    <a href="#">{course.title}</a>
                                  </h6>
                                </div>
                              </td>
                              <td>{course.enrolledCount}</td> {/* Adjust based on your data structure */}
                              <td>
                                <div className={`badge ${course.status === 'Accepted' ? 'bg-success' : 'bg-danger'} bg-opacity-10 text-success`}>
                                  {course.status}
                                </div>
                              </td>
                              <td>${course.price.toLocaleString()}</td> {/* Format the price */}
                              <td>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-success-soft btn-round me-1 mb-0 custom-hover"
                                >
                                  <i className="far fa-fw fa-edit"></i>
                                </a>
                                <button className="btn btn-sm btn-danger-soft btn-round mb-0 custom-hover1">
                                  <i className="fas fa-fw fa-times"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-3">
                      <p className="mb-0 text-center text-sm-start">
                        Showing 1 to 8 of 20 entries
                      </p>

                      <nav aria-label="Page navigation">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link mt-1" href="#">
                              <i className="fas fa-angle-left "></i>
                            </a>
                          </li>
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
                          <li className="page-item">
                            <a className="page-link mt-1" href="#">
                              {" "}
                              <i className="fas fa-angle-right"></i>
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
        </div>
      </div>
    </>
  );
};

export default MyCourse;
