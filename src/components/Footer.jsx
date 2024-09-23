/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="ftco-footer bg-bottom"
      style={{ backgroundImage: "url(images/footer-bg.jpg)" }}
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Travel Pujaari</h2>
              <p>Far far away, behind the word mountains.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate">
                  <a href="#">
                  <FaXTwitter size={30} style={{ marginTop: "10px" }} />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                   < FaFacebookF size={25} style={{ marginTop: "10px" }} />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    < FaInstagram  size={30} style={{ marginTop: "10px" }}/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="contact.html" className="py-2 d-block">
                    Online Enquiry
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="py-2 d-block">
                    General Enquiries
                  </a>
                </li>
                <li>
                  <a href="Privacy&Policy.html" className="py-2 d-block">
                    Privacy and Policy
                  </a>
                </li>
                <li>
                  <a href="Refund-policy.html" className="py-2 d-block">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Experience</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="py-2 d-block">
                    Adventure
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Hotel and Restaurant
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Beach
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Nature
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">
                      Parsvnath Paradise, C-38, Indira Colony, Rajinder Nagar
                      Industrial Area, Mohan Nagar, Ghaziabad, Uttar Pradesh
                      201007
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-phone"></span>
                      <span className="text">+91 7017371388</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-envelope"></span>
                      <span className="text">mayank@travelpujaari.in</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;{currentYear} All rights reserved Travel Pujaari |
              Developed by{" "}
              <a
                href="https://www.webinix.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                WebInix Solutions Pvt Ltd
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
