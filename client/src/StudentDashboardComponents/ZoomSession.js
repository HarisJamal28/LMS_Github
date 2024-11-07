import React from 'react'
import zoomlogo from "./videoassests/zoom.jpg";

function ZoomSession() {
  return (
    <div class="container">
    <div class="page-inner">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-round">
            <div class="card-header">
              <div class="card-head-row">
                <div class="card-title">Zoom Sessions</div>
              </div>
            </div>
            <div class="card-body">
              <div class="chart-container  " style={{ "min-height": "75px" }}>



              <div className="row g-4 marginonsmallscree">
          
            <div className="col-sm-6 col-md-4 col-xl-6  ">
              <div className="card card-body bg-success  bg-opacity-10 text-center position-relative btn-transition p-4">
                <div className="icon-xl bg-body mx-auto  mb-3">
                  <img src={zoomlogo} alt=""  width={150}/>
                </div>
                <h5 className="mb-2">
                  
                    <a className="stretched-link">Click here to get meeting details</a>
                 
                </h5>
                <h6 className="mb-0">web development</h6>
              </div>
            </div>
       
        </div>




              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ZoomSession