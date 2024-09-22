import React, { useContext } from "react";
import { MyContext } from "../ContextApi/Context"; // Import your context
import "./Payment.css";
import HeaderBanner from "../UserProfile/HeaderBanner";
import { useLocation, useNavigate } from "react-router-dom";

function Invoice() {

    const context = useContext(MyContext);
    console.log(context); // Check what the context contains
    const { clearCart } = context; // Destructure clearCart
    const location = useLocation();
    const { courseDetails } = location.state || {};
    const navigate = useNavigate();
    const totalprice = courseDetails.reduce((acc, course) => acc + course.price, 0);

    const displayChallan = () => {
        console.log("Context before clearing cart:", { clearCart });
        clearCart(); // Clear the cart
        navigate('/Courses/ChallanDetails'); // Navigate to the next page
    };

    return (
        <>
            <HeaderBanner value={"My Invoice"} />
            <div className="container mt-5 main-payment-container">
                <div className="row marginonsmallscree d-flex align-items-center justify-content-center">
                    <div className="card box1 shadow-sm col-md-12 col-lg-5 p-md-5 p-4">
                        <h5 className="text-center fw-bold">Payment Summary</h5>
                        <div className="fw-bolder mb-4">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Course Name</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseDetails.map((e, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{e.title}</td>
                                            <td>${e.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center justify-content-between text">
                                <span className="fw-bold">Discount (0%)</span>
                                <span className="fas fa-dollar-sign">
                                    <span className="ps-1">0</span>
                                </span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text mb-4">
                                <span className="fw-bold">Sub Total</span>
                                <span className="fas fa-dollar-sign">
                                    <span className="ps-1">{totalprice}</span>
                                </span>
                            </div>
                            <div className="border-bottom mb-4"></div>
                            <div className="d-flex align-items-center justify-content-between text mb-4">
                                <span className="fw-bold">Grand Total</span>
                                <span className="fas fa-dollar-sign">
                                    <span className="ps-1">{totalprice}</span>
                                </span>
                            </div>

                            <div className="border-bottom mb-4"></div>
                            <button
                                className="apply-btn btns text-center w-100"
                                data-toggle="modal"
                                data-target="#staticBackdrop"
                            >
                                Generate Invoice
                            </button>
                            <div className="d-flex align-items-center justify-content-between text mt-5">
                                <div className="d-flex flex-column text">
                                    <span>Customer Support:</span>
                                    <span>online chat 24/7</span>
                                </div>
                                <div className="btn btn-primary rounded-circle">
                                    <span className="fas fa-comment-alt"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal for Confirmation */}
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="text-right">
                                    <i className="fa fa-close close" data-dismiss="modal"></i>
                                </div>

                                <div className="px-4 py-5">
                                    <h1 className="mb-2 fw-bold text-center">Are you sure?</h1>
                                    <p className="text-center">
                                        <span className="">Your invoice amount is </span>
                                        <span className="font-weight-bold">{`$${totalprice}`}</span>
                                    </p>

                                    <div className="text-center mt-5">
                                        <button
                                            className="btn btn-primary gen-invice-btn"
                                            data-dismiss="modal"
                                            onClick={displayChallan}
                                        >
                                            GENERATE INVOICE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Invoice;
