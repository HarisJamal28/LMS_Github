const MyCourse = () => {
  return (
    <>
      <div className="Box-margin ">
        <div className="m-3">
          <div className="container mb-3 text-end">
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
                      <h3 className="mb-2 mb-sm-0">Most Selling Courses</h3>

                      <button type="button" className="btn btn-primary btn-sm">
                        View all
                      </button>
                    </div>
                  </div>

                  <div className="container-fluid mt-3">
  <form className="d-flex" role="search">
    <input
      className="form-control me-2 w-50"  
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button className="btn btn-outline-success" type="submit">
      Search
    </button>
  </form>
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
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="w-60px">
                                  <img
                                    src="assets/images/courses/4by3/08.jpg"
                                    className="rounded"
                                    alt=""
                                  />
                                </div>
                                <h6 className="mb-0 ms-2 table-responsive-title">
                                  <a href="#">
                                    Application and Web Development
                                  </a>
                                </h6>
                              </div>
                            </td>
                            <td>34</td>
                            <td>
											<div className="badge bg-success bg-opacity-10 text-success">Live</div>
										</td>
                                        <td>$1,02,478</td>
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

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="w-60px">
                                  <img
                                    src="assets/images/courses/4by3/10.jpg"
                                    className="rounded"
                                    alt=""
                                  />
                                </div>
                                <h6 className="mb-0 ms-2 table-responsive-title">
                                  <a href="#">Digital Marketing</a>
                                </h6>
                              </div>
                            </td>
                            <td>45</td>
                            <td>
											<div className="badge bg-secondary bg-opacity-10 text-secondary ">Disable</div>
										</td>
                                        <td>$98,478</td>
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

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="w-60px">
                                  <img
                                    src="assets/images/courses/4by3/02.jpg"
                                    className="rounded"
                                    alt=""
                                  />
                                </div>
                                <h6 className="mb-0 ms-2 table-responsive-title">
                                  <a href="#">Graphic Design </a>
                                </h6>
                              </div>
                            </td>
                            <td>21</td>
                            <td>
											<div className="badge bg-success bg-opacity-10 text-success">Live</div>
										</td>
                                        <td>$1,02,478</td>
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

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="w-60px">
                                  <img
                                    src="assets/images/courses/4by3/04.jpg"
                                    className="rounded"
                                    alt=""
                                  />
                                </div>
                                <h6 className="mb-0 ms-2 table-responsive-title">
                                  <a href="#">Cyber Security</a>
                                </h6>
                              </div>
                            </td>
                            <td>28</td>
                            <td>
											<div className="badge bg-info bg-opacity-10 text-info">Applied</div>
										</td>
                                        <td>$85,478</td>
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

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="w-60px">
                                  <img
                                    src="assets/images/courses/4by3/06.jpg"
                                    className="rounded"
                                    alt=""
                                  />
                                </div>
                                <h6 className="mb-0 ms-2 table-responsive-title">
                                  <a href="#">Artificial Intelligence</a>
                                </h6>
                              </div>
                            </td>
                            <td>38</td>
                            <td>
											<div className="badge bg-danger bg-opacity-10 text-danger">Rejected</div>
										</td>
                                        <td>$2,85,478</td>
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
