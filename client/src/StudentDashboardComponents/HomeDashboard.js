import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import { jwtDecode } from "jwt-decode";

function HomeDashboard() {
  // const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [courses, setCourses] = useState([]);

  const handleShowQuizzes = (courseId) => {
    setSelectedCourseId(selectedCourseId === courseId ? null : courseId);
  };


  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        const response = await axios.get(`/api/enrollments/${userId}`);
        setCourses(response.data.courses);
        // alert(courses)
        console.log("Courses set:", response.data.courses); 
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div class="container">
      <div class="page-inner">
      <div class="row">
          <div class="col-md-12 d-flex justify-content-center align-items-center">
            <div class="col-md-12">
              <div class="">
                <div class="card-head-row">
                  <div class="card-title text-center">Your Enrolled Courses</div>
                  <div>{courses.lectures}</div>
                </div>
              </div>
              <div class="card-body">
                  <div className="row p-3 d-flex justify-content-center align-items-center">
                  {courses.length > 0 ? (
                    courses.map(course => (
                      <div className="card card-round col-md-4 m-2" key={course._id}>
                        <div className="card-header">
                          <div className="card-head-row">
                            <div className="card-title fs-5">{course.title}</div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            {/* <p>Instructor: {course.instructorName}</p> */}
                            {/* <p>Progress: {course.quizScore || 0}%</p> */}
                            <div
                  class="chart-container  "
                  style={{ "min-height": "75px" }}
                >
                  <div class="progress" style={{ "height": "15px" , "margin-bottom": "10px"}}>
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style={{
                        width: "25%",
                       
                    
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    > Quiz 25</div>
                   
                  </div>
                  <div class="progress" style={{ "height": "15px" , "margin-bottom": "10px"}}>
                    <div
                      class="progress-bar bg-dark  "
                      role="progressbar"
                      style={{
                        width: "75%",
                       
                      }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >Projects 75%</div>
                  </div>
                  <div class="progress"  style={{ "height": "15px" , "margin-bottom": "10px"}}>
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style={{
                        width: "50%",
                       
                      }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >Assignments 10%</div>
                  </div>
                  <div class="progress" style={{ "height": "15px" , "margin-bottom": "10px"}}>
                    <div
                      class="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "23%",
                       
                      }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >Vides 23%</div>
                  </div>
                </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No enrolled courses found.</p>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        </div>
        {/* <div class="row">
          <div class="col-md-12 d-flex justify-content-center align-items-center">
            <div class="card card-round col-md-6">
              <div class="card-header">
                <div class="card-head-row">
                  <div class="card-title">My Progress</div>
                  <div class="card-tools">
                    <a
                      href="#"
                      class="btn btn-label-info btn-round btn-sm text-danger"
                    >
                      <span class="btn-label">
                        <i class="fa fa-print text-danger"></i>
                      </span>
                      Print
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div
                  class="chart-container  "
                  style={{ "min-height": "75px" }}
                >
                  <div class="progress" style={{ "height": "15px" , "margin-bottom": "10px"}}>
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style={{
                        width: "25%",
                       
                    
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    > Quiz 25</div>
                   
                  </div>
                  <div class="progress" style={{ "height": "15px" , "margin-bottom": "10px"}}>
                    <div
                      class="progress-bar bg-dark  "
                      role="progressbar"
                      style={{
                        width: "75%",
                       
                      }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >Projects 75%</div>
                  </div>
                  <div class="progress"  style={{ "height": "15px" , "margin-bottom": "10px"}}>
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style={{
                        width: "50%",
                       
                      }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >Assignments 10%</div>
                  </div>
                  <div class="progress" style={{ "height": "15px" , "margin-bottom": "10px"}}>
                    <div
                      class="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "23%",
                       
                      }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >Vides 23%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        </div> */}

        <div class="row d-flex justify-content-center align-items-start">
          <div class="col-md-4">
            <div class="card card-round">
              <div class="card-body">
                <div class="card-head-row card-tools-still-right">
                  <div class="card-title">Messaging</div>
                  <div class="card-tools">
                    <div class="dropdown">
                      <button
                        class="btn btn-icon btn-clean me-0"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-ellipsis-h"></i>
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-list py-4">
                  <div class="item-list">
                    <div class="avatar">
                      <img
                        src="assets/img/jm_denis.jpg"
                        alt="..."
                        class="avatar-img rounded-circle"
                      />
                    </div>
                    <div class="info-user ms-3">
                      <div class="username">Jimmy Denis</div>
                      <div class="status">Graphic Designer</div>
                    </div>
                    <button class="btn btn-icon btn-link op-8 me-1">
                      <i class="far fa-envelope"></i>
                    </button>
                    <button class="btn btn-icon btn-link btn-danger op-8">
                      <i class="fas fa-ban"></i>
                    </button>
                  </div>
                  <div class="item-list">
                    <div class="avatar">
                      <span class="avatar-title rounded-circle border border-white">
                        CF
                      </span>
                    </div>
                    <div class="info-user ms-3">
                      <div class="username">Chandra Felix</div>
                      <div class="status">Sales Promotion</div>
                    </div>
                    <button class="btn btn-icon btn-link op-8 me-1">
                      <i class="far fa-envelope"></i>
                    </button>
                    <button class="btn btn-icon btn-link btn-danger op-8">
                      <i class="fas fa-ban"></i>
                    </button>
                  </div>
                  <div class="item-list">
                    <div class="avatar">
                      <img
                        src="assets/img/talha.jpg"
                        alt="..."
                        class="avatar-img rounded-circle"
                      />
                    </div>
                    <div class="info-user ms-3">
                      <div class="username">Talha</div>
                      <div class="status">Front End Designer</div>
                    </div>
                    <button class="btn btn-icon btn-link op-8 me-1">
                      <i class="far fa-envelope"></i>
                    </button>
                    <button class="btn btn-icon btn-link btn-danger op-8">
                      <i class="fas fa-ban"></i>
                    </button>
                  </div>
                  <div class="item-list">
                    <div class="avatar">
                      <img
                        src="assets/img/chadengle.jpg"
                        alt="..."
                        class="avatar-img rounded-circle"
                      />
                    </div>
                    <div class="info-user ms-3">
                      <div class="username">Chad</div>
                      <div class="status">CEO Zeleaf</div>
                    </div>
                    <button class="btn btn-icon btn-link op-8 me-1">
                      <i class="far fa-envelope"></i>
                    </button>
                    <button class="btn btn-icon btn-link btn-danger op-8">
                      <i class="fas fa-ban"></i>
                    </button>
                  </div>
                  <div class="item-list">
                    <div class="avatar">
                      <span class="avatar-title rounded-circle border border-white bg-primary">
                        H
                      </span>
                    </div>
                    <div class="info-user ms-3">
                      <div class="username">Hizrian</div>
                      <div class="status">Web Designer</div>
                    </div>
                    <button class="btn btn-icon btn-link op-8 me-1">
                      <i class="far fa-envelope"></i>
                    </button>
                    <button class="btn btn-icon btn-link btn-danger op-8">
                      <i class="fas fa-ban"></i>
                    </button>
                  </div>
                  <div class="item-list">
                    <div class="avatar">
                      <span class="avatar-title rounded-circle border border-white bg-secondary">
                        F
                      </span>
                    </div>
                    <div class="info-user ms-3">
                      <div class="username">Farrah</div>
                      <div class="status">Marketing</div>
                    </div>
                    <button class="btn btn-icon btn-link op-8 me-1">
                      <i class="far fa-envelope"></i>
                    </button>
                    <button class="btn btn-icon btn-link btn-danger op-8">
                      <i class="fas fa-ban"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-round">
              <div class="card-header">
                <div class="card-head-row card-tools-still-right">
                  <div class="card-title">Messages</div>
                  <div class="card-tools">
                    <div class="dropdown">
                      <button
                        class="btn btn-icon btn-clean me-0"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-ellipsis-h"></i>
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body p-0">
                <div class="table-responsive">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default HomeDashboard;
