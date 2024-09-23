/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "images/image_1.jpg",
      day: "21",
      year: "2019",
      month: "August",
      title: "Why Lead Generation is Key for Business Growth",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 2,
      image: "images/image_2.jpg",
      day: "21",
      year: "2019",
      month: "August",
      title: "Why Lead Generation is Key for Business Growth",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 3,
      image: "images/image_3.jpg",
      day: "21",
      year: "2019",
      month: "August",
      title: "Why Lead Generation is Key for Business Growth",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 4,
      image: "images/image_4.jpg",
      day: "21",
      year: "2019",
      month: "August",
      title: "Why Lead Generation is Key for Business Growth",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 5,
      image: "images/image_5.jpg",
      day: "21",
      year: "2019",
      month: "August",
      title: "Why Lead Generation is Key for Business Growth",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 6,
      image: "images/image_6.jpg",
      day: "21",
      year: "2019",
      month: "August",
      title: "Why Lead Generation is Key for Business Growth",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row d-flex">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="/blog-single"
                  className="block-20"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-4 topp">
                    <div className="one">
                      <span className="day">{post.day}</span>
                    </div>
                    <div className="two">
                      <span className="yr">{post.year}</span>
                      <span className="mos">{post.month}</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p>{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li>
                  <a href="#">&lt;</a>
                </li>
                <li className="active">
                  <span>1</span>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">&gt;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
