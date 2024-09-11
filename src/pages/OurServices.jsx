import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OurFeatures from "../components/OurFeatures";
import OurServicesHero from "../components/OurServicesHero";
import ProductContainer from "../components/ProductConatiner";
import ServicePartner from "../components/ServicePartner";

const OurServices = () => {
  return (
    <div>
      <Navbar />
      <OurServicesHero />
      <ServicePartner />
      <OurFeatures />
      <ProductContainer />
      <Footer />
    </div>
  );
};

export default OurServices;
