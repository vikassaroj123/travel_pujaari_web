// src/pages/Home.jsx
import React from "react";
import CounterSection from "../components/CounterSection.jsx";
import Footer from "../components/Footer.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Navbar from "../components/Navbar.jsx"; // Adjust path based on where Navbar is located
import OurProduct from "../components/OurProduct.jsx";
import RecentPosts from "../components/RecentPosts.jsx";
import Testimonials from "../components/Testimonials.jsx";
import TourDestinations from "../components/TourDestinations.jsx";
import WhyChoose from "../components/WhyChoose.jsx";

const Home = () => {
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
