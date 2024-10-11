import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AsideBar from './AsideBar';
import Anavbar from '../Admin/AnavBar';
import axiosInstance from '../api/axiosConfig';




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

  const [totalCourses, setTotalCourses] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalInstructors, setTotalInstructors] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTotalCounts = async () => {
      try {
        const response = await axiosInstance.get('/api/courses/count');
        setTotalCourses(response.data.totalCoursesALL);
        setTotalStudents(response.data.totalStudents);
        setTotalInstructors(response.data.totalInstructors);
      } catch (error) {
        console.error('Error fetching total counts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalCounts();
  }, []);

  
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
              <div className="col-md-4">
              <div className="row mb-12">
              <div className="col-md-12">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <h5>Total Instructors</h5>
                    <h2>{totalInstructors}</h2>
                  </div>
                </div>
              </div>
              </div>
              </div>
              <div className="col-md-4">
              <div className="row mb-12">
              <div className="col-md-12">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <h5>Total Students</h5>
                    <h2>{totalStudents}</h2>
                  </div>
                </div>
              </div>
              </div>
              </div>
              <div className="col-md-4">
              <div className="row mb-12">
              <div className="col-md-12">
                <div className="card text-center mb-3">
                  <div className="card-body">
                    <h5>Total Courses</h5>
                    <h2>{totalCourses}</h2>
                  </div>
                </div>
              </div>
              </div>
              </div>
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
