import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import { jwtDecode } from "jwt-decode";

function Quiz() {
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [courses, setCourses] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleShowQuizzes = (courseId) => {
    setSelectedCourseId(selectedCourseId === courseId ? null : courseId);
    setSelectedQuiz(null);
    setUserAnswers({});
    setScore(null); // Reset score when toggling courses
  };

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setUserAnswers({});
    setScore(null); // Reset score for new quiz
  };

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmitQuiz = async () => {
    let score = 0;

    if (!selectedQuiz) return;

    selectedQuiz.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });

    const totalQuestions = selectedQuiz.questions.length;
    const percentageScore = (score / totalQuestions) * 100;

    console.log("User Score:", percentageScore);
    setScore(percentageScore);

    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;


        try {
      console.log('Submitting score:', { userId, quizId: selectedQuiz._id, score: percentageScore });            await axios.post('/api/enrollments/saveScore', {
                userId,
                quizId: selectedQuiz._id,
                score: percentageScore,
            });
            console.log('Score saved successfully');
            alert('QUIZ SCORE DONE')
        } catch (error) {
            console.error('Error saving score:', error);
        }
    }
};

const renderScore = () => {
  if (score !== null) {
    return <div className="mt-3">Your Score: {score.toFixed(2)}%</div>;
  }
  return null;
};

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        const response = await axios.get(`/api/enrollments/withQuizzes/${userId}`);
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  const renderQuiz = () => {
    if (!selectedQuiz) return null;
  
    return (
      <div className="col-12 card">
        <div className="card-header">
          <div className="card-title fs-5">{selectedQuiz.title}</div>
        </div>
        <div className="card-body">
          <p>{selectedQuiz.description}</p>
          {selectedQuiz.questions.map((question, index) => (
            <div key={index}>
              <strong>{question.question}</strong>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {question.options.map((option, i) => (
                  <li key={i} style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={userAnswers[index] === option}
                        onChange={() => handleAnswerChange(index, option)}
                        className="mr-4"
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button className="btn btn-success mt-3" onClick={handleSubmitQuiz}>
            Submit Quiz
          </button>
          {renderScore()}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="card-header"></div>
              <div className="card-body">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-4">
                    {courses.length > 0 ? (
                      courses.map(course => (
                        <div className="card card-round m-2" key={course._id}>
                          <div className="card-header d-flex justify-content-between align-items-center">
                            <div className="card-title fs-5">{course.title}</div>
                            <button
                              className="btn btn-primary mt-2"
                              onClick={() => handleShowQuizzes(course._id)}
                            >
                              {selectedCourseId === course._id ? "Hide Quizzes" : "Show Quizzes"}
                            </button>
                          </div>
                          <div className="card-body">
                            {selectedCourseId === course._id && (
                              <div>
                                {course.quizzes.length > 0 ? (
                                  course.quizzes.map((quiz, index) => (
                                    <button
                                      key={index}
                                      className="btn btn-secondary m-1"
                                      onClick={() => handleSelectQuiz(quiz)}
                                    >
                                      {quiz.title}
                                    </button>
                                  ))
                                ) : (
                                  <p className="text-center">No Quizzes</p>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center">No enrolled courses found.</p>
                    )}
                  </div>
                  <div className="col-md-6 d-flex">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                      {renderQuiz()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
