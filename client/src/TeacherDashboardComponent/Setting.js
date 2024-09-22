import React, { useState } from "react";
import Tnavbar from "./Tnavbar";
import Tsidebar from "./Tsidebar";

const Setting = () => {
  // State for holding user profile information
  const [fullName, setFullName] = useState("Lori Stevens");
  const [username, setUsername] = useState("loristev");
  const [email, setEmail] = useState("example@gmail.com");
  const [phone, setPhone] = useState("1234567890");
  const [location, setLocation] = useState("California");
  const [aboutMe, setAboutMe] = useState(
    "I've found a way to get paid for my favorite hobby, and do so while following my dream of traveling the world."
  );
  const [education, setEducation] = useState([
    "Bachelor in Computer Graphics",
    "Masters in Computer Graphics",
  ]);

  const [profilePic, setProfilePic] = useState(null);

  // Function to handle profile picture change
  const handleProfilePicChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  // Function to handle adding new education entry
  const handleAddEducation = () => {
    setEducation([...education, ""]);
  };

  // Function to handle changing education entry
  const handleEducationChange = (index, value) => {
    const updatedEducation = [...education];
    updatedEducation[index] = value;
    setEducation(updatedEducation);
  };

  // Function to handle removing an education entry
  const handleRemoveEducation = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  };

  // Function to handle form submission
  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Logic to save changes (e.g., API call)
    console.log("Profile updated:", {
      fullName,
      username,
      email,
      phone,
      location,
      aboutMe,
      education,
      profilePic,
    });
  };

  return (
    <>
    <Tnavbar/>
    <Tsidebar/>
    <div className="Box-margin">
        <div className="m-3">
        <div className="container my-4">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSaveChanges}>
        <div className="mb-3">
          <label className="form-label">Profile Picture</label>
          <div>
            <img
              src={profilePic || "https://via.placeholder.com/80"}
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: "80px", height: "80px" }}
            />
            <input
              type="file"
              className="form-control-file"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Email ID</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">About Me</label>
          <textarea
            className="form-control"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            rows="3"
            placeholder="Brief description for your profile."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Education</label>
          {education.map((edu, index) => (
            <div key={index} className="d-flex mb-2">
              <input
                type="text"
                className="form-control me-2"
                value={edu}
                onChange={(e) => handleEducationChange(index, e.target.value)}
                placeholder="Enter education"
              />
              {education.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveEducation(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="btn btn-link"
            onClick={handleAddEducation}
          >
            + Add more
          </button>
        </div>

        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
      </form>
    </div>
        </div>
    </div>
    </>
  );
};

export default Setting;
