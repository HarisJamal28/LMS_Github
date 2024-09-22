import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../ContextApi/Context";
function Optionbar() {
  const { Courses,courseCount } = useContext(MyContext);
  const navigate = useNavigate();
  const handlePayment = (courseDetails) => {
    navigate('Invoice', { state: { courseDetails } });
  };
  
  return (
    <nav
      class="navbar  navbar-expand-lg navbar-dark   "
      aria-label="Ninth navbar example"
    >
      <div class="container-xl  ">
      <i class="ms-2 fa shoping-badge fa-lg fs-1 cursor-pointer" value={courseCount} onClick={()=>handlePayment(Courses)}> &#xf07a;</i>
        <button
          class="navbar-toggler top-bar2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse ms-5 " id="navbarsExample07XL">
          <ul class="navbar-nav me-auto mb-2  mb-lg-0">
            <li class="nav-item">
              <Link to="/courses">
                <a class="nav-link  nav-text-color fs-5" >
                  All Courses
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="CourseCatagory">
                <a class="nav-link  nav-text-color fs-5" >
                  Course Category
                </a>
              </Link>
            </li>
            <li class="nav-item">
            <Link to="Mycourses">
            <a class="nav-link  nav-text-color fs-5" >
             My Courses
              </a>
            </Link>
            </li>
          </ul>

          <nav class="navbar navbar-header-left text-dark navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
            <div class="input-group  ">
              <div class="input-group-prepend">
                <button type="submit" class="btn btn-search pe-1">
                  <i class="fa fa-search "></i>
                </button>
              </div>
              <input
                type="text"
                placeholder="Search ..."
                className="input-text-color "
              />
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Optionbar;
