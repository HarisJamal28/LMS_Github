import React from 'react'
import { useNavigate } from 'react-router-dom';

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
  const NavigattoComunity = () => {
    navigate('Comunity');
  };






  return (
    <>
      <div className="sidebar" data-background-color="light">
        <div className="sidebar-logo">
          
          <div className="logo-header" data-background-color="dark">
            <a   className="logo">
              <img
                src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png"
                alt="navbar brand"
                className="navbar-brand"
               width="200"
              />
            </a>
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
              <li className="nav-item  active"onClick={NavigattoDashboard}>
                <a  ><i className="fas fa-home " ></i><p className=''>Dashboard</p></a>
              </li>
              <li className="nav-item ">
                <a  ><i className="fas fa-calendar"></i><p>Calendar</p></a>
              </li>
              <li className="nav-item ">
                <a  ><i className="fas  fa-bullhorn"></i><p>Latest News</p></a>
              </li>
              <li className="nav-item ">
                <a  ><i className="fas  fa-chalkboard-teacher"></i><p>How To Use LMS</p></a>
              </li>
              <li className="nav-item ">
                <a  ><i className="fab fa-whatsapp fs-4"></i><p>Apply For Whatsapp</p></a>
              </li>
              <li className="nav-item " >
                <a  ><p className='fw-bold'>Class Activity</p></a>
              </li>
              <li className="nav-item " onClick={NavigattoVideos}>
                <a  ><i className="fas fa-video " ></i><p>Pre Recorded</p></a>
              </li>
              <li className="nav-item " onClick={NavigattoZoomSession}>
                <a  ><i className="fas fa-video "></i><p>Zoom Sessions</p></a>
              </li>
              <li className="nav-item " onClick={NavigattoQuiz}>
                <a  ><i className="fas fa-pencil-alt "></i><p>Week Quiz</p></a>
              </li>
              <li className="nav-item " onClick={NavigattoAssignmnet}>
                <a  ><i className="fas fa-clipboard-list "></i><p>Assignments</p></a>
              </li>
              <li className="nav-item " onClick={NavigattoProject}>
                <a  ><i className="fas fa-briefcase "></i><p>Projects</p></a>
              </li>
              <li className="nav-item " onClick={NavigattoResults}>
                <a  ><i className="fas  fa-chart-line "></i><p>Results</p></a>
              </li>
              <li className="nav-item " onClick={NavigattoCertification}>
                <a  ><i className="fas fa-graduation-cap "></i><p>Certificate</p></a>
              </li>
              <li className="nav-item " onClick={NavigattoComunity}>
                <a  ><i className="fas fa-comments"></i><p>Itsolera Comunity</p></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar