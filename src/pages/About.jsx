import React, { useEffect } from "react";

import CounterSection from "../components/CounterSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import AboutHeroSec from "../components/about/AboutHeroSec";
import AboutServicesSec from "../components/about/AboutServicesSec";

// Helper function to dynamically load external scripts
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

const About = () => {
  useEffect(() => {
    const loadExternalScripts = async () => {
      try {
        // Load external JS files one by one
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
        await loadScript("/js/main.js"); // Ensure this script initializes all components correctly

        // Initialize any global plugins or re-initialize scripts if necessary
        console.log("Scripts loaded and initialized successfully!");

        // Example: if you need to initialize a plugin or library manually after loading
        // If your `main.js` contains initialization code, it might already handle this
      } catch (error) {
        console.error("Error loading external scripts:", error);
      }
    };

    // Call the function to load scripts when the app loads
    loadExternalScripts();
  }, []); // Empty dependency array means this runs once when the app loads
  return (
    <div>
      <Navbar />
      <AboutHeroSec />
      <AboutServicesSec />
      <CounterSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default About;
