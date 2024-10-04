import React, { useEffect, useState } from "react";
import HeaderBanner from "./HeaderBanner";
import "./ShowProfileDetails.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function ShowProfileDetails() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});

  const displayChallan = () => {
    navigate('/Courses/ChallanDetails');
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      // Call the logout API to invalidate the token
      await axios.post('http://localhost:4000/api/users/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      // Clear the token from local storage
      localStorage.removeItem('token');
      // Redirect to the home or login page
      navigate('/');
    }
  };


  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:4000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(response.data.user);
        setFormData(response.data.user); // Initialize form data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:4000/api/users/profile', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data); // This line should now work
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading state
  }

  return (
    <>
      <HeaderBanner value={"MY Account"} />
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="flex-column nav" role="tablist">
                <div className="nav-item profile-div active-tab">
                  <a
                    href=""
                    role="tab"
                    className="nav-link profil-text-light active-tab"
                  >
                    <i className="fas fa-user me-3"></i>My Profile
                  </a>
                </div>

                <div className="nav-item profile-div">
                  <a role="tab" className="nav-link profil-text-light" onClick={displayChallan}>
                    <i className="fas fa-file-invoice me-3"></i>My Invoices
                  </a>
                </div>
                <div className="nav-item profile-div">
                  <a role="tab" className="nav-link profil-text-light" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt me-3 "></i>Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header fw-bold fs-2">Account Details</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row gx-3 mb-3">
                    {/* <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputFirstName">
                        Roll Number
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputFirstName"
                        name="rollNumber"
                        type="text"
                        value={formData.rollNumber || ''}
                        onChange={handleChange}
                      />
                    </div> */}
                    <div className="col-md-12">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputLastName">
                        Name
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputLastName"
                        name="name"
                        type="text"
                        value={formData.name || ''}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputMobile">
                        Mobile
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputMobile"
                        name="mobile"
                        type="text"
                        value={formData.mobile || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputEmail">
                        Email
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputEmail"
                        name="email"
                        type="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputCnic">
                        CNIC
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputCnic"
                        name="cnic"
                        type="text"
                        value={formData.cnic || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputQualification">
                        Qualification
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputQualification"
                        name="qualification"
                        type="text"
                        value={formData.qualification || ''}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputWhatsapp">
                        Whatsapp Number
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputWhatsapp"
                        name="whatsappNumber"
                        type="tel"
                        value={formData.whatsappNumber || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputCity">
                        City
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputCity"
                        name="city"
                        type="text"
                        value={formData.city || ''}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="small-userprofile-laber mb-1" htmlFor="inputAddress">Address</label>
                    <input
                      className="form-control"
                      id="inputAddress"
                      name="address"
                      type="text"
                      value={formData.address || ''}
                      onChange={handleChange}
                    />
                  </div>

                  <button className="apply-btn btns" type="submit">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowProfileDetails;
