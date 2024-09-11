import React from "react";

const ServicePartner = () => {
  return (
    <div className="service-section">
      <div className="service-title">
        <h1>Services for Partners</h1>
      </div>
      <div className="service-content">
        <div className="service-icons">
          <img src="/images/pngwing.com.png" alt="Main Service Icon" />
          <div className="service-icon icon-1" data-service="medical">
            <i
              className="fa fa-train"
              style={{ fontSize: "40px", color: "#29a6b1" }}
            ></i>{" "}
            {/* Medical Emergencies */}
          </div>
          <div className="service-icon icon-2" data-service="accident">
            <i
              className="fa fa-plane"
              style={{ fontSize: "40px", color: "#29a6b1" }}
            ></i>{" "}
            {/* Accident and Hospitalisation */}
          </div>
          <div className="service-icon icon-3" data-service="cancellation">
            <i
              className="fas fa-times-circle"
              style={{ fontSize: "40px", color: "#29a6b1" }}
            ></i>{" "}
            {/* Trip Cancellation */}
          </div>
          <div className="service-icon icon-4" data-service="interruption">
            <i
              className="fas fa-exclamation-triangle"
              style={{ fontSize: "40px", color: "#29a6b1" }}
            ></i>{" "}
            {/* Trip Interruption */}
          </div>
          <div className="service-icon icon-5" data-service="baggage">
            <i
              className="fas fa-suitcase"
              style={{ fontSize: "40px", color: "#29a6b1" }}
            ></i>{" "}
            {/* Loss or Delay of Baggage */}
          </div>
          <div className="service-icon icon-6" data-service="delay">
            <i
              className="fas fa-clock"
              style={{ fontSize: "40px", color: "#29a6b1" }}
            ></i>{" "}
            {/* Common Carrier Delay */}
          </div>
        </div>
        <div className="service-details">
          <h2>TRAVEL INSURANCE</h2>
          <p className="service-description">
            Buy affordable tailor-made travel insurance plans that are perfect
            for all needs. Coverages Provided For:
          </p>
          <ul className="service-list"></ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePartner;
