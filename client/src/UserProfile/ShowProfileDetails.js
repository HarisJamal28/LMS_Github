import React from "react";
import HeaderBanner from "./HeaderBanner";
import "./ShowProfileDetails.css";
import { useNavigate } from "react-router-dom";
function ShowProfileDetails() {
  const navigate = useNavigate();

  const dispaychallan = () => {
    navigate('/Courses/ChallanDetails')
  };
  return (
    <>
      <HeaderBanner value={"MY Account"} />
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4 ">
            <div className="card mb-4 mb-xl-0 ">
              <div class="flex-column nav" role="tablist">
                <div class="nav-item profile-div active-tab">
                  <a
                    href=""
                    role="tab"
                    data-rb-event-key="profile"
                    aria-selected="true"
                    class="nav-link profil-text-light active-tab"
                  >
                    <i class="fas fa-user me-3"></i>My Profile
                  </a>
                </div>

                <div class="nav-item profile-div">
                  <a  role="tab" class="nav-link profil-text-light"  onClick={dispaychallan}>
                    <i class="fas fa-file-invoice me-3"></i>My Invoices
                    
                  </a>
                </div>
                <div class="nav-item profile-div">
                  <a  role="tab" class="nav-link profil-text-light" onClick={()=>navigate('/')}>
                    <i class="fas fa-sign-out-alt me-3 "></i>Logout
                  </a> 
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header fw-bold fs-2">Account Details</div>
              <div className="card-body">
                <form>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputFirstName">
                        Roll Number
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputFirstName"
                        type="text"
                        defaultValue="3838383"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputLastName">
                        Name
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        defaultValue="Muhammad Rehman"
                      />
                    </div>
                  </div>
                  {/* Form Row */}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (organization name) */}
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputOrgName">
                        Mobile
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your organization name"
                        defaultValue="0342993303"
                      />
                    </div>
                    {/* Form Group (location) */}
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputLocation">
                        Email
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputLocation"
                        type="email"
                        placeholder="Enter your location"
                        defaultValue="rehmanattock30@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    {/* Form Group (organization name) */}
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputOrgName">
                        CNIC
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your organization name"
                        defaultValue="0342993303"
                      />
                    </div>
                    {/* Form Group (location) */}
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputLocation">
                        Qualification
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputLocation"
                        type="email"
                        placeholder="Enter your location"
                        defaultValue="rehmanattock30@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    {/* Form Group (phone number) */}
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputPhone">
                        Whatsapp Number
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                        defaultValue="555-123-4567"
                      />
                    </div>
                    {/* Form Group (birthday) */}
                    <div className="col-md-6">
                      <label className="small-userprofile-laber mb-1" htmlFor="inputBirthday">
                        City
                      </label>
                      <input
                        className="form-control-userprofile"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                        defaultValue="Attock"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                            <label class="small-userprofile-laber mb-1" for="inputEmailAddress">Address</label>
                            <input class="form-control" id="inputEmailAddress" type="text" placeholder="Enter your address" value="PSO Nakka kalan, Tashil Pinidgheb Distric Attock,punjab, pakistan"/>
                        </div>

                  <button className="apply-btn btns" type="button">
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
