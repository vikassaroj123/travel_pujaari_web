import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { auth } from "../firebase";

// Helper function to dynamically load external scripts
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
};

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  useEffect(() => {
    const loadExternalScripts = async () => {
      try {
        // Load external JS files one by one
        await loadScript("/js/jquery-3.2.1.min.js");
        await loadScript("/js/jquery-migrate-3.0.1.min.js");
        await loadScript("/js/popper.min.js");
        await loadScript("/js/bootstrap.min.js");
        await loadScript("/js/jquery.easing.1.3.js");
        await loadScript("/js/jquery.waypoints.min.js");
        await loadScript("/js/jquery.stellar.min.js");
        await loadScript("/js/owl.carousel.min.js");
        await loadScript("/js/jquery.magnific-popup.min.js");
        await loadScript("/js/aos.js");
        await loadScript("/js/jquery.animateNumber.min.js");
        await loadScript("/js/bootstrap-datepicker.js");
        await loadScript("/js/scrollax.min.js");
        await loadScript("/js/main.js"); // Ensure this script initializes all components correctly

        // Initialize any global plugins or re-initialize scripts if necessary
        console.log("Scripts loaded and initialized successfully!");

        // Example: if you need to initialize a plugin or library manually after loading
        // If your `main.js` contains initialization code, it might already handle this
      } catch (error) {
        console.error("Error loading external scripts:", error);
      }
    };

    // Call the function to load scripts when the app loads
    loadExternalScripts();
  }, []); // Empty dependency array means this runs once when the app loads

  // Format month and year (e.g., Sept '24)
  const formatMonthYear = (locale, date) => {
    const month = date.toLocaleString("default", { month: "short" }); // e.g., Sept
    const year = date.getFullYear().toString().slice(-2); // e.g., 24
    return `${month} '${year}`;
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* First Sidebar - Navigation */}
        <nav className="col-md-2 d-none d-md-block bg-dark text-white p-4">
          <h2 className="text-light">Navigation</h2>
          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <a className="nav-link text-light" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/ticket">
                Tickets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/tansaction">
                Transaction
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="/"
                onClick={handleLogout}
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="col-md-7 bg-light p-4">
          <h2 className="mb-4">Dashboard Content</h2>
          <div className="p-4 bg-white shadow-sm rounded">
            <p>
              This is the main content area where you can display data, charts,
              and other information.
            </p>
            {/* Add more detailed content here */}
          </div>
        </main>

        {/* Second Sidebar - Profile and Calendar */}
        <aside className="col-md-3 bg-white p-4">
          {/* Profile Section */}
          <div className="d-flex align-items-center justify-content-center text-center mb-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="rounded-circle img-fluid mb-3"
              style={{ width: "80px", height: "80px" }}
            />
            <h5>Shivansh Gupta</h5>
          </div>

          {/* Calendar Section */}
          <div>
            <h4 className="text-center mb-3">Calendar</h4>
            <Calendar
              onChange={setDate}
              value={date}
              formatMonthYear={formatMonthYear}
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
