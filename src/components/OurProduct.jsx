/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// Define a reusable component for each icon box
const ProductIcon = ({ iconClass, tooltipText, divClass }) => (
  <div className={`Our_Product_icon-box ${divClass}`}>
    <i className={`fas ${iconClass}`}></i>
    <span className="Our_Product_tooltip">{tooltipText}</span>
  </div>
);

const OurProduct = () => (
  <div className="Our_Product">
    <div className="Our_Product_container">
      <div className="Our_Product_icons-grid">
        <ProductIcon
          divClass="Our_Product_icon-mobile"
          iconClass="fa-mobile-alt "
          tooltipText="Mobile Recharge"
        />
        <ProductIcon
          divClass="Our_Product_icon-bus"
          iconClass="fa-bus "
          tooltipText="Bus Ticket"
        />
        <ProductIcon
          divClass="Our_Product_icon-hotel"
          iconClass="fa-hotel "
          tooltipText="Hotel Booking"
        />
        <ProductIcon
          divClass="Our_Product_icon-wifi"
          iconClass="fa-wifi "
          tooltipText="Internet Services"
        />
        <ProductIcon
          divClass="Our_Product_icon-money"
          iconClass="fa-exchange-alt "
          tooltipText="Money Transfer"
        />
        <ProductIcon
          divClass="Our_Product_icon-subway"
          iconClass="fa-subway "
          tooltipText="Train Ticket"
        />
        <ProductIcon
          divClass="Our_Product_icon-plane"
          iconClass="fa-plane "
          tooltipText="Flight Booking"
        />
        <ProductIcon
          divClass="Our_Product_icon-laptop"
          iconClass="fa-laptop "
          tooltipText="Online Booking"
        />
        <ProductIcon
          divClass="Our_Product_icon-ship"
          iconClass="fa-ship "
          tooltipText="Cruise Booking"
        />
        <ProductIcon
          divClass="Our_Product_icon-car"
          iconClass="fa-car "
          tooltipText="Car Rental"
        />
        <ProductIcon
          divClass="Our_Product_icon-beach"
          iconClass="fa-umbrella-beach "
          tooltipText="Holiday Packages"
        />
        <ProductIcon
          divClass="Our_Product_icon-clock"
          iconClass="fa-clock "
          tooltipText="Time Management"
        />
      </div>

      <div className="Our_Product_text-content">
        <h1>Our Products</h1>
        <p>
          Become an Agent and Get Access to Our Wide Array of Travel Solutions
        </p>
        <a href="#" className="Our_Product_explore-btn">
          Explore More
        </a>
      </div>
    </div>
  </div>
);

export default OurProduct;
