import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Hero from "../images/hero.jpg";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    // ✅ Set login status in localStorage
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard"); // ✅ Navigate to dashboard
  };

  return (
    <div className="full-container" style={{ backgroundImage: `url(${Hero})`, height: "100vh", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
      <div className="form-box" style={{ width: "400px", padding: "30px", marginRight: "430px", height: "400px", borderRadius: "16px", background: "rgba(31, 5, 5, 0.23)", backdropFilter: "blur(18px)", boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)", border: "1px solid rgba(248, 238, 150, 0.86)" }}>
        <div className="brand-wrapper" style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1 className="brand" style={{ fontSize: "32px", color: "#f8bf03d3", fontWeight: "bold" }}>Property<span style={{ color: "#fff" }}>Pro</span></h1>
          <p className="lead text-black">Your trusted properties across India</p>
        </div>
        <Form onSubmit={handleLogin}>
          <div className="text-white">Email</div>
          <Form.Control type="email" placeholder="Enter your email" className="input-box mb-3" required />
          <div className="text-white">Password</div>
          <div className="password-box position-relative mb-3">
            <Form.Control type={showPassword ? "text" : "password"} placeholder="Enter your password" required />
            <span className="eye-icon" onClick={togglePassword} style={{ position: "absolute", right: "12px", top: "9px", cursor: "pointer", color: "#ccc" }}>
              <i className="fa-regular fa-eye"></i>
            </span>
          </div>
          <button type="submit" className="btn btn-warning w-100 fw-semibold mt-2">Login</button>
          <p className="signup-text text-center mt-3">Don't have an account? <a href="/signup" style={{ color: "#0a0a0aff" }}>Sign up</a></p>
        </Form>
      </div>
    </div>
  );
}
