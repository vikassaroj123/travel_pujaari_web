// src/pages/Home.jsx
import React, { useEffect } from "react";
import CounterSection from "../components/CounterSection.jsx";
import Footer from "../components/Footer.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Navbar from "../components/Navbar.jsx"; // Adjust path based on where Navbar is located
import OurProduct from "../components/OurProduct.jsx";
import RecentPosts from "../components/RecentPosts.jsx";
import Testimonials from "../components/Testimonials.jsx";
import TourDestinations from "../components/TourDestinations.jsx";
import WhyChoose from "../components/WhyChoose.jsx";

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

const Home = () => {
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
      <HeroSection />
      <WhyChoose />
      <OurProduct />
      <CounterSection />
      <TourDestinations />
      <Testimonials />
      <RecentPosts />
      <Footer />
    </div>
  );
};

export default Home;
