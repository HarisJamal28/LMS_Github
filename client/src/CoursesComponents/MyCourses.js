import React, { useEffect, useState } from "react";
import axiosInstance from '../api/axiosConfig';
import {jwtDecode} from "jwt-decode";
import { Link } from "react-router-dom";

function MyCourses() {
  const [courses, setCourses] = useState([]);
  const defaultImageUrl = '/assets/img/blogpost.jpg';

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            // Handle token not found (e.g., redirect to login)
            return;
        }

        try {
            const decodedToken = jwtDecode(token); // Decode token here
            const userId = decodedToken.userId;

            const response = await axiosInstance.get(`/api/enrollments/${userId}`);
            setCourses(response.data.courses);
        } catch (error) {
            console.error('Error fetching enrolled courses:', error);
        }
    };

    fetchEnrolledCourses();
}, []);

  const getImageSource = (course) => {
    if (course.post_url) {
      return course.post_url;
    } else if (course.image) {
      return `data:image/png;base64,${course.image}`;
    }
    return defaultImageUrl;
  };

  return (
    <>
      <section className="container card-section" style={{minHeight:'100vh'}}>
        <h2 className="fs-1 text-center mb-5">My Courses</h2>


        {courses.length === 0 ? (
          <div className="text-center">
            <p className="fs-5">You are currently NOT enrolled in ANY course</p>
            <Link to="/dashboard">
              <button className="btn btn-md bg-primary text-light">
                Go to Dashboard
              </button>
            </Link>
          </div>
        ) : (
        <div className="row g-4 marginonsmallscree">
          {courses.map((course, index) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={index}>
              <div className="card shadow">
                {/* Image */}
                <img 
                src={getImageSource(course)} 
                className="card-img-top" 
                alt="course image" 
              />
                {/* Card body */}
                <div className="ps-3 pt-2">
                  <div className="d-flex me-3 mb-2">
                    <span className="badge bg-info text-dark">{course.level}</span>
                  </div>
                  {/* Title */}
                  <h5 className="card-title fw-normal">
                    <a>{course.title}</a>
                  </h5>
                  <p className="mb-2 text-truncate-2">{course.description}</p>
                  {/* Button to navigate to dashboard */}
                  <div>
                    <Link to="/dashboard">
                      <button className="btn btn-md bg-success text-light btn-success-soft item-show-hover">
                        Go to dashboard
                      </button>
                    </Link>
                    <div className="progress mt-3 me-3">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "80%" }} // Adjust based on actual progress
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        25%
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card footer */}
                <div className="card-footer pt-0 pb-3">
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="h6 fw-light mb-0">
                      <i className="far fa-clock text-danger me-2"></i>
                      {course.duration}
                    </span>
                    <span className="h6 fw-light mb-0">
                      <i className="fas fa-table text-orange me-2"></i>
                      {course.lectures} lectures
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      </section>
    </>
  );
}

export default MyCourses;
