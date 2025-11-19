import React from "react";
import { FaUserTie, FaHome, FaArrowRight } from "react-icons/fa";

function Sellers() {
  return (
    <>
     {/* MAIN CONTENT */}
      <div
        className="container-fluid"
        style={{
          paddingTop: "130px",
          paddingBottom: "80px",
          background: "linear-gradient(135deg, #fdf7e3 0%, #fff3c4 100%)",
        }}
      >
        <div className="text-center mb-5" data-aos="fade-up">
          <h1
            className="fw-bold mb-3"
            style={{ color: "#ffb300", fontSize: "3rem", letterSpacing: "1px" }}
          >
            Sell Your Property With Confidence
          </h1>
          <p
            className="lead text-muted"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Get the best price with expert guidance, premium marketing, and verified buyer connections.
          </p>
        </div>

        <div className="container">
          <div className="row g-4">
            {/* LEFT CARD */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="seller-card shadow-lg">
                <h4 className="fw-bold text-dark mb-3 d-flex align-items-center">
                  <FaUserTie className="me-2 text-warning fs-3" />
                  Why Sell With Us?
                </h4>

                <p className="text-muted">
                  Selling a property needs strategy, reach, and trustworthy buyers.
                  We simplify the process with valuation, marketing & documentation support.
                </p>

                <ul className="seller-list mt-3">
                  <li>✔ Accurate Property Valuation</li>
                  <li>✔ Verified & Genuine Buyers Only</li>
                  <li>✔ High-Quality Photos & Virtual Tours</li>
                  <li>✔ Support for Agreements & Registration</li>
                  <li>✔ Expert Assistance for Best Price Negotiation</li>
                </ul>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="seller-card shadow-lg">
                <h4 className="fw-bold text-dark mb-3 d-flex align-items-center">
                  <FaHome className="me-2 text-warning fs-3" />
                  What You Get
                </h4>

                <p className="text-muted">
                  From premium marketing to dedicated support – we ensure your property
                  reaches the right buyers quickly and efficiently.
                </p>

                <ul className="seller-list mt-3">
                  <li>📸 Professional Photos & Video Walkthroughs</li>
                  <li>📢 Premium Advertising & Online Promotion</li>
                  <li>📝 Legal Documentation & Registration Help</li>
                  <li>💼 Dedicated Selling Manager</li>
                  <li>🎯 Faster Lead Generation From Verified Buyers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className="text-center mt-5" data-aos="zoom-in">
            <button
              className="btn btn-warning text-dark fw-semibold px-5 py-3 rounded-pill explore-btn"
              style={{
                fontSize: "1.2rem",
                boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
              }}
            >
              List Your Property <FaArrowRight className="ms-2" />
            </button>
          </div>
        </div>
      </div>

      {/* CUSTOM STYLES */}
      <style>{`
        /* HERO SECTION */
        .sellers-hero {
          height: 65vh;
          min-height: 400px;
          background-image: url("https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          position: relative;
          padding-top: 80px;
        }

        .sellers-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
        }

        .hero-glass {
          position: relative;
          z-index: 2;
          max-width: 700px;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
        }

        .hero-title {
          font-size: 2.8rem;
          color: #fff3cd;
        }

        .hero-subtitle {
          color: #f8f9fa;
        }

        .hero-btn:hover {
          transform: scale(1.06);
          transition: 0.3s;
        }

        /* CARDS */
        .seller-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          padding: 35px;
          border-radius: 20px;
          transition: all 0.35s ease;
          border: 1px solid rgba(255, 193, 7, 0.25);
        }

        .seller-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .seller-list li {
          padding: 10px 0;
          color: #444;
          border-bottom: 1px dashed #ddd;
        }

        .seller-list li:last-child {
          border-bottom: none;
        }

        .explore-btn:hover {
          transform: scale(1.07);
          box-shadow: 0 16px 30px rgba(0,0,0,0.2);
        }

      `}</style>
    </>
  );
}

export default Sellers;
