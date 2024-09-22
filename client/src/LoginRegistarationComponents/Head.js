import React from "react";


function Head() {
  return (
    <section className="top-bar2 ">
      <div className="container ">
        <div className="row  adjust-padding">
          <div className="col-lg-9 mt-lg-3  col-md-9 bar-left ">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item me-lg-5">
            
                <span>
                  <i className="fa fa-phone fs-5 me-1"></i>  <a>0303-4321118</a> |{" "}
                  <a href="tel:+92184321118">0323-1230488</a>
                </span>
              </li>
              <li className="list-inline-item me-lg-5">
                <span>
                <i className="fa fa-envelope fs-5 me-1"></i>   <a  >support@Itsolera.org</a>
                </span>
              </li>
              <li className="list-inline-item">
              <i className="fas fa-map-marker-alt fs-5 me-1"></i> <a>General Head Office, G-12/1,Islamabad, Pakistan</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mt-lg-3  col-md-3 bar-right d-flex  align-item-end justify-content-end">
              <ul className="list-unstyled list-inline bar-social">
                <li className="list-inline-item  ">
                  <a   rel="noopener noreferrer" className=" head-icon p-1">
                  <i class="fa fa-youtube"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a   rel="noopener noreferrer" className=" head-icon">
                  <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a   rel="noopener noreferrer" className=" head-icon">
                  <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a   rel="noopener noreferrer" className=" head-icon">
                  <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
}

export default Head;
