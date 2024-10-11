import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

function Tsidebar() {
  const location = useLocation();

  return (
    <div className="sidebar" data-background-color="light">
      <div className="sidebar-logo">
        <div className="logo-header" data-background-color="dark">
          <NavLink to="/" className="logo">
            <img
              src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png"
              alt="navbar brand"
              className="navbar-brand"
              width="200"
            />
          </NavLink>
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
            <li className={`nav-item ${location.pathname === '/Tdashboardpage' ? 'active' : ''}`}>
              <NavLink to="/Tdashboardpage" className="nav-link">
                <i className="fas fa-home"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className={`nav-item ${location.pathname === '/Mycourse' ? 'active' : ''}`}>
              <NavLink to="/Mycourse" className="nav-link">
                <i className="fas fa-chalkboard-teacher"></i>
                <p>My Courses</p>
              </NavLink>
            </li>
            <li className={`nav-item ${location.pathname === '/ManageStudents' ? 'active' : ''}`}>
              <NavLink to="/ManageStudents" className="nav-link">
                <i className="fas fa-users"></i>
                <p>Manage Students</p>
              </NavLink>
            </li>
            <li className={`nav-item ${location.pathname === '/CreateCourse' ? 'active' : ''}`}>
              <NavLink to="/CreateCourse" className="nav-link">
                <i className="fas fa-clipboard-list"></i>
                <p>Create Courses</p>
              </NavLink>
            </li>
            {/* <li className={`nav-item ${location.pathname === '/CreateAssigment' ? 'active' : ''}`}>
              <NavLink to="/CreateAssigment" className="nav-link">
                <i className="fas fa-clipboard-list"></i>
                <p>Create Assignments</p>
              </NavLink>
            </li> */}
            <li className={`nav-item ${location.pathname === '/gradeassigment' ? 'active' : ''}`}>
              <NavLink to="/gradeassigment" className="nav-link">
                <i className="fas fa-file-alt"></i>
                <p>Grade Assignments</p>
              </NavLink>
            </li>
            <li className={`nav-item ${location.pathname === '/scheduleClass' ? 'active' : ''}`}>
              <NavLink to="/scheduleClass" className="nav-link">
                <i className="fas fa-calendar-check"></i>
                <p>Schedule Classes</p>
              </NavLink>
            </li>
            <li className={`nav-item ${location.pathname === '/setting' ? 'active' : ''}`}>
              <NavLink to="/setting" className="nav-link">
                <i className="fas fa-cog"></i>
                <p>Settings</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tsidebar;
