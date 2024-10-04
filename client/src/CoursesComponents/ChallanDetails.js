import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBanner from "../UserProfile/HeaderBanner";
import { MyContext } from "../ContextApi/Context";
import axiosInstance from "../api/axiosConfig";

function ChallanDetails() {
  const { courseCount } = useContext(MyContext);
  const [invoices, setInvoices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axiosInstance.get('/api/invoices');
        
        if (response.data.success) {
          setInvoices(response.data.invoices);
        } else {
          console.error('Error fetching invoices:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  const calculateTotalPrice = (courses) => {
    return courses.reduce((acc, course) => acc + course.price, 0);
  };

  return (
    <>
      <HeaderBanner value={"My Invoice"} />
      <section className="invoice-area" id="invoicearea" style={{minHeight:'50vh'}}>
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
                    {invoices.map((invoice, index) => (
                      <tr key={index}>
                        <td>
                          <span className="badge badge-warning">{invoice.batch}</span>
                        </td>
                        <td>
                          <span>{invoice.invoiceNumber}</span>
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
                          <i className="fas fa-dollar-sign"></i> 
                          {calculateTotalPrice(invoice.courses)}
                        </td>
                        <td>
                          {invoice.courses.map((courseId, index) => (
                            <span className="badge badge-success mr-2" key={index}>
                              {/* You need to map courseId to the actual course title */}
                              {courseId.title} {/* Adjust according to how you fetch course titles */}
                            </span>
                          ))}
                        </td>
                        <td>
                        <span className={`badge ${invoice.status === 'Pending' ? 'badge-danger' : 'badge-success'} text-light`}>
                            {invoice.status}
                        </span>
                          <p>
                            <small>
                              You will get a verification email after paying your fee
                            </small>
                          </p>
                        </td>
                        <td>{new Date(invoice.lastDate).toLocaleDateString()}</td>
                        <td className="text-center">
                          <a target="_blank" href={`assets/Challan/${invoice.invoiceNumber}.pdf`} rel="noopener noreferrer">
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
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChallanDetails;
