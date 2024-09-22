import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../LoginRegistarationComponents/Navbar';
import AsideBar from './AsideBar';

const InstructorRequests = () => {
  const requests = [
    { name: 'Lori Stevens', subject: 'HTML, CSS, Bootstrap', date: '22 Oct 2021', status: 'Pending' },
    { name: 'Carolyn Ortiz', subject: 'Photoshop, Figma, Adobe XD', date: '06 Sep 2021', status: 'Pending' },
    { name: 'Dennis Barrett', subject: 'Javascript, Java', date: '21 Jan 2021', status: 'Accepted' },
    { name: 'Billy Vasquez', subject: 'Maths, Chemistry', date: '25 Dec 2020', status: 'Rejected' },
    { name: 'Jacqueline Miller', subject: 'Python, Angular, React Native', date: '05 June 2020', status: 'Accepted' },
    { name: 'Amanda Reed', subject: 'After Effects, Premiere Pro', date: '14 Feb 2020', status: 'Accepted' },
    { name: 'Samuel Bishop', subject: 'PHP, WordPress, Shopify', date: '06 Jan 2020', status: 'Rejected' }
  ];

  return (
    <>
      <Navbar />
      <AsideBar />
      <div className='Box-margin'>
        <div className='m-3'>
          <div className="container mt-4">
            <h2>Instructor Requests</h2>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search" />
            </div>

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
                {requests.map((request, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`https://via.placeholder.com/30`} // Placeholder for image
                        alt="Instructor"
                        className="rounded-circle me-2"
                      />
                      {request.name}
                    </td>
                    <td>{request.subject}</td>
                    <td>{request.date}</td>
                    <td>
                      {request.status === 'Pending' && (
                        <>
                          <button className="btn btn-success btn-sm me-2">Accept</button>
                          <button className="btn btn-danger btn-sm me-2">Reject</button>
                        </>
                      )}
                      {request.status === 'Accepted' && <span className="badge bg-success">Accepted</span>}
                      {request.status === 'Rejected' && <span className="badge bg-secondary">Rejected</span>}
                      <button className="btn btn-outline-primary btn-sm ms-2">View App</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-flex justify-content-between">
              <span>Showing 1 to 8 of 20 entries</span>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorRequests;
