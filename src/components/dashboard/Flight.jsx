import emailjs from "emailjs-com";
import { useState } from "react";

const Flight = () => {
  const [tripType, setTripType] = useState("roundTrip"); // Default is round trip

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const formData = {
      tripType,
      from_name: "Shivansh Gupta",
      to_name: "Vikas",
      message: "Hello",
      fromLocation: form.fromLocation.value,
      toLocation: form.toLocation.value,
      departDate: form.departDate.value,
      returnDate: form.returnDate.value,
      travellers: form.travellers.value,
      class: form.class.value,
    };

    emailjs
      .send(
        "service_yn5mtoc",
        "template_2jig6mt",
        formData,
        "RXmUN7rgv7MKmFSpE"
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        // Optionally, you can reset the form or show a success message
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <div className="p-4 bg-white shadow-sm rounded">
      {/* Trip Type Selection */}
      <div className="d-flex mb-3">
        <input
          type="radio"
          name="oneWay"
          id="oneWay"
          value="oneWay"
          onChange={() => setTripType("oneWay")}
        />{" "}
        <label>One Way</label>
        <input
          type="radio"
          name="roundTrip"
          id="roundTrip"
          value="roundTrip"
          onChange={() => setTripType("roundTrip")}
        />{" "}
        <label>Round Trip</label>
        <input
          type="radio"
          name="multicity"
          id="multicity"
          value="multicity"
          onChange={() => setTripType("multicity")}
        />{" "}
        <label>Multicity</label>
      </div>

      {/* Flight Search Form */}
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="fromLocation">From</label>
              <input
                type="text"
                className="form-control"
                id="fromLocation"
                name="fromLocation"
                placeholder="Delhi, India (DEL)"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="toLocation">To</label>
              <input
                type="text"
                className="form-control"
                id="toLocation"
                name="toLocation"
                placeholder="Denpasar Bali, Indonesia (DPS)"
                required
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="departDate">Depart</label>
              <input
                type="date"
                className="form-control"
                id="departDate"
                name="departDate"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="returnDate">Return</label>
              <input
                type="date"
                className="form-control"
                id="returnDate"
                name="returnDate"
                required
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="travellers">Travellers</label>
              <select
                className="form-control"
                id="travellers"
                name="travellers"
                required
              >
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="class">Class</label>
              <select className="form-control" id="class" name="class" required>
                <option>All Classes</option>
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-4">
          SEARCH FLIGHTS
        </button>
      </form>
    </div>
  );
};

export default Flight;
