import React, { useContext } from "react";
import { MyContext } from "../ContextApi/Context"; // Import your context
import "./Payment.css";
import HeaderBanner from "../UserProfile/HeaderBanner";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from '../api/axiosConfig';

function Invoice() {
    const { cart } = useContext(MyContext);
    const location = useLocation();
    const navigate = useNavigate();
    
    const totalprice = Array.isArray(cart) ? cart.reduce((acc, course) => acc + course.price, 0) : 0;

    const displayChallan = async () => {
        // Prepare invoice data
        const invoiceData = {
            batch: "Batch 1", // Adjust as necessary
            invoiceNumber: `INV-${Date.now()}`, // Unique invoice number
            amount: totalprice,
            courses: cart.map(course => course._id),
            lastDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Example: 30 days from now
        };

        try {
            const response = await axiosInstance.post('/api/invoices', invoiceData);

            if (response.data.success) {
                navigate('/Courses/ChallanDetails'); // Navigate to the next page
            } else {
                console.error('Error creating invoice:', response.data.message);
            }
        } catch (error) {
            console.error('Error creating invoice:', error);
        }
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
                                {cart.map((e, index) => (
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
                                            onClick={displayChallan} // Call the function to create invoice
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
