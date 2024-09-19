import React, { useState } from "react";

const Packages = () => {
  const [quoteType, setQuoteType] = useState("instant");
  const [destination, setDestination] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [hotelRating, setHotelRating] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [numberOfNights, setNumberOfNights] = useState(1);
  const [landOnly, setLandOnly] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const packageDetails = {
      quoteType,
      destination,
      rooms,
      guests,
      hotelRating,
      departureDate,
      numberOfNights,
      landOnly,
    };
    console.log("Get Instant Quotes with params:", packageDetails);
  };

  return (
    <div className="p-4 bg-white shadow-sm rounded">
      <form onSubmit={handleSubmit}>
        {/* 1st row: Radio buttons for Instant Quotes and Offline Inquiry */}
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="form-group">
              <label>Quote Type</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="quoteType"
                  id="instantQuote"
                  value="instant"
                  checked={quoteType === "instant"}
                  onChange={() => setQuoteType("instant")}
                />
                <label className="form-check-label" htmlFor="instantQuote">
                  Instant Quotes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="quoteType"
                  id="offlineInquiry"
                  value="offline"
                  checked={quoteType === "offline"}
                  onChange={() => setQuoteType("offline")}
                />
                <label className="form-check-label" htmlFor="offlineInquiry">
                  Offline Inquiry
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd row: Enter destination */}
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="destination">Enter Destination</label>
              <input
                type="text"
                className="form-control"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter destination"
              />
            </div>
          </div>
        </div>

        {/* 3rd row: Select rooms/guests and select hotel rating */}
        <div className="row mb-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
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
        </div>

        {/* Hotel Rating */}
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="hotelRating">Hotel Rating</label>
              <select
                className="form-control"
                id="hotelRating"
                value={hotelRating}
                onChange={(e) => setHotelRating(e.target.value)}
              >
                <option value="">Select Rating</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Star
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 4th row: Departure date and Number of nights */}
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="departureDate">Departure Date</label>
              <input
                type="date"
                className="form-control"
                id="departureDate"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="numberOfNights">Number of Nights</label>
              <input
                type="number"
                className="form-control"
                id="numberOfNights"
                value={numberOfNights}
                onChange={(e) => setNumberOfNights(e.target.value)}
                min={1}
              />
            </div>
          </div>
        </div>

        {/* 5th row: Land only checkbox */}
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="landOnly"
                checked={landOnly}
                onChange={() => setLandOnly(!landOnly)}
              />
              <label className="form-check-label" htmlFor="landOnly">
                Land Only
              </label>
            </div>
          </div>
        </div>

        {/* Get Instant Quotes Button */}
        <button type="submit" className="btn btn-primary w-100 mt-4">
          Get Instant Quotes
        </button>
      </form>
    </div>
  );
};

export default Packages;
