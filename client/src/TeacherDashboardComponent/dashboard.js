import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import axiosInstance from '../api/axiosConfig';


const Tdashboardpage = () => {
  const navigate = useNavigate();
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalEStudents, setTotalEStudents] = useState(0);
  const [instructorCourses, setInstructorCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    const fetchTotalCourses = async () => {
      try {
        const response = await axiosInstance.get('/api/courses/count');
        setTotalCourses(response.data.totalCourses);
        setTotalStudents(response.data.totalStudents);
        setTotalEStudents(response.data.totalEnrolled);
      } catch (error) {
        console.error('Error fetching total courses:', error);
      } finally {
        setLoading(false); 
      }
    };

    const fetchInstructorCourses = async () => {
      setLoadingCourses(true);
      try {
          const response = await axiosInstance.get('/api/courses/instructor-courses');
          setInstructorCourses(response.data);
      } catch (error) {
          console.error('Error fetching instructor courses:', error);
      }finally {
        setLoadingCourses(false); // Set loading state to false after fetching
      }
  };

  fetchTotalCourses();
  fetchInstructorCourses();
  }, []);

  // alert(totalEStudents);

  return (
    <div className="Box-margin">
        <div className="m-3">
        <br />
        <br />
        <br />
        <br />
        {/* <div className="container mb-3 text-end">
          <button
            type="button"
            className="mt-4 apply-btn btns"
            onClick={() => navigate("/coursedetails")} // Navigate to CourseDetails page
          >
            Add Course
          </button>
        </div> */}

      {loading ? ( 
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>

        <div className="container">
          <div className="row ">
            <div className="col-sm-6 col-lg-4 ">
              <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-25 rounded-3">
                <span className="display-6 text-warning mb-0">
                  <i className="fas fa-tv fa-fw"></i>
                </span>
                <div className="ms-4">
                  <div className="d-flex">
                    <h5>{totalCourses}</h5>
                  </div>
                  <span className="mb-0 h6 fw-light">Total Courses</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 ">
              <div className="d-flex justify-content-center align-items-center p-4 bg-danger bg-opacity-10 rounded-3">
                <span className="display-6 text-purple mb-0">
                  <i className="fas fa-user-graduate fa-fw"></i>
                </span>
                <div className="ms-4">
                  <div className="d-flex">
                    <h5
                      className="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="25"
                      data-purecounter-delay="200"
                      data-purecounter-duration="0"
                    >
                      {totalStudents}
                    </h5>
                    {/* <span className="mb-0 h5">K+</span> */}
                  </div>
                  <span className="mb-0 h6 fw-light">Total Students</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 ">
              <div className="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
                <span className="display-6 text-info mb-0">
                  <i className="fas fa-gem fa-fw"></i>
                </span>
                <div className="ms-4">
                  <div className="d-flex">
                    <h5
                      className="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="12"
                      data-purecounter-delay="300"
                      data-purecounter-duration="0"
                    >
                      {totalEStudents}
                    </h5>
                    {/* <span className="mb-0 h5">K</span> */}
                  </div>
                  <span className="mb-0 h6 fw-light">Enrolled Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card border bg-transparent rounded-3 mt-5">
            <div className="card-header bg-transparent border-bottom">
              <div className="d-sm-flex justify-content-sm-between align-items-center">
                <h3 className="mb-2 mb-sm-0">Most Selling Courses</h3>
                <button type="button" className="btn btn-primary btn-sm">
                  View all
                </button>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive border-0 rounded-3">
              {loadingCourses ? ( // Show loader while fetching courses
                          <div className="text-center">
                            <div className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          </div>
                        ) : (
                <table className="table align-middle p-4 mb-0">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 rounded-start bg-dark text-white">
                        Course Name
                      </th>
                      <th scope="col" className="border-0 bg-dark text-white">
                        Selling
                      </th>
                      <th scope="col" className="border-0 bg-dark text-white">
                        Amount
                      </th>
                      <th scope="col" className="border-0 bg-dark text-white">
                        Period
                      </th>
                      <th scope="col" className="border-0 rounded-end bg-dark text-white">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {instructorCourses.map((course) => (
                      <tr key={course._id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <h6 className="mb-0 ms-2 table-responsive-title">
                              <a href="#">{course.title}</a>
                            </h6>
                          </div>
                        </td>
                        <td>{course.selling}</td> {/* Adjust if needed */}
                        <td>${course.price}</td> {/* Adjust if needed */}
                        <td>
                          <span className="badge bg-primary bg-opacity-10 text-primary">
                            {course.duration}
                          </span>
                        </td>
                        <td>
                          <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-0 custom-hover">
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
                  )}
              </div>


                  <div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-3">
                    <p class="mb-0 text-center text-sm-start">
                      Showing 1 to 8 of 20 entries
                    </p>

                    <nav aria-label="Page navigation">
                      <ul class="pagination">
                        <li class="page-item">
                          <a class="page-link mt-1" href="#">
                            <i class="fas fa-angle-left "></i>
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link mt-1" href="#">
                            {" "}
                            <i class="fas fa-angle-right"></i>
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
    )}
      </div>
    </div>
    
  );
};

export default Tdashboardpage;
