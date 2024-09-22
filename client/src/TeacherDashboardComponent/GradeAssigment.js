import React, { useState } from "react";
import Tnavbar from "./Tnavbar";
import Tsidebar from "./Tsidebar";

const GradeAssigment = () => {
  const [performanceData, setPerformanceData] = useState([
    {
      userName: "John Doe",
      quizTitle: "React Basics",
      score: 85,
      completionTime: "12 min",
      date: "2024-09-10",
    },
    {
      userName: "Jane Smith",
      quizTitle: "JavaScript Essentials",
      score: 92,
      completionTime: "10 min",
      date: "2024-09-11",
    },
    {
      userName: "John Doe",
      quizTitle: "Bootstrap 5 Overview",
      score: 78,
      completionTime: "15 min",
      date: "2024-09-12",
    },
  ]);

  const [filterQuiz, setFilterQuiz] = useState("");

  const handleFilter = (e) => {
    setFilterQuiz(e.target.value);
  };

  return (
    <>
    <Tnavbar/>
    <Tsidebar/>
    <div className="Box-margin">
        <div className="m-3">
        <div className="container my-5">
      <h2>User Performance in Quizzes</h2>

      <div className="mb-3">
        <label htmlFor="filterQuiz" className="form-label">Filter by Quiz Title</label>
        <input
          type="text"
          className="form-control"
          id="filterQuiz"
          placeholder="Enter quiz title to filter"
          value={filterQuiz}
          onChange={handleFilter}
        />
      </div>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Quiz Title</th>
            <th scope="col">Score</th>
            <th scope="col">Completion Time</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {performanceData
            .filter((item) =>
              item.quizTitle.toLowerCase().includes(filterQuiz.toLowerCase())
            )
            .map((item, index) => (
              <tr key={index}>
                <td>{item.userName}</td>
                <td>{item.quizTitle}</td>
                <td>{item.score}%</td>
                <td>{item.completionTime}</td>
                <td>{item.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
        </div>
    </div>
    
    </>
  );
};

export default GradeAssigment;
