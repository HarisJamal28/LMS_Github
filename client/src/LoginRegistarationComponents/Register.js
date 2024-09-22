import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../ContextApi/Context";
import HeaderBanner from "../UserProfile/HeaderBanner";



function Register({ changeFormHandeler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { changePageHandeler } = useContext(MyContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); 
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/api/users/register", {
        name,
        email,
        mobile,
        password,
      });

      if (response.data.success) {
        console.log("Registration successful:", response.data);
        localStorage.setItem('token', response.data.token);
        navigate('/Profile');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <>
      <HeaderBanner value={" Registration"} />
      <section className="d-flex login-page flex-column flex-md-row p-3 align-items-center justify-content-center">
        <div className="  w-100 w-md-50 w-lg-25 rounded-lg min-vh-95 px-3 d-flex align-items-center justify-content-center">
          <div className="col-xl-4  col-xxl-3  col-lg-5 col-sm-12 col-md-6 login-row p-3 ">
            <div className="w-100  d-flex align-items-center justify-content-center flex-column">
              <h1 className="h5 h-md-4 font-weight-bold text-center mt-0 fs-5">
                Registration
              </h1>

              <div className="w-100">
                <form className="mt-3" action="#" method="POST">
                  <div className="htmlForm-group">
                    <label className="text-gray-700 font-weight-bold ms-1 ">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className=" mt-1  text-gray-700 font-weight-normal login-input"
                      autoFocus
                      autoComplete="on"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="htmlForm-group mt-4">
                    <label className="text-gray-700 font-weight-bold ms-1 ">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className=" mt-1  text-gray-700 font-weight-normal login-input"
                      autoComplete="on"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="htmlForm-group mt-4">
                    <label className="text-gray-700 font-weight-bold ms-1 ">
                      Mobile
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Mobile Number"
                      className=" mt-1  text-gray-700 font-weight-normal login-input"
                      autoComplete="on"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>

                  <div className="htmlForm-group mt-4">
                    <label className="text-gray-700 font-weight-bold ms-1">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      minLength="6"
                      className=" mt-1   text-gray-700 font-weight-normal login-input"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="htmlForm-group mt-4">
                    <label className="text-gray-700 font-weight-bold ms-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      minLength="6"
                      className=" mt-1   text-gray-700 font-weight-normal login-input"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  {error && <p className="text-danger">{error}</p>}
                  <button
                    type="submit"
                    className="btns btn-login mt-4 fs-5"
                    onClick={handleSubmit}
                  >
                    Save & Next
                  </button>
                </form>
                <hr className="my-4" />
              </div>

              <p className="mt-2 text-sm text-center">
                Already have an account?
                <a
                  href=""
                  className="text-color font-weight-semibold text-decoration-none ms-1"
                  onClick={()=>navigate('/')}
                >
                  Login Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
