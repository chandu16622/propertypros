// src/Pages/Login.js
import React, { useState } from "react";
import logo from "../images/logo.jpg"; // update path if needed

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = () => {
    alert("Google Login Clicked (connect backend here)");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login clicked (add your validation / backend here)");
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-container">

          {/* LEFT SIDE IMAGE */}
          <div className="left-side">
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=80"
              alt="Real Estate"
              className="left-image"
            />
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="right-side">
            <div className="form-box">
              
              {/* Logo */}
              <div className="text-center mb-3">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: 80, height: 80, borderRadius: "10px" }}
                />
              </div>

              <h2 className="fw-bold text-dark text-center mb-2">
                Welcome Back
              </h2>
              <p className="text-muted text-center">
                Login to continue with PropertyPro
              </p>

              {/* LOGIN FORM */}
              <form onSubmit={handleLogin}>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control custom-input mb-3"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control custom-input mb-3"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="btn btn-warning w-100 fw-semibold mt-2">
                  Login
                </button>
              </form>

              <p className="mt-3 text-center">
                Don’t have an account?{" "}
                <a href="#" className="fw-semibold text-dark">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .login-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1400&q=80');
          background-size: cover;
          background-position: center;
          padding: 30px;
        }

        .login-container {
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
          border-radius: 10px;
          padding: 12px;
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

        .divider:before {
          left: 0;
        }

        .divider:after {
          right: 0;
        }

        @media (max-width: 900px) {
          .left-side {
            display: none;
          }
          .right-side {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
