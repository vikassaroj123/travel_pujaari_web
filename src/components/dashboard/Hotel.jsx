import emailjs from "emailjs-com";
import { useState } from "react";

const Hotel = () => {
  const [city, setCity] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [area, setArea] = useState("");
  const [starCategory, setStarCategory] = useState("");
  const [nationality, setNationality] = useState("");
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [breakfastIncluded, setBreakfastIncluded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchParams = {
      city,
      checkInDate,
      checkOutDate,
      from_name: "Shivansh Gupta",
      to_name: "Vikas",
      message: "Hello",
      rooms,
      guests,
      area,
      starCategory,
      nationality,
      freeCancellation,
      breakfastIncluded,
    };
    console.log("Search Hotels with params:", searchParams);
    emailjs
      .send(
        "service_yn5mtoc",
        "template_7vjaro9",
        searchParams,
        "RXmUN7rgv7MKmFSpE"
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <div className="p-4 bg-white shadow-sm rounded">
      <form onSubmit={handleSubmit}>
        {/* 1st row: Enter city, area, or hotel name */}
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="city">Enter City, Area, or Hotel Name</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter location"
              />
            </div>
          </div>
        </div>

        {/* 2nd row: Check-in and Check-out dates */}
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="checkInDate">Check-in Date</label>
              <input
                type="date"
                className="form-control"
                id="checkInDate"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="checkOutDate">Check-out Date</label>
              <input
                type="date"
                className="form-control"
                id="checkOutDate"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 3rd row: Select rooms and guests, and select area */}
        <div className="row mb-3">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="rooms">Rooms</label>
              <select
                className="form-control"
                id="rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Room{num > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="guests">Guests</label>
              <select
                className="form-control"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Guest{num > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="area">Select Area</label>
              <input
                type="text"
                className="form-control"
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Enter area"
              />
            </div>
          </div>
        </div>

        {/* 4th row: Select star category and nationality */}
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="starCategory">Star Category</label>
              <select
                className="form-control"
                id="starCategory"
                value={starCategory}
                onChange={(e) => setStarCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Star
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="nationality">Select Nationality</label>
              <select
                className="form-control"
                id="nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option value="">Select Nationality</option>
                <option value="Indian">Indian</option>
                <option value="Non-Indian">Non-Indian</option>
              </select>
            </div>
          </div>
        </div>

        {/* 5th row: Filters (Free Cancellation and Breakfast Included) */}
        <h6>Other filters</h6>
        <div className="d-flex">
          <div className="d-flex form-check mr-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="freeCancellation"
              checked={freeCancellation}
              style={{ transform: "scale(1.5)" }}
              onChange={() => setFreeCancellation(!freeCancellation)}
            />
            <label className="form-check-label" htmlFor="freeCancellation">
              Free Cancellation
            </label>
          </div>
          <div className="d-flex form-check mr-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="breakfastIncluded"
              checked={breakfastIncluded}
              style={{ transform: "scale(1.5)" }}
              onChange={() => setBreakfastIncluded(!breakfastIncluded)}
            />
            <label className="form-check-label" htmlFor="breakfastIncluded">
              Breakfast Included
            </label>
          </div>
        </div>

        {/* Search Button */}
        <button type="submit" className="btn btn-primary w-100 mt-4">
          SEARCH HOTELS
        </button>
      </form>
    </div>
  );
};

export default Hotel;
