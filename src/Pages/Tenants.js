import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShieldAlt,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

function Tenants() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/rentals");
  };

  return (
    <div
      className="tenant-page container-fluid"
      style={{
        paddingTop: "130px", // fixes navbar overlap
        paddingBottom: "80px",
        background: "linear-gradient(135deg, #fdf7e3 0%, #fff3c4 100%)",
      }}
    >
      {/* HEADER */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h1
          className="fw-bold mb-3"
          style={{ color: "#ffb300", fontSize: "3rem", letterSpacing: "1px" }}
        >
          Renting Made Modern & Easy
        </h1>
        <p className="lead text-muted" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Discover comfortable, budget-friendly, and verified rental homes backed by
          trusted landlords and digital rental services designed for the modern tenant.
        </p>
      </div>

      {/* MAIN CARDS SECTION */}
      <div className="container">
        <div className="row g-4">

          {/* Left Card */}
          <div className="col-md-6" data-aos="fade-right">
            <div className="tenant-card shadow-lg">
              <h4 className="fw-bold text-dark mb-3 d-flex align-items-center">
                <FaShieldAlt className="me-2 text-warning fs-3" />
                Why Rent With Us?
              </h4>

              <p className="text-muted">
                Renting your next home should be stress-free, secure, and fully transparent.
                We simplify the process using next-gen tools, verified listings, and digital
                support.
              </p>

              <ul className="tenant-list mt-3">
                <li>✔ Verified Rental Properties Only</li>
                <li>✔ Zero-Brokerage Homes Available</li>
                <li>✔ Safe, Verified Landlords</li>
                <li>✔ Transparent Rent & Security Deposit</li>
                <li>✔ Quick Online Rental Agreement Assistance</li>
              </ul>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="tenant-card shadow-lg">
              <h4 className="fw-bold text-dark mb-3 d-flex align-items-center">
                <FaHome className="me-2 text-warning fs-3" />
                What You Get
              </h4>

              <p className="text-muted">
                Explore thousands of homes built for every kind of tenant—from families to
                working professionals & students. Experience the future of renting.
              </p>

              <ul className="tenant-list mt-3">
                <li>🏠 Fully-Furnished & Semi-Furnished Rentals</li>
                <li>🔐 Secure Digital Agreements</li>
                <li>💬 Direct Chat with Landlords</li>
                <li>📅 Instant Visit Scheduling</li>
                <li>💳 Online Monthly Rent Payments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="text-center mt-5" data-aos="zoom-in">
          <button
            className="explore-btn btn btn-warning text-dark fw-semibold px-5 py-3 rounded-pill"
            onClick={handleExplore}
            style={{
              fontSize: "1.2rem",
              boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
            }}
          >
            Explore Rentals <FaArrowRight className="ms-2" />
          </button>
        </div>
      </div>

      {/* CUSTOM CSS */}
      <style>{`
        .tenant-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          padding: 35px;
          border-radius: 20px;
          transition: all 0.35s ease;
          border: 1px solid rgba(255, 193, 7, 0.25);
        }

        .tenant-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          background: rgba(255, 255, 255, 0.92);
        }

        .tenant-list li {
          background: transparent;
          border: none;
          padding: 10px 0;
          font-size: 0.95rem;
          color: #444;
          border-bottom: 1px dashed #ddd;
        }

        .tenant-list li:last-child {
          border-bottom: none;
        }

        .explore-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 16px 30px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem !important;
          }
          .tenant-card {
            padding: 25px;
          }
        }
      `}</style>
    </div>
  );
}

export default Tenants;
