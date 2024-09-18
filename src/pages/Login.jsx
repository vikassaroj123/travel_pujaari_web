// Login.js
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { auth } from "../firebase.js"; // Adjust the path if needed

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to home or another route after successful login
    } catch (error) {
      setError(error.message);
    }
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

  return (
    <>
      <Navbar />
      <div className="container login-container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="text-center mb-4">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  >
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        body,
        html {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow-x: hidden;
        }

        .login-container {
          margin-top: 8%;
          margin-bottom: 5%;
          padding: 20px;
        }

        .card {
          border-radius: 10px;
        }

        .alert {
          margin-bottom: 20px;
        }

        .form-group label {
          margin-bottom: 0.1rem;
          display: flex;
          align-items: start;
        }
      `}</style>
    </>
  );
};

export default Login;
