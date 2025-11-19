// src/Pages/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../images/hero.jpg";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup successful!");
    navigate("/login");
  };

  const handleGoogleSignup = () => {
    alert("Google Signup Clicked!");
  };

  return (
    <>
      {/* BACKGROUND WRAPPER */}
      <div className="signup-wrapper">
        <div className="signup-container">

          {/* LEFT IMAGE SECTION */}
          <div className="left-side">
            <img src={hero} alt="signup-img" className="left-image" />
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="right-side">
            <div className="form-box">

              <h2 className="fw-bold text-dark text-center mb-2">
                Create an Account
              </h2>
              <p className="text-muted text-center">
                Join PropertyPro and explore premium features
              </p>

              {/* SIGNUP FORM */}
              <form onSubmit={handleSignup}>
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control custom-input mb-3"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control custom-input mb-3"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control custom-input mb-3"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="btn btn-warning w-100 fw-semibold mt-2"
                >
                  Create Account
                </button>
              </form>

              {/* LOGIN LINK */}
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <span
                  className="fw-semibold text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .signup-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=80');
          background-size: cover;
          background-position: center;
          padding: 30px;
        }

        .signup-container {
          width: 100%;
          max-width: 1000px;
          display: flex;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(0,0,0,0.15);
        }

        .left-side {
          width: 50%;
        }

        .left-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .right-side {
          width: 50%;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-box {
          width: 100%;
          max-width: 350px;
        }

        .custom-input {
          padding: 12px;
          border-radius: 10px;
        }

        .google-btn {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #ddd;
          background: white;
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }

        .google-btn img {
          width: 20px;
        }

        .google-btn:hover {
          background: #f5f5f5;
        }

        .divider {
          text-align: center;
          margin: 15px 0;
          color: #888;
          font-size: 14px;
          position: relative;
        }

        .divider:before,
        .divider:after {
          content: "";
          height: 1px;
          width: 40%;
          background: #ccc;
          position: absolute;
          top: 50%;
        }

        .divider:before { left: 0; }
        .divider:after { right: 0; }

        @media (max-width: 900px) {
          .left-side { display: none; }
          .right-side { width: 100%; }
        }
      `}</style>
    </>
  );
}
