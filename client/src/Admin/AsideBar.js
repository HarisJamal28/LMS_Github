import React from 'react';
import { Link } from 'react-router-dom';

function AsideBar() {
  return (
    <>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <div className="sidebar-logo">
            <div className="logo-header bg-dark text-center py-2">
              <Link to="/" className="logo">
                <img
                  src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png"
                  alt="navbar brand"
                  className="navbar-brand"
                  width="150"
                />
              </Link>
              <div className="nav-toggle d-flex justify-content-between align-items-center">
                <button className="btn btn-toggle toggle-sidebar">
                  <i className="gg-menu-right text-white"></i>
                </button>
                <button className="btn btn-toggle sidenav-toggler">
                  <i className="gg-menu-left text-white"></i>
                </button>
              </div>
            </div>
          </div>

          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Adashboard">
                <i className="fas fa-tachometer-alt"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Acourses">
                <i className="fas fa-book"></i> Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Totalstudents">
                <i className="fas fa-users"></i> Students
              </Link>
            </li>
            <li className="nav-item">
              <div className="d-flex flex-column" style={{ height: "50vh", width: "150px" }}>
                <h5 className="text-black">Instructors</h5>
                <ul className="nav nav-pills flex-column mb-auto">
                  <li className="nav-item">
                    <Link to="/Idetails" className="nav-link text-grey">
                      Instructor Detail
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Irequest" className="nav-link text-grey d-flex justify-content-between align-items-center">
                      Instructor Requests
                      <span className="badge bg-success">2</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Reviews">
                <i className="fas fa-star"></i> Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Earnings">
                <i className="fas fa-coins"></i> Earnings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Settings">
                <i className="fas fa-cogs"></i> Admin Settings
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AsideBar;
