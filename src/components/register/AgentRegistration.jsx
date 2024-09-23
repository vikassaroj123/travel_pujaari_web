import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection
import { auth, db } from "../../firebase.js"; // Firebase auth and Firestore

const AgentRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    landline: "",
    mobile: "",
    email: "",
    password: "",
    address: "",
    landmark: "",
    postalCode: "",
    country: "",
    state: "",
    city: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // For navigation after successful registration

  // Handle input changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission for user registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      const { email, password } = formData;

      // Firebase registration with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Update user's displayName with firstName
      await updateProfile(user, {
        displayName: formData.firstName + " " + formData.lastName,
      });

      // Save additional user information in Firestore

      setSuccess(true); // Set success to true
      await setDoc(doc(db, "users", user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        landline: formData.landline,
        mobile: formData.mobile,
        email: formData.email,
        address: formData.address,
        landmark: formData.landmark,
        postalCode: formData.postalCode,
        country: formData.country,
        state: formData.state,
        city: formData.city,
      });

      // Redirect to the home page after a brief delay
      setTimeout(() => {
        navigate("/");
        console.log("Navigation triggered");
      }, 1500);
    } catch (err) {
      console.error("Error during registration:", err.message);
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <div className="Agent_container">
      <div className="Agent_Registration_container">
        <div className="Agent_Registration_form-container">
          <h2>Travel Pujaari – Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="Agent_Registration_section-title">
              PERSONAL DETAILS
            </div>
            <div className="Agent_Registration_form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name*"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name*"
                required
              />
            </div>
            <div className="Agent_Registration_form-group">
              <input
                type="text"
                name="landline"
                value={formData.landline}
                onChange={handleInputChange}
                placeholder="landline"
              />
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile*"
                required
              />
            </div>
            <div className="Agent_Registration_form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-mail ID*"
                required
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password*"
                required
              />
            </div>

            <div className="Agent_Registration_section-title">
              COMMUNICATION DETAILS
            </div>
            <div className="Agent_Registration_form-group">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address*"
                required
              />
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleInputChange}
                placeholder="Landmark"
              />
            </div>
            <div className="Agent_Registration_form-group">
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                placeholder="Postal Code*"
                required
              />
            </div>
            <div className="Agent_Registration_form-group">
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="Select Country">Select Country</option>
                <option value="India">India</option>
                {/* Add your state options here */}
              </select>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              >
                <option value="Select State">Select State</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                {/* Add your state options here */}
              </select>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                style={{ marginTop: "10px" }}
                required
              >
                <option value="Select City">Select City</option>
                <option value="Noida">Noida</option>
                {/* Add your city options here */}
              </select>
            </div>
            <div className="Agent_Registration_form-group">
              <input type="checkbox" id="robot-check" required />
              <label htmlFor="robot-check">I'm not a robot</label>
            </div>

            {success && (
              <p style={{ color: "green" }}>Registration successful!</p>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">SUBMIT</button>
          </form>
        </div>

        <div className="Agent_Registration_services-container">
          <h2>Array of Services</h2>
          <p>
            Our Partnering Agents get to Book Multiple Travel & Leisure Services
            at Best Prices
          </p>
          <div className="Agent_Registration_services-grid">
            <div className="Agent_Registration_service-item">
              <i className="fas fa-plane"></i> Flights
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-bus"></i> Bus
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-train"></i> Rail
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-hotel"></i> Hotel
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-ship"></i> Cruise
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-car"></i> Car
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-shield-alt"></i> Travel Insurance
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-utensils"></i> In-Flight Services
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-briefcase"></i> Baggage Insurance
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-chair"></i> Airport Lounge
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-ticket-alt"></i> Theme Park Tickets
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-phone"></i> International Calling Card
            </div>
            <div className="Agent_Registration_service-item">
              <i className="fas fa-ellipsis-h"></i> Many More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentRegistration;
