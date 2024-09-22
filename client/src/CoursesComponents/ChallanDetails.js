import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HeaderBanner from "../UserProfile/HeaderBanner";
import { MyContext } from "../ContextApi/Context";

function ChallanDetails() {
  const {Courses } = useContext(MyContext);

  const totalprice = Courses.reduce((acc, course) => acc + course.price, 0);



  
  return (
    <> <HeaderBanner value={"My Invoice"} />
    <section className="invoice-area" id="invoicearea">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Batch</th>
                    <th>Invoice #</th>
                    <th>Amount</th>
                    <th>Courses</th>
                    <th>Status</th>
                    <th>Last Date</th>
                    <th>Download Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="badge badge-warning">20</span>
                    </td>
                    <td>
                      <span>{`1000082${parseInt(Math.random() * 59999)}`}</span>
                      <i
                        className="fa fa-trash ml-2 text-danger"
                        title="Remove Invoice"
                      ></i>
                      <p className="text-danger">
                        <small>
                          Pay your fee via 1 Link using this invoice number
                          through any online banking platform.
                        </small>
                      </p>
                      <Link to="/payment">
                        <p>
                          <small className="text-danger">
                            <i className="fa fa-play"></i> How to Pay?
                          </small>
                        </p>
                      </Link>
                    </td>

                    <td>
                      {" "}
                      <i className="fas fa-dollar-sign"></i> 
                      {totalprice}
                    </td>

                    <td>
                        {Courses.map((e, index) => (
                          <span className="badge badge-success mr-2" key={index}>
                            {e.title}
                          </span>
                        ))}
                      </td>
                    <td>
                      <span className="badge badge-danger text-light">
                        Unpaid
                      </span>
                      <p>
                        <small>
                          You will get verification email after paying your fee
                        </small>
                      </p>
                    </td>
                    <td>30th Aug 24</td>
                    <td className="text-center">
                      <a target="_blank" href="assets/Challan/challan.pdf">
                        <button className="btn btn-info btn-sm">
                          <i className="fa fa-arrow-down"></i>
                        </button>
                      </a>
                      <p className="text-danger">
                        <small>
                          Download invoice to pay in any 1 link bank
                        </small>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section></>
  );
}

export default ChallanDetails;
