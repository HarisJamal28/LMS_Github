import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AsideBar from './AsideBar';
import Navbar from '../LoginRegistarationComponents/Navbar';
import Anavbar from '../Admin/AnavBar';


const supportRequests = [
  {
    id: 1,
    name: 'Lori Stevens',
    ticketInfo: 'New ticket #759 from Lori Stevens for General Enquiry',
    timeAgo: '8 hours ago',
    avatar: 'https://via.placeholder.com/50x50', // Placeholder, replace with actual URL
  },
  {
    id: 2,
    name: 'Dennis Barrett',
    ticketInfo: 'Comment from Billy Vasquez on ticket #659',
    timeAgo: '8 hours ago',
    avatar: 'https://via.placeholder.com/50x50',
  },
  {
    id: 3,
    name: 'Dennis Barrett',
    ticketInfo: 'Webestica assigned you a new ticket for Eduport theme',
    timeAgo: '5 hours ago',
    avatar: 'https://via.placeholder.com/50x50',
  },
  {
    id: 4,
    name: 'Dennis Barrett',
    ticketInfo: 'Thanks for contacting us with your issues',
    timeAgo: '9 hours ago',
    avatar: 'https://via.placeholder.com/50x50',
  },
];

const AdminDashboard = () => {
  return (
    <>
      <Anavbar />
      <AsideBar /> {/* Consistent name for the sidebar */}

          {/* Main Content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="row">
              <div className="col-md-3">
                <div className="card bg-warning text-white mb-3">
                  <div className="card-body">
                    <h2 className="card-title">1958</h2>
                    <p className="card-text">Completed Courses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-primary text-white mb-3">
                  <div className="card-body">
                    <h2 className="card-title">1600</h2>
                    <p className="card-text">Enrolled Courses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-info text-white mb-3">
                  <div className="card-body">
                    <h2 className="card-title">1235</h2>
                    <p className="card-text">Courses in Progress</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-success text-white mb-3">
                  <div className="card-body">
                    <h2 className="card-title">845 hrs</h2>
                    <p className="card-text">Total Watch Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Requests */}
            <div className="card mt-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Support Requests</h5>
                <a href="#" className="text-primary">View all</a>
              </div>
              <ul className="list-group list-group-flush">
                {supportRequests.map((request) => (
                  <li className="list-group-item d-flex align-items-start" key={request.id}>
                    <img
                      src={request.avatar}
                      alt={`${request.name} avatar`}
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                      <h6 className="mb-0">{request.name}</h6>
                      <p className="mb-1 text-muted small">{request.ticketInfo}</p>
                      <p className="mb-0 text-muted small">{request.timeAgo}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Instructors */}
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-header d-flex justify-content-between">
                    <h5>Top Instructors</h5>
                    <a href="#" className="text-primary">View all</a>
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      {[
                        { name: 'Lori Stevens', courses: 25, rating: 4.5, imgSrc: 'https://via.placeholder.com/50', verified: true },
                        { name: 'Dennis Barrett', courses: 18, rating: 4.5, imgSrc: 'https://via.placeholder.com/50' },
                        { name: 'Jacqueline Miller', courses: 21, rating: 4.8, imgSrc: 'https://via.placeholder.com/50', verified: true },
                        { name: 'Billy Vasquez', courses: 15, rating: 4.5, imgSrc: 'https://via.placeholder.com/50' },
                        { name: 'Amanda Reed', courses: 29, rating: 4.5, imgSrc: 'https://via.placeholder.com/50', verified: true }
                      ].map((instructor, idx) => (
                        <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <img src={instructor.imgSrc} alt={instructor.name} className="rounded-circle me-2" width="50" height="50" />
                            <div>
                              <h6 className="mb-0">
                                {instructor.name} {instructor.verified && <i className="fas fa-check-circle text-primary"></i>}
                              </h6>
                              <small>{instructor.courses} Courses</small>
                              <div><span className="text-warning"><i className="fas fa-star"></i></span> {instructor.rating}/5.0</div>
                            </div>
                          </div>
                          <a href="#" className="btn btn-outline-primary btn-sm">View</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Notice Board */}
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-header d-flex justify-content-between">
                    <h5>Notice Board</h5>
                    <a href="#" className="text-primary">View all</a>
                  </div>
                  <div className="card-body">
                    <div className="mb-2">
                      <h6 className="mb-1">Meeting with Alex and Misha</h6>
                      <p className="small text-muted">Today, 4:15pm</p>
                    </div>
                    <div className="mb-2">
                      <h6 className="mb-1">Marketing Plan</h6>
                      <p className="small text-muted">Tomorrow, 12:30pm</p>
                    </div>
                    <div className="mb-2">
                      <h6 className="mb-1">New Webinar on Course Development</h6>
                      <p className="small text-muted">Next Week, 10:00am</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
    </>
  );
};

export default AdminDashboard;
