import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
 
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-header course-navbar-header course-nav-bg navbar-header-transparent navbar-expand-lg border-bottom">
    <div class="container ">
 
      <ul class="navbar-nav topbar-nav ms-md-auto align-items-center ">
        
      
        <li class="nav-item topbar-icon dropdown hidden-caret">
          <a
            class="nav-link dropdown-toggle"
             
            id="messageDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-envelope text-light" ></i>
          </a>
          <ul
            class="dropdown-menu messages-notif-box animated fadeIn"
            aria-labelledby="messageDropdown"
          >
            <li>
              <div class="dropdown-title d-flex justify-content-between align-items-center">
                Messages
                <a href="" class="small">
                  Mark all as read
                </a>
              </div>
            </li>
            <li>
              <div class="message-notif-scroll scrollbar-outer">
                <div class="notif-center">
                  <a href="">
                    <div class="notif-img">
                      <img src="assets/img/jm_denis.jpg" alt="Img Profile" />
                    </div>
                    <div class="notif-content">
                      <span class="subject">Jimmy Denis</span>
                      <span class="block"> How are you ? </span>
                      <span class="time">5 minutes ago</span>
                    </div>
                  </a>
                  <a href="">
                    <div class="notif-img">
                      <img src="assets/img/chadengle.jpg" alt="Img Profile" />
                    </div>
                    <div class="notif-content">
                      <span class="subject">Chad</span>
                      <span class="block"> Ok, Thanks ! </span>
                      <span class="time">12 minutes ago</span>
                    </div>
                  </a>
                  <a href="">
                    <div class="notif-img">
                      <img src="assets/img/mlane.jpg" alt="Img Profile" />
                    </div>
                    <div class="notif-content">
                      <span class="subject">Jhon Doe</span>
                      <span class="block">
                        Ready for the meeting today...
                      </span>
                      <span class="time">12 minutes ago</span>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a class="see-all" href="javascript:void(0);">
                See all messages<i class="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item topbar-icon dropdown hidden-caret">
          <a
            class="nav-link dropdown-toggle"
            href=""
            id="notifDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-bell text-light"></i>
            <span class="notification">4</span>
          </a>
          <ul
            class="dropdown-menu notif-box animated fadeIn"
            aria-labelledby="notifDropdown"
          >
            <li>
              <div class="dropdown-title">You have 4 new notification</div>
            </li>
            <li>
              <div class="notif-scroll scrollbar-outer">
                <div class="notif-center">
                  <a href="">
                    <div class="notif-icon notif-primary">
                      <i class="fa fa-user-plus"></i>
                    </div>
                    <div class="notif-content">
                      <span class="block"> New user registered </span>
                      <span class="time">5 minutes ago</span>
                    </div>
                  </a>
                  <a href="">
                    <div class="notif-icon notif-success">
                      <i class="fa fa-comment"></i>
                    </div>
                    <div class="notif-content">
                      <span class="block">Rahmad commented on Admin</span>
                      <span class="time">12 minutes ago</span>
                    </div>
                  </a>
                  <a href="">
                    <div class="notif-img">
                      <img src="assets/img/profile2.jpg" alt="Img Profile" />
                    </div>
                    <div class="notif-content">
                      <span class="block">Reza send messages to you</span>
                      <span class="time">12 minutes ago</span>
                    </div>
                  </a>
                  <a href="">
                    <div class="notif-icon notif-danger">
                      <i class="fa fa-heart"></i>
                    </div>
                    <div class="notif-content">
                      <span class="block"> Farrah liked Admin </span>
                      <span class="time">17 minutes ago</span>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a class="see-all" href="javascript:void(0);">
                See all notifications<i class="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item topbar-user dropdown hidden-caret cursor-pointer">
          <a
            class="dropdown-toggle profile-pic"
            data-bs-toggle="dropdown"
             
            aria-expanded="false"
          >
            <div class="avatar-sm">
              <img
                src="assets/img/profile.jpg"
                alt="..."
                class="avatar-img rounded-circle"
              />
            </div>
            <span class="profile-username">
              <span class="op-7 text-light">Hi,</span>
              <span class="fw-bold text-light">Rehman</span>
            </span>
          </a>
          <ul class="dropdown-menu dropdown-user min-vh-25 animated fadeIn">
            <div class="dropdown-user-scroll scrollbar-outer">
              <li>
                <div class="user-box">
                  <div class="avatar-lg">
                    <img
                      src="assets/img/profile.jpg"
                      alt="image profile"
                      class="avatar-img rounded"
                    />
                  </div>
                  <div class="u-text">
                    <h4>Rehman</h4>
                    <p class="text-muted">hello@example.com</p>
                    <Link to="Userprofile"><a href="" class="btns btn-login  btn-view-profile" >
                      View Profile
                    </a></Link> 
                  </div>
                </div>
              </li>
              <li>
                
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="" onClick={ ()=>navigate('/')}> 
                  Logout
                </a>
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar