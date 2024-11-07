import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AsideBar from './AsideBar';
import Anavbar from '../Admin/AnavBar';
import axiosInstance from '../api/axiosConfig';


const InstructorRequests = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/api/courses/admin-courses');
        setCourses(response.data);

      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchCourses();
  }, []);

  const updateCourseStatus = async (id, newStatus) => {
    setCourses(prevCourses => 
        prevCourses.map(course => 
            course.id === id ? { ...course, status: newStatus } : course
        )
    );

    try {
        const response = await axiosInstance.patch('/api/courses/update-status', { id, status: newStatus });
    } catch (error) {
        setCourses(prevCourses => 
            prevCourses.map(course => 
                course.id === id ? { ...course, status: 'Pending' } : course
            )
        );
        console.error('Error updating course status:', error);
    }
};

  return (
    <>
      <AsideBar />
      <div className='Box-margin d-flex flex-column'>
      <Anavbar />

        <div className='m-3'>
          <div className="container mt-4">
            <h2 className='text-center'>Instructor Requests</h2>
            {/* <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search" />
            </div> */}
              <br />
            {loading ? ( // Conditional rendering based on loading state
              <div className="d-flex justify-content-center">

                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>

              </div>
            ) : (
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Instructor Name</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Requested Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((request, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`https://via.placeholder.com/30`} 
                        alt="Instructor"
                        className="rounded-circle me-2"
                      />
                      {request.instructor}
                    </td>
                    <td>{request.title}</td>
                    <td>{new Date(request.createdAt).toLocaleDateString()}</td>
                    <td>
                      {request.status === 'Pending' && (
                        <>
                          <button                             
                          className="btn btn-success btn-sm me-2" 
                          onClick={() => updateCourseStatus(request.id, 'Accepted')}
                          >Accept</button>
                          <button className="btn btn-danger btn-sm me-2"
                          onClick={() => updateCourseStatus(request.id, 'Rejected')}
                          >Reject</button>
                        </>
                      )}
                      {request.status === 'Accepted' && <span className="badge bg-success">Accepted</span>}
                      {request.status === 'Rejected' && <span className="badge bg-secondary">Rejected</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            )}
            <div className="d-flex justify-content-between">
              {/* <span>Showing 1 to 8 of 20 entries</span>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorRequests;
