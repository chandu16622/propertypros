import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Hero from "../images/hero.jpg";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
        }

        /* FULL BACKGROUND */
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

        /* SAME GLASS BOX STYLE AS LOGIN */
        .form-box {
          width: 330px;
          padding: 30px;
          margin-right: 600px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
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
          color: #eab308;
          font-weight: bold;
        }
        .tagline {
          margin-bottom: 15px;
          color: #fff;
          font-size: 14px;
        }

        .input-box {
          margin-bottom: 15px;
        }

        .password-box {
          position: relative;
        }

        .eye-icon {
          position: absolute;
          right: 12px;
          top: 9px;
          cursor: pointer;
          color: #ccc;
        }

        .signup-btn {
          width: 100%;
          padding: 10px;
          background: #ffc403fa;
          border: none;
          color: white;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
        }

        .login-text {
          text-align: center;
          margin-top: 15px;
          font-size: 14px;
          color: #fff;
        }
          .password-box {
  position: relative;
  margin-bottom: 15px;   /* ADD THIS */
}

      `}</style>

      <div className="full-container">

        <div className="form-box">
          <div className="brand-wrapper">
            <h1 className="brand">Property Pro</h1>
            <p className="tagline text-black">Join us and explore properties across India</p>
          </div>

          <Form onSubmit={handleSignup}>
            <div className="text-white">Full Name</div>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              className="input-box"
              required
            />

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
                placeholder="Create a password"
                required
              />
              <span className="eye-icon" onClick={togglePassword}>
                <i className="fa-regular fa-eye"></i>
              </span>
            </div>

            <button type="submit" className="signup-btn">
              Create Account
            </button>

            <p className="login-text">
              Already have an account?{" "}
              <span
                style={{ color: "#0a0a0aff", cursor: "pointer", fontWeight: 600 }}
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}
