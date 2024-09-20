import emailjs from "emailjs-com";
import { useState } from "react";

const Visa = () => {
  const [destination, setDestination] = useState("");
  const [visaType, setVisaType] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [nationality, setNationality] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const visaDetails = {
      destination,
      from_name: "Shivansh Gupta",
      to_name: "Vikas",
      message: "Hello",
      departureDate,
      returnDate,
      travelers,
      nationality,
    };

    console.log("Visa Details:", visaDetails);

    // Replace with your EmailJS details
    emailjs
      .send(
        "service_yn5mtoc",
        "template_7vjaro9",
        visaDetails,
        "RXmUN7rgv7MKmFSpE"
      )
      .then((response) => {
        console.log("Visa request sent successfully", response);
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending visa request", error);
      });
  };

  return (
    <div className="p-4 bg-white shadow-sm rounded">
      <form onSubmit={handleSubmit}>
        {/* 1st row: Destination and Visa Type */}
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="destination">Destination and Visa Type</label>
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

        {/* 2nd row: Departure Date and Tentative Return Date */}
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
              <label htmlFor="returnDate">Tentative Return Date</label>
              <input
                type="date"
                className="form-control"
                id="returnDate"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 3rd row: Select Travelers and Nationality */}
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="travelers">Travelers</label>
              <select
                className="form-control"
                id="travelers"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Traveler{num > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                className="form-control"
                id="nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                placeholder="Enter nationality"
              />
            </div>
          </div>
        </div>

        {/* Apply for Visa Button */}
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Apply for Visa
        </button>
      </form>
    </div>
  );
};

export default Visa;
