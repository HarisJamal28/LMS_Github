import React, { useContext, useState, useEffect } from "react";
import axiosInstance from "../api/axiosConfig";
import { MyContext } from "../ContextApi/Context";

function CoursesRegistration() {
  const { addCourses, updateCourseCount, courseCount } = useContext(MyContext);
  const [courses, setCourses] = useState([]);
  const [applyClass, setApplyClass] = useState({});
  const [loading, setLoading] = useState(true);

  const defaultImageUrl = '/assets/img/blogpost.jpg';

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get('/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }finally {
        setLoading(false); // Hide loader after fetching
      }
    };

    fetchCourses();
  }, []);

  const addCourseToCart = (selectedCourse) => {
    console.log('Course added to cart:', selectedCourse._id);
    addCourses(selectedCourse);
    updateCourseCount(courseCount + 1);
    setApplyClass((prevState) => ({
        ...prevState,
        [selectedCourse._id]: "opacity-25"
    }));
  };

  const getImageSource = (course) => {
    if (course.post_url) {
      return course.post_url;
    } else if (course.image) {
      return `data:image/png;base64,${course.image}`;
    }
    return defaultImageUrl;
  };

  return (
    <section style={{minHeight:'100vh'}} className="container card-section">
      <h2 className="fs-1 text-center mb-auto">Most Popular Courses</h2>
      <p className="text-center mb-4">
        Choose from hundreds of courses from specialist organizations
      </p>


      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading courses, please wait...</p>
        </div>
      ) : (

      <div className="row g-4 marginonsmallscree">
        {courses.map((e, index) => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={index}>
            <div className="card shadow" style={{height:'420px'}}>
            <img style={{maxHeight:'180px', objectFit:'cover'}}
                src={getImageSource(e)} 
                className="card-img-top" 
                alt="course image" 
              />
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
      )}
    </section>
  );
}

export default CoursesRegistration;
