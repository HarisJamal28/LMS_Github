import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axiosInstance from '../api/axiosConfig';
import {jwtDecode} from 'jwt-decode';
import './MyCourse.css'

const MyCourse = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [picture, setCoursePic] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    questions: [{ question: '', options: [''], correctAnswer: '' }],
  });
  const [showQuizForm, setShowQuizForm] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const decoded = jwtDecode(token);
        const instructorId = decoded.userId;
        const response = await axiosInstance.get(`/api/courses/instructor/${instructorId}/courses`);
        console.log(response);
        if (response.image) {
          const base64String = btoa(
            new Uint8Array(response.image.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
          setCoursePic(`data:image/png;base64,${base64String}`);
        }
        
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to load courses.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleViewClick = async (course) => {
    setSelectedCourse(course);
    setShowQuizForm(false);
    
    // Fetch quizzes for the selected course
    try {
      const response = await axiosInstance.get(`/api/courses/${course.courseId}/quizzes`);
      setQuizzes(response.data); // Assuming the response contains an array of quizzes
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuizData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index][name] = value;
    setQuizData((prevData) => ({
      ...prevData,
      questions: updatedQuestions,
    }));
  };
  
  const handleAddOption = (index) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index].options.push('');
    setQuizData((prevData) => ({
      ...prevData,
      questions: updatedQuestions,
    }));
  };
  
  const handleOptionChange = (questionIndex, optionIndex, e) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuizData((prevData) => ({
      ...prevData,
      questions: updatedQuestions,
    }));
  };
  
  const handleRemoveOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuizData((prevData) => ({
      ...prevData,
      questions: updatedQuestions,
    }));
  };

  const handleAddQuestion = () => {
    setQuizData((prevData) => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        { question: '', options: [''], correctAnswer: '' },
      ],
    }));
  };
  
  const handleSubmitQuiz = async (e) => {
    e.preventDefault();
    try {
        if (!selectedCourse) {
            throw new Error('No course selected');
        }

        const response = await axiosInstance.post(`/api/courses/${selectedCourse.courseId}/quizzes`, quizData);
        console.log(`Quiz created: ${selectedCourse.title}`, response.data);
        setQuizData({
            title: '',
            description: '',
            questions: [{ question: '', options: [''], correctAnswer: '' }],
        });
        setShowQuizForm(false);
    } catch (error) {
        console.error('Error creating quiz:', error);
    }
};

  const renderQuizForm = () => (
    <div className="quiz-form p-4 mb-5 border rounded shadow" style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <div className='bg-light' style={{position:'sticky', top:'0', width:'100%', height:'100%'}}>
      <h5 className="p-3" style={{width:'100%'}}>Create Quiz</h5>
      </div>
      <hr />
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={quizData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          name="description"
          value={quizData.description}
          onChange={handleInputChange}
        />
      </div>
      {quizData.questions.map((question, index) => (
        <div key={index} className="mb-4">
          <h6>Question {index + 1}</h6>
          <input
            type="text"
            className="form-control mb-2"
            name="question"
            value={question.question}
            onChange={(e) => handleQuestionChange(index, e)}
            placeholder="Question"
            required
          />
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                value={option}
                onChange={(e) => handleOptionChange(index, optionIndex, e)}
                placeholder={`Option ${optionIndex + 1}`}
                required
              />
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => handleRemoveOption(index, optionIndex)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-outline-secondary mb-2" onClick={() => handleAddOption(index)}>
            Add Option
          </button>
          <div className="mb-2">
            <label className="form-label">Correct Answer</label>
            <input
              type="text"
              className="form-control"
              name="correctAnswer"
              value={question.correctAnswer}
              onChange={(e) => handleQuestionChange(index, e)}
              required
            />
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-outline-primary mb-3" onClick={handleAddQuestion}>
        Add Question
      </button>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={() => setShowQuizForm(false)}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" onClick={handleSubmitQuiz}>
          Create Quiz
        </button>
      </div>
    </div>
  );
  
  
  

  return (
    <>
      <div className="Box-margin ">
        <div className="m-3">
        <br />
        <br />
        <br />
          
          <div>
            <h2 className='text-center'>My Courses</h2>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card border bg-transparent rounded-3 mt-3">
                  <div className="container-fluid mt-3">
                </div>


                  <div className="card-body">
                    <div className="table-responsive border-0 rounded-3">
                      <table className="table align-middle p-4 mb-0">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="border-0 rounded-start bg-dark text-white"
                            >
                              Course Title
                            </th>
                            <th scope="col" className="border-0 bg-dark text-white">
                              Enrolled
                            </th>
                            <th scope="col" className="border-0 bg-dark text-white">
                              Status
                            </th>
                            <th scope="col" className="border-0 bg-dark text-white">
                              Price
                            </th>
                            <th
                              scope="col"
                              className="border-0 rounded-end bg-dark text-white"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                 
                        <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan="5" className="text-center">
                              <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div>
                              <p>Loading your courses...</p>
                            </td>
                          </tr>
                        ) : (
                          courses.map((course) => (
                            <tr key={course.id}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="w-60px">
                                    <img src={course.image} className="rounded" />
                                  </div>
                                  <h6 className="mb-0 ms-2 table-responsive-title">
                                    <a href="#">{course.title}</a>
                                  </h6>
                                </div>
                              </td>
                              <td>{course.enrolledCount}</td>
                              <td>
                                <div className={`badge ${course.status === 'Accepted' ? 'bg-success' : 'bg-warning'} text-light`}>
                                  {course.status}
                                </div>
                              </td>
                              <td>${course.price.toLocaleString()}</td>
                              <td>
                                <button href="#" className="btn btn-sm btn-primary me-1 mb-0 custom-hover"  onClick={() => handleViewClick(course)} >
                                  View
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                        </tbody>

                      </table>
                    </div>

                    <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-3">
                      <p className="mb-0 text-center text-sm-start">
                        Showing 1 to 8 of 20 entries
                      </p>

                      <nav aria-label="Page navigation">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link mt-1" href="#">
                              <i className="fas fa-angle-left "></i>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link mt-1" href="#">
                              {" "}
                              <i className="fas fa-angle-right"></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<div>
  <h2 className='text-center'>Course Detail</h2>
</div>

              {/* Personal Information */}
              <div className="container mt-4">
                <div className="d-flex">
                  <div className="flex-grow-1 me-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="me-3">
                            {selectedCourse ? (
                              <img
                                src={selectedCourse.imageUrl ? `data:image/jpeg;base64,${selectedCourse.imageUrl}` : 'https://via.placeholder.com/150'}
                                alt="Course"
                                className="img-fluid"
                                style={{ objectFit: 'contain', height: '200px', width: '100%', minHeight: '150px', minWidth: '250px', maxWidth:'250px' }}
                              />
                            ) : (
                              <img
                                src={'https://via.placeholder.com/150'}
                                alt="Course"
                                className="img-fluid"
                              />
                            )}
                          </div>
                          <div>
                            {selectedCourse ? (
                              <>
                                <h5><strong>Course Name:</strong> {selectedCourse.title}</h5>
                                <p><strong>Description:</strong> {selectedCourse.description}</p>
                                <p><strong>Enrolled Students:</strong> {selectedCourse.enrolledCount}</p>
                                <p><strong>Status: </strong>
                                  {selectedCourse.status === 'Accepted' && <span className="badge bg-success">Live</span>}
                                  {selectedCourse.status === 'Pending' && <span className="badge bg-warning">Pending</span>}
                                  {selectedCourse.status === 'Rejected' && <span className="badge bg-danger">Cancelled</span>}
                                </p>
                                {/* <p><strong>Created By:</strong> {selectedInstructor ? selectedInstructor.name : 'N/A'}</p> */}
                              </>
                            ) : (
                              <p>Select a course to see its details.</p>
                            )}
                          </div>
                          
                        </div>
                        
                      </div>

                      
                    </div>
                    {selectedCourse && (
                        <div className="container mb-3 gap-5 d-flex">
                          <button
                            type="button"
                            className="mt-1 btn bg-dark text-light"
                            // onClick={() => navigate("/coursedetails")}
                            onClick={() => setShowQuizForm(true)} // Navigate to CourseDetails page
                          >
                            Create Quiz
                          </button>
                          <button
                            type="button"
                            className="mt-1 btn bg-dark text-light"
                            style={{ textWrap: 'nowrap', width: 'fit-content' }}
                            onClick={() => navigate("/coursedetails")} // Navigate to CourseDetails page
                          >
                            Upload Assignment
                          </button>
                        </div>
                      )}
                      <br />
                      <div>
                          <div className='row'>
                            <div className='col-6'>
                            {showQuizForm && renderQuizForm()}
                            </div>
                            <div className='col-6'>
                            <div className="mt-4">
                            {quizzes.length > 0 ? (
                                <>
                                  <h5>Quizzes</h5>
                                  <br />
                                  {quizzes.map((quiz, index) => (
                                    <button
                                      key={index}
                                      className="btn btn-dark me-2 mb-2"
                                      onClick={() => console.log(`Quiz ${index + 1} clicked`)} // Replace with appropriate action
                                    >
                                      Quiz {index + 1}
                                    </button>
                                  ))}
                                </>
                              ) : (
                                <h5>No quizzes have been made for this course.</h5>
                              )}
                        </div>
                            </div>
                          </div>
                      </div>
                  </div>
                        
                  {/* Additional Stats for Course */}
                  <div className="ms-3" style={{ flex: '0 0 25%' }}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5>Total Lectures</h5>
                        <h2>{selectedCourse ? selectedCourse.lectures || 0 : 0}</h2>
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5>Total Quizzes</h5>
                        <h2>{selectedCourse ? selectedCourse.quizzesCount || 0 : 0}</h2>
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5>Total Assignments</h5>
                        <h2>{selectedCourse ? selectedCourse.totalAssignments || 0 : 0}</h2>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h5>Total Videos</h5>
                        <h2>{selectedCourse ? selectedCourse.totalVideos || 0 : 0}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default MyCourse;
