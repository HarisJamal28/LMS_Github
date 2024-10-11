import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function AsideBar() {
  const location = useLocation();

  return (
    <div className="sidebar" data-background-color="light">
      <div className="sidebar-logo">
        <div className="logo-header" data-background-color="dark">
          <Link className="logo" to="/">
            <img
              src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png"
              alt="navbar brand"
              className="navbar-brand"
              width="200"
            />
          </Link>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right text"></i>
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left"></i>
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary cursor-pointer">
            <li className={`nav-item ${location.pathname === '/Adashboard' ? 'active' : ''}`}>
              <Link to="/Adashboard">
                <i className="fas fa-home"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/Acourses' ? 'active' : ''}`}>
              <Link to="/Acourses">
                <i className="fas fa-clipboard-list"></i>
                <p>Courses</p>
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/Totalstudents' ? 'active' : ''}`}>
              <Link to="/Totalstudents">
                <i className="fas fa-users"></i>
                <p>Students</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#">
                <p className='fw-bold'>Instructors</p>
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/Iregisteration' ? 'active' : ''}`}>
              <Link to="/Iregisteration">
                <i className="fas fa-user-plus"></i>
                <p>Instructor Registration</p>
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/Idetails' ? 'active' : ''}`}>
              <Link to="/Idetails">
                <i className="fas fa-chalkboard-user"></i>
                <p>Instructor Detail</p>
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/Irequest' ? 'active' : ''}`}>
              <Link to="/Irequest">
                <i className="fas fa-users-gear"></i>
                <p>Instructor Requests</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#">
                <p className='fw-bold'>Operations</p>
              </Link>
            </li>
            {/* <li className={`nav-item ${location.pathname === '/Reviews' ? 'active' : ''}`}>
              <Link to="/Reviews">
                <i className="fas fa-pencil-alt"></i>
                <p>Reviews</p>
              </Link>
            </li> */}
            <li className={`nav-item ${location.pathname === '/Earnings' ? 'active' : ''}`}>
              <Link to="/Earnings">
                <i className="fas fa-money-bills"></i>
                <p>Earnings</p>
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/Settings' ? 'active' : ''}`}>
              <Link to="/Settings">
                <i className="fas fa-gears"></i>
                <p>Admin Settings</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AsideBar;
