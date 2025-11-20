import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Hero from "../images/hero.jpg";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
        }

        /* FULL BACKGROUND IMAGE */
        .full-container {
          height: 100vh;
          width: 100%;
          background-image: url(${Hero});
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        /* GLASS FORM ON RIGHT */
        .form-box {
          width: 400px;
          padding: 30px;
          margin-right:430px;
          height: 400px;
          border-radius: 16px;
          background: rgba(31, 5, 5, 0.23);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(248, 238, 150, 0.86);
        }

        .brand-wrapper {
          text-align: center;
          margin-bottom: 20px;
        }

        .brand {
          font-size: 32px;
          color: #f8bf03d3;
          font-weight: bold;
        }

        .tagline {
          margin-bottom: 20px;
          color: #fff;
          font-size: 14px;
        }

        .text-white {
          color: #fff;
        }

        .input-box {
          margin-bottom: 15px;
        }

        .password-box {
          position: relative;
          margin-bottom: 10px;
        }

        .eye-icon {
          position: absolute;
          right: 12px;
          top: 9px;
          cursor: pointer;
          color: #ccc;
        }

        .login-btn {
          width: 100%;
          padding: 10px;
          background: #e2b00ad3;
          border: none;
          color: white;
          border-radius: 8px;
          font-size: 16px;
        }

        .signup-text {
          text-align: center;
          margin-top: 15px;
          font-size: 14px;
          color: #fff;
        }
      `}</style>

      <div className="full-container">

        <div className="form-box">
          <div className="brand-wrapper">
            <h1 className="brand">Property<span className="text-white">Pro</span></h1>
            <p className="lead  text-black">Your trusted properties across India </p>
          </div>

          <Form onSubmit={handleLogin}>
            <div className="text-white">Email</div>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="input-box"
              required
            />

            <div className="text-white">Password</div>
            <div className="password-box">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <span className="eye-icon" onClick={togglePassword}>
                <i className="fa-regular fa-eye"></i>
              </span>
            </div>

            <button
                  type="submit"
                  className="btn btn-warning w-100 fw-semibold mt-2"
                >
                  Login
                </button>

            <p className="signup-text">
              Don't have an account? <a href="/signup" style={{ color: "#0a0a0aff" }}>Sign up</a>
            </p>
          </Form>
        </div>

      </div>
    </>
  );
}
