import React from "react";
import { Link } from "react-router-dom";

const RegisterHeroSec = () => {
  return (
    <section
      className="hero-wrap hero-wrap-2 js-fullheight"
      style={{ backgroundImage: "url('images/bg_1.jpg')" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
          <div className="col-md-9 ftco-animate pb-5 text-center">
            <h1 className="mb-3 bread">Agent Registration</h1>
            <p className="breadcrumbs">
              <span className="mr-2">
                <Link to="/">
                  Home <i className="ion-ios-arrow-forward"></i>
                </Link>
              </span>
              <span>Agent Registration</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterHeroSec;
