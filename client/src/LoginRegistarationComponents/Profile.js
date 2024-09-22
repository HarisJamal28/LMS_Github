import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeaderBanner from '../UserProfile/HeaderBanner';

function Profile() {
  const navigate = useNavigate();
  const [cnic, setCnic] = useState('');
  const [qualification, setQualification] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        'http://localhost:4000/api/users/profile_details',
        { cnic, qualification, whatsappNumber, city, address },
        config
      );

      if (response.data.success) {
        console.log('Profile updated successfully');
        navigate('/Courses');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error.response?.data?.message || 'Profile update failed. Please try again.');
    }
  };

  return (
    <>
      <HeaderBanner value={"Profile Registration"} />
      <section className="d-flex login-page flex-column flex-md-row p-3 align-items-center justify-content-center">
        <div className="w-100 w-md-50 w-lg-25 rounded-lg min-vh-95 px-3 d-flex align-items-center justify-content-center">
          <div className="col-xl-4 col-xxl-3 col-lg-5 col-sm-12 col-md-6 login-row p-3">
            <div className="w-100 d-flex align-items-center justify-content-center flex-column">
              <h1 className="h5 h-md-4 font-weight-bold text-center mt-0">Profile Registration</h1>

              <div className="w-100">
                <form className="mt-3" onSubmit={handleSubmit}>
                  <div className="htmlForm-group">
                    <label className="text-gray-700 font-weight-bold ms-1">CNIC</label>
                    <input
                      type="text"
                      placeholder="Enter Your CNIC"
                      className="mt-1 text-gray-700 font-weight-normal login-input"
                      required
                      value={cnic}
                      onChange={(e) => setCnic(e.target.value)}
                    />
                  </div>
                  <div className="htmlForm-group mt-4">
                    <label className="text-gray-700 font-weight-bold ms-1">Qualification</label>
                    <input
                      type="text"
                      placeholder="Enter Qualification"
                      className="mt-1 text-gray-700 font-weight-normal login-input"
                      required
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                    />
                  </div>
                  <div className="htmlForm-group mt-4">
                    <label className="text-gray-700 font-weight-bold ms-1">Whatsapp Number</label>
                    <input
                      type="text"
                      placeholder="Enter Whatsapp Number"
                      className="mt-1 text-gray-700 font-weight-normal login-input"
                      required
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                    />
                  </div>
                  <div className="htmlForm-group mt-4">
                    <label className="text-gray-700 font-weight-bold ms-1">City</label>
                    <input
                      type="text"
                      placeholder="Enter city"
                      className="mt-1 text-gray-700 font-weight-normal login-input"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="htmlForm-group mt-4">
                    <label className="text-gray-700 font-weight-bold ms-1">Address</label>
                    <input
                      type="text"
                      placeholder="Enter Your Address"
                      className="mt-1 text-gray-700 font-weight-normal login-input"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  {error && <p className="text-danger">{error}</p>}
                  <button type="submit" className="btns btn-login mt-4 fs-5">
                    Register Now
                  </button>
                </form>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
