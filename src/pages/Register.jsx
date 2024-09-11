import React from "react";
import AgentRegistration from "../components/AgentRegistration";
import Footer from "../components/Footer";
import RegisterHeroSec from "../components/RegisterHeroSec";
import RegisterNavbar from "../components/RegisterNavbar";
import TravelAgent from "../components/TravelAgent";

const Register = () => {
  return (
    <div>
      <RegisterNavbar />
      <RegisterHeroSec />
      <AgentRegistration />
      <TravelAgent />z
      <Footer />
    </div>
  );
};

export default Register;
