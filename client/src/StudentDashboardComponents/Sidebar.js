import React from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom';


function Sidebar() {
  const navigate = useNavigate();
  const NavigattoDashboard = () => {
    navigate('/dashboard');
  };

  const NavigattoVideos = () => {
    navigate('Videos');
  };
  const NavigattoZoomSession = () => {
    navigate('ZoomSession');
  };

  const NavigattoQuiz = () => {
    navigate('Quiz');
  };

  const NavigattoAssignmnet = () => {
    navigate('Assignments');
  };
  const NavigattoProject = () => {
    navigate('Projects');
  };
  const NavigattoResults = () => {
    navigate('Results');
  };
  const NavigattoCertification = () => {
    navigate('Certification');
  };


  const location = useLocation();

  return (
    <>
      <div className="sidebar" data-background-color="light">
        <div className="sidebar-logo">
          
          <div className="logo-header" data-background-color="dark">
            <img
              src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png"
              alt="navbar brand"
              className="navbar-brand"
              width="200"
            />
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
            <ul className="nav nav-secondary   cursor-pointer">
              <li className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
               <Link to="/dashboard">
                 <i className="fas fa-home"></i>
                 <p>Dashboard</p>
               </Link>
              </li>
             
              <li className="nav-item " >
                <a  ><p className='fw-bold'>Class Activity</p></a>
              </li>

              <li className={`nav-item ${location.pathname === '/dashboard/Videos' ? 'active' : ''}`}>
               <Link to="/dashboard/Videos">
                 <i className="fas fa-video"></i>
                 <p>Pre-Recorded</p>
               </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/dashboard/ZoomSession' ? 'active' : ''}`}>
               <Link to="/dashboard/ZoomSession">
                 <i className="fas fa-video"></i>
                 <p>Zoom Sessions</p>
               </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/dashboard/Quiz' ? 'active' : ''}`}>
               <Link to="/dashboard/Quiz">
                 <i className="fas fa-video"></i>
                 <p>Week Quiz</p>
               </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/dashboard/Assignments' ? 'active' : ''}`}>
               <Link to="/dashboard/Assignments">
                 <i className="fas fa-clipboard-list"></i>
                 <p>Assignments</p>
               </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/dashboard/Projects' ? 'active' : ''}`}>
               <Link to="/dashboard/Projects">
                 <i className="fas fa-briefcase"></i>
                 <p>Projects</p>
               </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/dashboard/Results' ? 'active' : ''}`}>
               <Link to="/dashboard/Results">
                 <i className="fas fa-chart-line"></i>
                 <p>Results</p>
               </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/dashboard/Certification' ? 'active' : ''}`}>
               <Link to="/dashboard/Certification">
                 <i className="fas fa-graduation-cap"></i>
                 <p>Certficate</p>
               </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
