import React, { useEffect } from "react";
import Footer from "../components/Footer";
<<<<<<< HEAD
import AgentRegistration from "../components/register/AgentRegistration";
import RegisterHeroSec from "../components/register/RegisterHeroSec";
import RegisterNavbar from "../components/register/RegisterNavbar";
import TravelAgent from "../components/register/TravelAgent";
=======
import RegisterHeroSec from "../components/RegisterHeroSec";
import TravelAgent from "../components/TravelAgent";
import Navbar from "../components/Navbar";
>>>>>>> 3d81b470fd1953d3780319d5d04d93c5690555e4

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
};

const Register = () => {
  useEffect(() => {
    const loadExternalScripts = async () => {
      try {
        await loadScript("/js/jquery-3.2.1.min.js");
        await loadScript("/js/jquery-migrate-3.0.1.min.js");
        await loadScript("/js/popper.min.js");
        await loadScript("/js/bootstrap.min.js");
        await loadScript("/js/jquery.easing.1.3.js");
        await loadScript("/js/jquery.waypoints.min.js");
        await loadScript("/js/jquery.stellar.min.js");
        await loadScript("/js/owl.carousel.min.js");
        await loadScript("/js/jquery.magnific-popup.min.js");
        await loadScript("/js/aos.js");
        await loadScript("/js/jquery.animateNumber.min.js");
        await loadScript("/js/bootstrap-datepicker.js");
        await loadScript("/js/scrollax.min.js");
        await loadScript("/js/main.js");
        console.log("Scripts loaded and initialized successfully!");
      } catch (error) {
        console.error("Error loading external scripts:", error);
      }
    };
    loadExternalScripts();
  }, []);
  return (
    <div>
      <Navbar />
      <RegisterHeroSec />
      <AgentRegistration />
      <TravelAgent />
      <Footer />
    </div>
  );
};

export default Register;
