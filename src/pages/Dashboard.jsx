import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Flight from "../components/dashboard/Flight";
import Hotel from "../components/dashboard/Hotel";
import Packages from "../components/dashboard/Packages";
import Visa from "../components/dashboard/Visa";
import { auth, db } from "../firebase";

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
  const [selectedComponent, setSelectedComponent] = useState("Flights");
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);

  // Listen for Firebase auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null);
      console.log(currentUser);
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Fetch user data from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
        } else {
          console.log("No such user document!");
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  useEffect(() => {
    const loadExternalScripts = async () => {
      try {
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
        await loadScript("/js/main.js");
        console.log("Scripts loaded and initialized successfully!");
      } catch (error) {
        console.error("Error loading external scripts:", error);
      }
    };

    loadExternalScripts();
  }, []);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Flights":
        return <Flight />;
      case "Hotels":
        return <Hotel />;
      case "Packages":
        return <Packages />;
      case "Visa":
        return <Visa />;
      default:
        return <Flight />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* First Sidebar - Navigation */}
        <div className="col-md-2 bg-dark text-white p-4 d-none d-md-block">
          <h2 className="text-light">Dashboard</h2>
          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <button
                className="nav-link text-light btn btn-link"
                onClick={() => setSelectedComponent("Flights")}
              >
                Flights
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-light btn btn-link"
                onClick={() => setSelectedComponent("Hotels")}
              >
                Hotels
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-light btn btn-link"
                onClick={() => setSelectedComponent("Packages")}
              >
                Packages
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-light btn btn-link"
                onClick={() => setSelectedComponent("Visa")}
              >
                Visa
              </button>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light btn btn-link"
                onClick={handleLogout}
                href="/"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="col-md-7 bg-light p-4">
          {/* Navbar for component selection */}
          <nav className="mb-4" style={{ backgroundColor: "white" }}>
            <ul className="d-flex">
              {["Flights", "Hotels", "Packages", "Visa"].map((component) => (
                <li
                  key={component}
                  className="nav-item"
                  style={{
                    marginRight: "10px",
                    listStyleType: "none",
                    outline: "none",
                  }}
                >
                  <button
                    className="nav-link"
                    style={{
                      borderBottomWidth:
                        selectedComponent === component ? "2px" : "0",
                      borderBottomColor: "#007bff",
                      borderBottomStyle:
                        selectedComponent === component ? "solid" : "none",
                      color: "black",
                      backgroundColor: "white",
                      outline: "none",
                      borderRadius: "0px",
                    }}
                    onClick={() => setSelectedComponent(component)}
                  >
                    {component}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {renderComponent()} {/* Renders the selected component */}
        </div>

        {/* Second Sidebar - Profile and Calendar */}
        <div className="col-md-3 bg-white p-4">
          <div className="d-flex align-items-center justify-content-center text-center mb-4">
            {/* <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="rounded-circle img-fluid mb-3"
              style={{ width: "80px", height: "80px" }}
            /> */}
            <h5>{currentUser?.displayName}</h5>
          </div>
          <div>
            <h4 className="text-center mb-3">Calendar</h4>
            <Calendar
              onChange={setDate}
              value={date}
              formatMonthYear={(locale, date) =>
                `${date.toLocaleString("default", { month: "short" })} '${date
                  .getFullYear()
                  .toString()
                  .slice(-2)}`
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
