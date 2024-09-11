import React, { useState } from "react";

const BlogSingleSec = () => {
  // States for comment form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log({ name, email, website, message });
  };

  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-md-last ftco-animate py-md-5 mt-md-5">
            <h2 className="mb-3">
              It is a long established fact a reader be distracted
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio
              perferendis et doloribus unde architecto optio laboriosam porro
              adipisci sapiente officiis nemo accusamus ad praesentium? Esse
              minima nisi et. Dolore perferendis, enim praesentium omnis, iste
              doloremque quia officia optio deserunt molestiae voluptates soluta
              architecto tempora.
            </p>
            <p>
              <img src="images/image_6.jpg" alt="" className="img-fluid" />
            </p>
            <p>
              Molestiae cupiditate inventore animi, maxime sapiente optio, illo
              est nemo veritatis repellat sunt doloribus nesciunt! Minima
              laborum magni reiciendis qui voluptate quisquam voluptatem soluta
              illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti
              tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor
              minima esse vero ut ea, repudiandae suscipit!
            </p>
            <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
            <p>
              Temporibus ad error suscipit exercitationem hic molestiae totam
              obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora
              maiores ex architecto voluptatum aut officia doloremque. Error
              dolore voluptas, omnis molestias odio dignissimos culpa ex earum
              nisi consequatur quos odit quasi repellat qui officiis reiciendis
              incidunt hic non? Debitis commodi aut, adipisci.
            </p>
            <p>
              <img src="images/image_4.jpg" alt="" className="img-fluid" />
            </p>
            <p>
              Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
              reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
              tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab
              consectetur suscipit veritatis nulla quos quia aspernatur
              perferendis, libero sint. Error, velit, porro. Deserunt minus,
              quibusdam iste enim veniam, modi rem maiores.
            </p>
            <div className="tag-widget post-tag-container mb-5 mt-5">
              <div className="tagcloud">
                <a href="#" className="tag-cloud-link">
                  Life
                </a>
                <a href="#" className="tag-cloud-link">
                  Sport
                </a>
                <a href="#" className="tag-cloud-link">
                  Tech
                </a>
                <a href="#" className="tag-cloud-link">
                  Travel
                </a>
              </div>
            </div>

            <div className="about-author d-flex p-4 bg-light">
              <div className="bio mr-5">
                <img
                  src="images/person_1.jpg"
                  alt="Author"
                  className="img-fluid mb-4"
                />
              </div>
              <div className="desc">
                <h3>George Washington</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </div>

            <div className="pt-5 mt-5">
              <h3 className="mb-5">6 Comments</h3>
              <ul className="comment-list">
                <li className="comment">
                  <div className="vcard bio">
                    <img src="images/person_1.jpg" alt="Commenter" />
                  </div>
                  <div className="comment-body">
                    <h3>John Doe</h3>
                    <div className="meta">October 03, 2018 at 2:21pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p>
                      <a href="#" className="reply">
                        Reply
                      </a>
                    </p>
                  </div>
                </li>
                {/* Add more comments similarly */}
              </ul>

              <div className="comment-form-wrap pt-5">
                <h3 className="mb-5">Leave a comment</h3>
                <form onSubmit={handleSubmit} className="p-5 bg-light">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input
                      type="url"
                      className="form-control"
                      id="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name=""
                      id="message"
                      cols="30"
                      rows="10"
                      className="form-control"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Post Comment"
                      className="btn py-3 px-4 btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 sidebar ftco-animate bg-light py-md-5">
            <div className="sidebar-box pt-md-5">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon icon-search"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a keyword and hit enter"
                  />
                </div>
              </form>
            </div>
            <div className="sidebar-box ftco-animate">
              <div className="categories">
                <h3>Categories</h3>
                <li>
                  <a href="#">
                    Travel <span>(12)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Tour <span>(22)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Destination <span>(37)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Drinks <span>(42)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Foods <span>(14)</span>
                  </a>
                </li>
              </div>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Recent Blog</h3>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="blog-img mr-4"
                  style={{ backgroundImage: "url(images/image_1.jpg)" }}
                ></a>
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar"></span> August 21, 2019
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person"></span> Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat"></span> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more recent blog posts similarly */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingleSec;
