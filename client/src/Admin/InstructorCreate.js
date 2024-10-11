import React, { useState } from "react";
import Tnavbar from "./AnavBar";
import Tsidebar from "./AsideBar";
import axiosInstance from "../api/axiosConfig";

const CreateInstructor = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axiosInstance.post('/api/users/register-instructor', {
        email,
        password,
      });
      console.log('Instructor Account created!:', response.data);
      // Reset form fields
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Error during creation');
      } else {
        setErrorMessage('Server error');
      }
      console.error('Error during Creation:', error.response.data);
    }
  };

  return (
    <>
      <Tnavbar />

      <Tsidebar />
      <div className="Box-margin" style={{border:'5px solid white'}}>
        
        <div className="m-3">
            
          <div className="container mt-4 w-50" >
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Instructor Registeration</h5>
              </div>
              <div className="card-body" >
                
                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter instructor Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter Temporary Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                      />
                    </div>
                  </div>

                  {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary">Create Instructor</button>
                </form>
              </div>
              <div className="card-footer">
                <h5 className="card-body fs-6 text-muted">Instructor's will be created with a temporary email and password to be shared and later updated by the instructor himself/herself</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateInstructor;
