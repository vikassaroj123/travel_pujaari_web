import React from "react";

const CounterSection = () => {
  return (
    <section className="ftco-counter img" id="section-counter">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 d-flex">
            <div
              className="img d-flex align-self-stretch"
              style={{ backgroundImage: "url(images/about.jpg)" }}
            ></div>
          </div>
          <div className="col-md-6 pl-md-5 py-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate">
                <h2 className="mb-4">
                  Make Your Tour Memorable and Safe With Us
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center mb-4">
                  <div className="text">
                    <strong className="number" data-number="300">
                      0
                    </strong>
                    <span>Successful Tours</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center mb-4">
                  <div className="text">
                    <strong className="number" data-number="24000">
                      0
                    </strong>
                    <span>Happy Tourist</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center mb-4">
                  <div className="text">
                    <strong className="number" data-number="200">
                      0
                    </strong>
                    <span>Place Explored</span>
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

export default CounterSection;
