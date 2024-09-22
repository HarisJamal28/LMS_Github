import React from "react";
import { mycourses } from "./CourseList";
import { Link } from "react-router-dom";

function MyCourses() {
  return (
    <>
      <section class="container card-section ">
        <h2 className="fs-1 text-center  mb-5">My Courses</h2>

        <div class="row g-4  marginonsmallscree">
          {mycourses.map((e, index) => (
            <div className="col-sm-6 col-lg-4 col-xl-3 ">
              <div className="card shadow">
                {/* Image */}
                <img
                  src={e.post_url}
                  className="card-img-top"
                  alt="course image"
                />
                {/* Card body */}
                <div className=" ps-3 pt-2">
                  <div className="d-flex me-3 mb-2">
                    <a className="badge bg-info text-dark ">{e.level}</a>
                  </div>
                  {/* Title */}

                  <h5 className="card-title fw-normal">
                    <a>{e.title}</a>
                  </h5>
                  <p className="mb-2 text-truncate-2">{e.description}</p>
                  {/* Rating star */}
                  <div>
                    <Link to="/dashboard">
                      {" "}
                      <button class="btn btn-md bg-success text-light btn-success-soft item-show-hover">
                        Go to dashboard
                      </button>
                    </Link>

                    <div class="progress mt-3 me-3">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style={{width: "80%"}}
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
                      {e.duration}
                    </span>
                    <span className="h6 fw-light mb-0">
                      <i className="fas fa-table text-orange me-2"></i>
                      {e.lectures}lectures
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default MyCourses;
