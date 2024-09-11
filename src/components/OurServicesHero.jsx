import React from "react";

const OurServicesHero = () => {
  return (
    <section
      className="hero-wrap hero-wrap-2 js-fullheight"
      style={{ backgroundImage: `url('images/bg_1.jpg')` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
          <div className="col-md-9 ftco-animate pb-5 text-center">
            <h1 className="mb-3 bread">Our Services</h1>
            <p className="breadcrumbs">
              <span className="mr-2">
                <a href="/">
                  Home <i className="ion-ios-arrow-forward"></i>
                </a>
              </span>
              <span>Our Services</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesHero;
