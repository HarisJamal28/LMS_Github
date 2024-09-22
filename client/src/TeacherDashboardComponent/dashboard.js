import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Tdashboardpage = () => {
  const navigate = useNavigate();

  return (
    <div className="Box-margin">
      <div className="m-3">
        <div className="container mb-3 text-end">
          <button
            type="button"
            className="mt-4 apply-btn btns"
            onClick={() => navigate("/coursedetails")} // Navigate to CourseDetails page
          >
            Add Course
          </button>
        </div>

        <div className="container">
          <div className="row ">
            <div className="col-sm-6 col-lg-4 ">
              <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-25 rounded-3">
                <span className="display-6 text-warning mb-0">
                  <i className="fas fa-tv fa-fw"></i>
                </span>
                <div className="ms-4">
                  <div className="d-flex">
                    <h5>25</h5>
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
                      25
                    </h5>
                    <span className="mb-0 h5">K+</span>
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
                      12
                    </h5>
                    <span className="mb-0 h5">K</span>
                  </div>
                  <span className="mb-0 h6 fw-light">Enrolled Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div class="row">
            <div class="col-12">
              <div className="card border bg-transparent rounded-3 mt-5">
                <div class="card-header bg-transparent border-bottom">
                  <div class="d-sm-flex justify-content-sm-between align-items-center">
                    <h3 class="mb-2 mb-sm-0">Most Selling Courses</h3>

                    <button type="button" class="btn btn-primary btn-sm">
                      View all
                    </button>
                  </div>
                </div>

                <div class="card-body">
                  <div class="table-responsive border-0 rounded-3">
                    <table class="table align-middle p-4 mb-0">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            class="border-0 rounded-start bg-dark text-white"
                          >
                            Course Name
                          </th>
                          <th scope="col" class="border-0 bg-dark text-white">
                            Selling
                          </th>
                          <th scope="col" class="border-0 bg-dark text-white">
                            Amount
                          </th>
                          <th scope="col" class="border-0 bg-dark text-white">
                            Period
                          </th>
                          <th
                            scope="col"
                            class="border-0 rounded-end bg-dark text-white"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              
                              <h6 class="mb-0 ms-2 table-responsive-title">
                                <a href="#">Application and Web Development</a>
                              </h6>
                            </div>
                          </td>
                          <td>34</td>
                          <td>$1,25,478</td>
                          <td>
                            <span class="badge bg-primary bg-opacity-10 text-primary">
                              9 months
                            </span>
                          </td>
                          <td>
                            <a
                              href="#"
                              class="btn btn-sm btn-success-soft btn-round me-1 mb-0 custom-hover"
                            >
                              <i class="far fa-fw fa-edit"></i>
                            </a>
                            <button class="btn btn-sm btn-danger-soft btn-round mb-0 custom-hover1">
                              <i class="fas fa-fw fa-times"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              
                              <h6 class="mb-0 ms-2 table-responsive-title">
                                <a href="#">Digital Marketing</a>
                              </h6>
                            </div>
                          </td>
                          <td>45</td>
                          <td>$2,85,478</td>
                          <td>
                            <span class="badge bg-primary bg-opacity-10 text-primary">
                              6 months
                            </span>
                          </td>
                          <td>
                            <a
                              href="#"
                              class="btn btn-sm btn-success-soft btn-round me-1 mb-0 custom-hover"
                            >
                              <i class="far fa-fw fa-edit"></i>
                            </a>
                            <button class="btn btn-sm btn-danger-soft btn-round mb-0 custom-hover1">
                              <i class="fas fa-fw fa-times"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              
                              <h6 class="mb-0 ms-2 table-responsive-title">
                                <a href="#">Graphic Design </a>
                              </h6>
                            </div>
                          </td>
                          <td>21</td>
                          <td>$85,478</td>
                          <td>
                            <span class="badge bg-primary bg-opacity-10 text-primary">
                              4 months
                            </span>
                          </td>
                          <td>
                            <a
                              href="#"
                              class="btn btn-sm btn-success-soft btn-round me-1 mb-0 custom-hover"
                            >
                              <i class="far fa-fw fa-edit"></i>
                            </a>
                            <button class="btn btn-sm btn-danger-soft btn-round mb-0 custom-hover1">
                              <i class="fas fa-fw fa-times"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              
                              <h6 class="mb-0 ms-2 table-responsive-title">
                                <a href="#">Cyber Security</a>
                              </h6>
                            </div>
                          </td>
                          <td>28</td>
                          <td>$98,478</td>
                          <td>
                            <span class="badge bg-primary bg-opacity-10 text-primary">
                              8 months
                            </span>
                          </td>
                          <td>
                            <a
                              href="#"
                              class="btn btn-sm btn-success-soft btn-round me-1 mb-0 custom-hover"
                            >
                              <i class="far fa-fw fa-edit"></i>
                            </a>
                            <button class="btn btn-sm btn-danger-soft btn-round mb-0 custom-hover1">
                              <i class="fas fa-fw fa-times"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              
                              <h6 class="mb-0 ms-2 table-responsive-title">
                                <a href="#">Artificial Intelligence</a>
                              </h6>
                            </div>
                          </td>
                          <td>38</td>
                          <td>$1,02,478</td>
                          <td>
                            <span class="badge bg-primary bg-opacity-10 text-primary">
                              1 year
                            </span>
                          </td>
                          <td>
                            <a
                              href="#"
                              class="btn btn-sm btn-success-soft btn-round me-1 mb-0 custom-hover"
                            >
                              <i class="far fa-fw fa-edit"></i>
                            </a>
                            <button class="btn btn-sm btn-danger-soft btn-round mb-0 custom-hover1">
                              <i class="fas fa-fw fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
      </div>
    </div>
  );
};

export default Tdashboardpage;
