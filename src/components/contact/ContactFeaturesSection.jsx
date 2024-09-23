import React from "react";

const ContactFeaturesContainer = () => {
  return (
    <div
      className="Features_Container"
      style={{ height: "55vh", backgroundColor: "white" }}
    >
      <div className="container">
        <div className="features-title">
          <h2>Branch addresses</h2>
          <p>Visit us at your nearest branch</p>
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
        </div>
      </div>
    </div>
  );
};

export default ContactFeaturesContainer;
