/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const TourDestinations = () => {
  const destinations = [
    {
      img: "images/destination-1.jpg",
      price: "$300/person",
      days: "3N/4D",
      name: "Dubai",
      location: "Dubai",
    },
    {
      img: "images/destination-2.jpg",
      price: "$250/person",
      days: "5N/6D",
      name: "Bali, Indonesia",
      location: "Bali, Indonesia",
    },
    {
      img: "images/destination-3.jpg",
      price: "$299/person",
      days: "3N/4D",
      name: "Vietnam",
      location: "Vietnam, Indonesia",
    },
    {
      img: "images/destination-4.jpg",
      price: "$179/person",
      days: "2N/3D",
      name: "Hong Kong",
      location: "Hong Kong, Indonesia",
    },
    {
      img: "images/destination-5.jpg",
      price: "$499/person",
      days: "5N/6D",
      name: "Germany",
      location: "Germany",
    },
    {
      img: "images/destination-6.jpg",
      price: "$430/person",
      days: "6N/7D",
      name: "Turkey",
      location: "Turkey, Indonesia",
    },
  ];

  return (
    <section className="ftco-section ftco-no-pt" style={{ marginTop: "55px" }}>
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h2 className="mb-4">Tour Destination</h2>
          </div>
        </div>
        <div className="row">
          {destinations.map((destination, index) => (
            <div key={index} className="col-md-4 ftco-animate">
              <div className="project-wrap">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: `url(${destination.img})` }}
                ></a>
                <div className="text p-4">
                  <span className="price">{destination.price}</span>
                  <span className="days">{destination.days}</span>
                  <h3>
                    <a href="#">{destination.name}</a>
                  </h3>
                  <p className="location">
                    <span className="ion-ios-map"></span> {destination.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourDestinations;
