import React from "react";

const ContactFormSection = () => {
  return (
    <section className="ftco-section contact-section">
      <div className="container">
        <div className="row block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form action="#" className="bg-light p-5 contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>

          <div className="col-md-6 d-flex">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="420"
                  height="560"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Parsvnath%20Paradise,%20B-12,%20Mohan%20Nagar,%20Rajinder%20Nagar%20Industrial%20Area,%20Rajendra%20Nagar,%20Ghaziabad,%20Uttar%20Pradesh%20201007&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="Google Map"
                ></iframe>
                <a href="https://embedgooglemap.net/124/">vivarium 123movies</a>
                <br />
                <style>
                  {`
                  .mapouter {
                    position: relative;
                    text-align: right;
                    height: 560px;
                    width: 420px;
                  }
                  .gmap_canvas {
                    overflow: hidden;
                    background: none !important;
                    height: 560px;
                    width: 420px;
                  }
                `}
                </style>
                <a href="https://www.embedgooglemap.net">google maps embed</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
