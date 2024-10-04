import React, { useState, useEffect } from "react";
import Tnavbar from "./Tnavbar";
import Tsidebar from "./Tsidebar";
import axios from 'axios';

const Setting = () => {
  // State for holding user profile information
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [education, setEducation] = useState([
    "Bachelor in Computer Graphics",
    "Masters in Computer Graphics",
  ]);
  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(true);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      setProfilePic(file);
    }
  };

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/users/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const userData = response.data.user;

      setFullName(userData.name);
      setEmail(userData.email);
      setPhone(userData.mobile);
      setLocation(userData.city);
      setAboutMe(userData.aboutMe);
      setEducation(userData.qualification.split(','));
      // setProfilePic(userData.image);

      if (userData.image) {
        const base64String = btoa(
          new Uint8Array(userData.image.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        setProfilePic(`data:image/png;base64,${base64String}`);
      }

    } catch (error) {
      console.error('Error fetching user data:', error);
    }finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  function base64Convert(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }

  // Function to handle profile picture change
  // Function to handle profile picture change
  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePic(reader.result); // Set the Base64 string as the profile picture
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Error converting file to Base64:", error);
      }
    }
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

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const formData = new FormData()
      formData.append('name', fullName)
      formData.append('email', email)
      formData.append('mobile', phone)
      formData.append('city', location)
      formData.append('aboutMe', aboutMe)
      formData.append('qualification', education.join(','))
      
      if (profilePic) {
        formData.append('image', profilePic);
      }


    try {
      const response = await axios.put('http://localhost:4000/api/users/profile', formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        }
      });
      alert("UPDATED")
      console.log("Profile updated successfully:", response.data);
      // Optionally, you can show a success message or redirect the user
    } catch (error) {
      alert("FAIL")
      console.error('Error updating profile:', error);
    }
  };

  return (
    <>
      <Tnavbar />
      <Tsidebar />
      <div className="Box-margin">
        <div className="m-3">
        <br />
        <br />
        <br />
          <div className="container my-4">
            <h2>Edit Profile</h2>
            {loading ? (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading your profile...</p>
              </div>
            ) : (
            <form onSubmit={handleSaveChanges}>
              <div className="mb-3">
                <label htmlFor="profilePic" className="form-label">Profile Picture</label>
                <div>
                  <img
                    src={profilePic || "https://via.placeholder.com/80"}
                    alt="Profile"
                    className="rounded-circle me-3"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <input
                    type="file"
                    name='image'
                    className="form-control-file"
                    accept=".jpeg, .png, .jpg"
                    onChange={handleProfilePicChange} 
                  />
                </div>
              </div>



              <div className="row">
                {/* <div className="col-md-6 mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div> */}
                <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
