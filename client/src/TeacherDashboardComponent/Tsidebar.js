import React from "react";
import { NavLink } from 'react-router-dom';
function Tsidebar() {
  return (
    <>
  

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
      <div className="nav-toggle ">
        <button className="btn btn-toggle toggle-sidebar ">
          <i className="gg-menu-right text"></i>
        </button>
        <button className="btn btn-toggle sidenav-toggler">
          <i className="gg-menu-left"></i>
        </button>
      </div>
      <button className="topbar-toggler more ">
        <i className="gg-more-vertical-alt"></i>
      </button>
    </div>
  </div>
  <div className="sidebar-wrapper scrollbar scrollbar-inner">
    <div className="sidebar-content">
      <ul className="nav nav-secondary">
        <li className="nav-item">
          <NavLink to="/Tdashboardpage" activeClassName="active" className="nav-link">
            <i className="fas fa-home"></i>
            <p>Dashboard</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Mycourse" activeClassName="active" className="nav-link">
            <i className="fas fa-chalkboard-teacher"></i>
            <p>My Courses</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/ManageStudents" activeClassName="active" className="nav-link">
            <i className="fas fa-users"></i>
            <p>Manage Students</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/CreateAssigment" activeClassName="active" className="nav-link">
            <i className="fas fa-clipboard-list"></i>
            <p>Create Assignments</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/gradeassigment" activeClassName="active" className="nav-link">
            <i className="fas fa-file-alt"></i>
            <p>Grade Assignments</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/scheduleClass" activeClassName="active" className="nav-link">
            <i className="fas fa-calendar-check"></i>
            <p>Schedule Classes</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/setting" activeClassName="active" className="nav-link">
            <i className="fas fa-cog"></i>
            <p>Settings</p>
          </NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</div>

    </>
  );
};

export default Tsidebar;
