import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Hero from "../images/hero.jpg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked");

    // ✅ Set login status in localStorage
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard"); // ✅ Navigate to dashboard
  };

  return (
    <>
      <style>{`
        /* FULL BACKGROUND */
        .full-container {
          min-height: 100vh;
          width: 100%;
          background-image: url(${Hero});
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        /* RESPONSIVE GLASS BOX */
        .form-box {
          width: 100%;
          max-width: 420px;
          padding: 30px;
          border-radius: 16px;
          background: rgba(31, 5, 5, 0.23);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(248, 238, 150, 0.86);
          margin: 0 12px;
        }

        .brand-wrapper {
          text-align: center;
          margin-bottom: 18px;
        }

        .brand {
          font-size: 32px;
          color: #f8bf03d3;
          font-weight: bold;
        }

        .brand span {
          color: #fff;
        }

        .lead {
          color: #fff;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .text-white {
          color: #fff;
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: 500;
        }

        .input-box {
          margin-bottom: 15px;
          width: 100%;
        }

        .password-box {
          position: relative;
          margin-bottom: 15px;
        }

        .password-box .form-control {
          padding-right: 44px;
        }

        .eye-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #ccc;
          font-size: 18px;
          padding: 6px;
          border-radius: 6px;
        }

        .eye-icon:active {
          background: rgba(255,255,255,0.06);
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          background: #ffc403fa;
          border: none;
          color: #0b0b0b;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
          margin-top: 10px;
        }

        .login-btn:hover {
          background: #ffb700;
        }

        .signup-text {
          text-align: center;
          margin-top: 12px;
          font-size: 14px;
          color: #fff;
        }

        .signup-text a {
          color: #0a0a0aff;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }

        .signup-text a:hover {
          color: #ffc403fa;
        }

        /* TABLET */
        @media (max-width: 768px) {
          .form-box {
            padding: 22px;
            max-width: 92%;
          }

          .brand {
            font-size: 28px;
          }

          .lead {
            font-size: 13px;
          }

          .login-btn {
            padding: 12px;
            font-size: 15px;
          }
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .full-container {
            padding: 8px;
            justify-content: center;
            align-items: center;
            background-position: center;
            padding-top: 80px;
            min-height: 100vh;
          }

          .form-box {
            padding: 14px;
            width: 100%;
            max-width: 95%;
            margin: 0 auto;
            border-radius: 10px;
          }

          .brand-wrapper {
            margin-bottom: 12px;
          }

          .brand {
            font-size: 18px;
          }

          .lead {
            font-size: 11px;
            margin-bottom: 10px;
          }

          .text-white {
            font-size: 12px;
            margin-bottom: 6px;
          }

          .input-box {
            margin-bottom: 10px;
            font-size: 14px;
          }

          .password-box {
            margin-bottom: 10px;
          }

          .eye-icon {
            right: 8px;
            font-size: 16px;
            padding: 6px;
            top: 50%;
            transform: translateY(-50%);
          }

          .login-btn {
            padding: 10px;
            font-size: 14px;
            margin-top: 8px;
          }

          .signup-text {
            font-size: 12px;
            margin-top: 10px;
          }

          .signup-text a {
            font-size: 12px;
          }
        }

        /* EXTRA SMALL DEVICES */
        @media (max-width: 360px) {
          .full-container {
            padding: 6px;
            padding-top: 70px;
          }

          .form-box {
            padding: 12px;
            max-width: 98%;
            border-radius: 8px;
          }

          .brand {
            font-size: 16px;
          }

          .lead {
            font-size: 10px;
          }

          .text-white {
            font-size: 11px;
          }

          .login-btn {
            padding: 9px;
            font-size: 13px;
          }

          .eye-icon {
            right: 6px;
            font-size: 14px;
            padding: 5px;
          }

          .input-box {
            font-size: 13px;
          }
        }

        /* VERY SMALL DEVICES (< 320px) */
        @media (max-width: 320px) {
          .form-box {
            padding: 10px;
          }

          .brand {
            font-size: 14px;
          }

          .lead {
            font-size: 9px;
          }

          .text-white {
            font-size: 10px;
          }

          .login-btn {
            padding: 8px;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="full-container">
        <div className="form-box">
          <div className="brand-wrapper">
            <h1 className="brand">Property<span>Pro</span></h1>
            <p className="lead">Your trusted properties across India</p>
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
                className="input-box"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="eye-icon"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={togglePassword}
                style={{ background: "none", border: "none" }}
              >
                <i className={showPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"} aria-hidden="true"></i>
              </button>
            </div>

            <button type="submit" className="login-btn">Login</button>

            <p className="signup-text">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}