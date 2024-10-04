import React, { useState } from "react";
import Tnavbar from "./Tnavbar";
import Tsidebar from "./Tsidebar";

const ScheduleClass = () => {
  const [classTitle, setClassTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [zoomLink, setZoomLink] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update the existing class in the schedule
      const updatedSchedule = schedule.map((item, index) =>
        index === editIndex
          ? { classTitle, dateTime, zoomLink }
          : item
      );
      setSchedule(updatedSchedule);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add a new class to the schedule
      const newClass = { classTitle, dateTime, zoomLink };
      setSchedule([...schedule, newClass]);
    }

    // Reset form fields
    setClassTitle("");
    setDateTime("");
    setZoomLink("");
  };

  const handleEdit = (index) => {
    const classToEdit = schedule[index];
    setClassTitle(classToEdit.classTitle);
    setDateTime(classToEdit.dateTime);
    setZoomLink(classToEdit.zoomLink);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(updatedSchedule);
  };

  return (
    <>
    <Tnavbar/>
    <Tsidebar/>

    <div className="Box-margin">
      <div className="m-3">
      <br />
        <br />
        <br />
      <div className="container my-4">
      <h2>{isEditing ? "Edit Class" : "Schedule a Class"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="classTitle" className="form-label">Class Title</label>
          <input
            type="text"
            className="form-control"
            id="classTitle"
            value={classTitle}
            onChange={(e) => setClassTitle(e.target.value)}
            placeholder="Enter Class Title"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dateTime" className="form-label">Date & Time</label>
          <input
            type="datetime-local"
            className="form-control"
            id="dateTime"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="zoomLink" className="form-label">Zoom Meeting Link</label>
          <input
            type="url"
            className="form-control"
            id="zoomLink"
            value={zoomLink}
            onChange={(e) => setZoomLink(e.target.value)}
            placeholder="Enter Zoom Meeting Link"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {isEditing ? "Update Class" : "Schedule Class"}
        </button>
      </form>

      {/* Schedule Table */}
      <div className="mt-4">
        <h3>Scheduled Classes</h3>
        {schedule.length > 0 ? (
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Class Title</th>
                <th scope="col">Date & Time</th>
                <th scope="col">Zoom Link</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.classTitle}</td>
                  <td>{new Date(item.dateTime).toLocaleString()}</td>
                  <td>
                    <a href={item.zoomLink} target="_blank" rel="noopener noreferrer">
                      {item.zoomLink}
                    </a>
                  </td>
                  <td>
                    <div className="d-flex">
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger "
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No classes scheduled yet.</p>
        )}
      </div>
    </div>
      </div>
    </div>
    </>
  );
};

export default ScheduleClass;
