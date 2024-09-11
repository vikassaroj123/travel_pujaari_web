import React from "react";
import AboutHeroSec from "../components/AboutHeroSec";
import AboutServicesSec from "../components/AboutServicesSec";
import CounterSection from "../components/CounterSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const About = () => {
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
