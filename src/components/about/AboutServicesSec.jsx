/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const AboutServicesSec = () => {
  return (
    <section className="ftco-section services-section bg-light">
      <div className="container">
        <div className="row d-flex">
          {/* Left column: Heading and description */}
          <div className="col-md-6 order-md-last heading-section pl-md-5 ftco-animate">
            <h2 className="mb-4">It's time to start your adventure</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia.
            </p>
            <p>
              <a href="#" className="btn btn-primary py-3 px-4">
                Search Destination
              </a>
            </p>
          </div>

          {/* Right column: Services */}
          <div className="col-md-6">
            <div className="row">
              {/* Service 1 */}
              <div className="col-md-6 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block">
                  <div className="icon">
                    <span className="flaticon-paragliding"></span>
                  </div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Activities</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary
                    </p>
                  </div>
                </div>
              </div>
              {/* Service 2 */}
              <div className="col-md-6 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block">
                  <div className="icon">
                    <span className="flaticon-route"></span>
                  </div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Travel Arrangements</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary
                    </p>
                  </div>
                </div>
              </div>
              {/* Service 3 */}
              <div className="col-md-6 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block">
                  <div className="icon">
                    <span className="flaticon-tour-guide"></span>
                  </div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Private Guide</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary
                    </p>
                  </div>
                </div>
              </div>
              {/* Service 4 */}
              <div className="col-md-6 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block">
                  <div className="icon">
                    <span className="flaticon-map"></span>
                  </div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Location Manager</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServicesSec;
