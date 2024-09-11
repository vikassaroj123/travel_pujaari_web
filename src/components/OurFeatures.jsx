import React from "react";

const OurFeatures = () => {
  return (
    <div className="Features_Container">
      <div className="container">
        <div className="features-title">
          <h2>Our Features</h2>
          <p>
            User-friendly Features for Hassle-free Booking on Our B2B Travel
            Pujaari
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fa-solid fa-rotate fa-lg"></i>
            <p>Instant Rescheduling, Cancellation & Refund Policy</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-ticket fa-lg"></i>
            <p>Convenient Blocking & Issuing of Tickets</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-money-check-alt fa-lg"></i>
            <p>Multiple Secured Payment Options</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-file-alt fa-lg"></i>
            <p>Detailed Transaction Report</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-search fa-lg"></i>
            <p>Advanced Search Filters on Our B2B Portal</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-wrench fa-lg"></i>
            <p>Automated Back-End Process</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-plus-square fa-lg"></i>
            <p>Add Ancillary Services while Booking Tickets</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-headset fa-lg"></i>
            <p>24/7 Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
