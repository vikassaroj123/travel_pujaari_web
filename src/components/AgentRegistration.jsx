import React from "react";

const AgentRegistration = () => {
  return (
    <div className="Agent_container">
      <div className="Agent_Registration_container">
        <div className="Agent_Registration_form-container">
          <h2>Travel Pujaari – Registration</h2>
          <form>
            <div className="Agent_Registration_section-title">
              PERSONAL DETAILS
            </div>
            <div className="Agent_Registration_form-group">
              <input type="text" placeholder="First Name*" required />
              <input type="text" placeholder="Last Name*" required />
            </div>
            <div className="Agent_Registration_form-group">
              <input type="text" placeholder="Landline" />
              <input type="text" placeholder="Mobile*" required />
            </div>
            <div className="Agent_Registration_form-group">
              <input type="email" placeholder="E-mail ID*" required />
            </div>

            <div className="Agent_Registration_section-title">
              COMMUNICATION DETAILS
            </div>
            <div className="Agent_Registration_form-group">
              <input type="text" placeholder="Address*" required />
              <input type="text" placeholder="Landmark*" />
            </div>
            <div className="Agent_Registration_form-group">
              <input type="text" placeholder="Postal Code*" required />
            </div>
            <div className="Agent_Registration_form-group">
              <select required>
                <option>India</option>
              </select>
              <select required id="state">
                <option value="">State</option>
                {/* Options omitted for brevity */}
              </select>
              <select style={{ marginTop: "10px" }} required id="city">
                <option value="">City</option>
              </select>
            </div>
            <div className="Agent_Registration_form-group">
              <input type="checkbox" id="robot-check" required />
              <label htmlFor="robot-check">I'm not a robot</label>
            </div>
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
