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
          max-width: 400px;
          padding: 30px;
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

        .brand span {
          color: #fff;
        }

        .lead {
          color: #fff;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .text-white {
          color: #fff;
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: 500;
        }

        .input-box {
          margin-bottom: 15px;
        }

        .password-box {
          position: relative;
          margin-bottom: 15px;
        }

        .eye-icon {
          position: absolute;
          right: 12px;
          top: 12px;
          cursor: pointer;
          color: #ccc;
          font-size: 16px;
        }

        .login-btn {
          width: 100%;
          padding: 10px;
          background: #ffc403fa;
          border: none;
          color: white;
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
          margin-top: 15px;
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
            padding: 25px;
            max-width: 90%;
          }

          .brand {
            font-size: 28px;
          }

          .lead {
            font-size: 13px;
          }

          .login-btn {
            padding: 12px;
            font-size: 14px;
          }
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .full-container {
            padding: 15px;
            justify-content: center;
          }

          .form-box {
            padding: 20px;
            width: 100%;
            max-width: none;
          }

          .brand {
            font-size: 24px;
          }

          .lead {
            font-size: 12px;
          }

          .signup-text {
            font-size: 12px;
          }

          .text-white {
            font-size: 13px;
          }
        }

        /* EXTRA SMALL DEVICES */
        @media (max-width: 360px) {
          .form-box {
            padding: 15px;
          }

          .brand {
            font-size: 20px;
          }

          .login-btn {
            padding: 10px;
            font-size: 13px;
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
              />
              <span className="eye-icon" onClick={togglePassword}>
                <i className="fa-regular fa-eye"></i>
              </span>
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