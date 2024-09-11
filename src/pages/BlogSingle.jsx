import React from "react";
import BlogSIngleHero from "../components/BlogSIngleHero";
import BlogSingleSec from "../components/BlogSingleSec";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BlogSingle = () => {
  return (
    <div>
      <Navbar />
      <BlogSIngleHero />
      <BlogSingleSec />
      <Footer />
    </div>
  );
};

export default BlogSingle;
