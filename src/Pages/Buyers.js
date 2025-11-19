import React from "react";
import {
  FaHome,
  FaUserTie,
  FaArrowRight
} from "react-icons/fa";

function Buyers() {
  return (
    <>
      {/* BUYERS HERO SECTION */}
      <section
        className="buyers-hero d-flex align-items-center text-center"
        data-aos="fade-up"
         style={{ paddingTop: "120px" }} 
      >
        <div className="container">
          <div className="hero-glass p-4 p-md-5 mx-auto">
            <h1 className="fw-bold mb-3 hero-title">
              Find Your Perfect Home Today
            </h1>

            <p className="hero-subtitle mb-4">
              Explore verified listings, premium locations, and tailored recommendations.
            </p>

            {/* SEARCH BAR */}
            <div className="hero-search shadow-lg rounded-pill d-flex align-items-center">
              <input
                type="text"
                className="form-control border-0 rounded-pill px-3 py-2"
                placeholder="Search by location, budget or home type..."
              />
              <button className="btn btn-warning rounded-pill px-4 fw-semibold search-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div
        className="container-fluid"
        style={{
          paddingTop: "130px",
          paddingBottom: "80px",
          background: "linear-gradient(135deg, #fdf7e3 0%, #fff3c4 100%)",
        }}
      >
        {/* HEADER */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h1
            className="fw-bold mb-3"
            style={{
              color: "#ffb300",
              fontSize: "3rem",
              letterSpacing: "1px",
            }}
          >
            Find Your Dream Home
          </h1>
          <p
            className="lead text-muted"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Explore trusted listings, premium residential projects, and accurate
            market insights — all in one place.
          </p>
        </div>

        {/* MAIN CARDS */}
        <div className="container">
          <div className="row g-4">
            {/* LEFT CARD */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="buyer-card shadow-lg">
                <h4 className="fw-bold text-dark mb-3 d-flex align-items-center">
                  <FaUserTie className="me-2 text-warning fs-3" />
                  Why Choose Us?
                </h4>

                <p className="text-muted">
                  Buying a home is a major milestone — we simplify the entire process
                  with reliable insights, trusted listings, and expert support at
                  every step.
                </p>

                <ul className="buyer-list mt-3">
                  <li>✔ Verified & Trusted Property Listings</li>
                  <li>✔ Compare Amenities, Prices & Localities</li>
                  <li>✔ Instant Connect With Top Real Estate Agents</li>
                  <li>✔ Personalized Alerts for Preferred Properties</li>
                  <li>✔ Home Loan Assistance & Documentation Support</li>
                </ul>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="buyer-card shadow-lg">
                <h4 className="fw-bold text-dark mb-3 d-flex align-items-center">
                  <FaHome className="me-2 text-warning fs-3" />
                  What You Get
                </h4>

                <p className="text-muted">
                  Whether you're searching for affordable homes or luxury villas, we
                  offer detailed insights and full support throughout your buying
                  journey.
                </p>

                <ul className="buyer-list mt-3">
                  <li>🏡 Virtual Property Walkthroughs</li>
                  <li>📊 Real-Time Market Trends & Area Insights</li>
                  <li>📝 Full Assistance With Legal Verification</li>
                  <li>💰 Best Price Negotiation Assistance</li>
                  <li>📅 One-Click Scheduling for Site Visits</li>
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
              Explore Properties <FaArrowRight className="ms-2" />
            </button>
          </div>
        </div>
      </div>

      {/* CUSTOM STYLES */}
      <style>{`
        /* === HERO SECTION === */
        .buyers-hero {
          height: 100vh;
          min-height: 400px;
          background-image: url("https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          position: relative;
          padding-top: 100px;
        }

        .buyers-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
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
          letter-spacing: 1px;
          animation: fadeSlideDown 1s ease-out;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: #f8f9fa;
          animation: fadeSlideUp 1.2s ease-out;
        }

        .hero-search {
          background: white;
          border-radius: 50px;
          padding: 6px;
          max-width: 600px;
          margin: 0 auto;
          display: flex;
        }

        .search-btn:hover {
          transform: scale(1.05);
          transition: 0.2s;
        }

        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* === BUYER CARDS === */
        .buyer-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          padding: 35px;
          border-radius: 20px;
          transition: all 0.35s ease;
          border: 1px solid rgba(255, 193, 7, 0.25);
        }

        .buyer-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          background: rgba(255, 255, 255, 0.92);
        }

        .buyer-list li {
          padding: 10px 0;
          font-size: 0.95rem;
          color: #444;
          border-bottom: 1px dashed #ddd;
        }

        .buyer-list li:last-child {
          border-bottom: none;
        }

        .explore-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 16px 30px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 1.9rem;
          }
        }
      `}</style>
    </>
  );
}

export default Buyers;
