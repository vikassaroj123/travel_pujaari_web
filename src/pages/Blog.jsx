import React from "react";
import BlogHero from "../components/BlogHero";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogHero />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Blog;
