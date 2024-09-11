/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const posts = [
  {
    id: 1,
    date: {
      day: "21",
      year: "2019",
      month: "August",
    },
    image: "images/image_1.jpg",
    title: "Why Lead Generation is Key for Business Growth",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "/blog-single",
  },
  {
    id: 2,
    date: {
      day: "21",
      year: "2019",
      month: "August",
    },
    image: "images/image_2.jpg",
    title: "Why Lead Generation is Key for Business Growth",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "/blog-single",
  },
  {
    id: 3,
    date: {
      day: "21",
      year: "2019",
      month: "August",
    },
    image: "images/image_3.jpg",
    title: "Why Lead Generation is Key for Business Growth",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "/blog-single",
  },
];

const RecentPosts = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h2 className="mb-4">Recent Post</h2>
          </div>
        </div>
        <div className="row d-flex ftco-animate">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4 d-flex ">
              <div className="blog-entry justify-content-end">
                <a
                  href={post.link}
                  className="block-20"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-4 topp">
                    <div className="one">
                      <span className="day">{post.date.day}</span>
                    </div>
                    <div className="two">
                      <span className="yr">{post.date.year}</span>
                      <span className="mos">{post.date.month}</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <p>{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
