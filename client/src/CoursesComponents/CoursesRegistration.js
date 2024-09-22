import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { MyContext } from "../ContextApi/Context";

function CoursesRegistration() {
  const { addCourses, updateCourseCount, courseCount } = useContext(MyContext);
  const [courses, setCourses] = useState([]);
  const [applyClass, setApplyClass] = useState({});

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const addCourseToCart = (selectedCourse) => {
    addCourses(selectedCourse);
    updateCourseCount(courseCount + 1);
    setApplyClass((prevState) => ({
        ...prevState,
        [selectedCourse._id]: "opacity-25"
    }));
  };

  return (
    <section className="container card-section">
      <h2 className="fs-1 text-center mb-auto">Most Popular Courses</h2>
      <p className="text-center mb-4">
        Choose from hundreds of courses from specialist organizations
      </p>

      <div className="row g-4 marginonsmallscree">
        {courses.map((e, index) => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={index}>
            <div className="card shadow">
              <img src={e.post_url} className="card-img-top" alt="course image" />
              <div className="ps-3 pt-2">
                <div className="d-flex me-3 mb-2">
                  <a className="badge bg-info text-dark">{e.level}</a>
                </div>
                <h5 className="card-title fw-normal">{e.title}</h5>
                <p className="mb-2 text-truncate-2">{e.description}</p>
                <div>
                  <h4 className="text-danger fs-5 mb-0 ">${e.price}</h4>
                  <button 
                      className={`btn btn-md btn-success-soft bg-success text-light mt-2 item-show-hover ${applyClass[e._id] || ''}`} 
                      onClick={() => addCourseToCart(e)}
                  >
                      <i className="fas fa-shopping-cart me-2"></i>Add to cart
                  </button>
                </div>
              </div>
              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="h6 fw-light mb-0">
                    <i className="far fa-clock text-danger me-2"></i>{e.duration}
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-orange me-2"></i>{e.lectures} lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoursesRegistration;
