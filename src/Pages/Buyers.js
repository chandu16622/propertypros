import React from "react";

function Buyers() {
  return (
    <div className="container py-5">
      <div className="text-center mt-4">
        <h1 className="text-warning fw-bold">For Buyers</h1>
        <p className="lead text-muted">
          Find your dream home with trusted listings, verified agents, and
          personalized property recommendations.
        </p>
      </div>

      <div className="row g-4">
        {/* Left Section */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0 h-100 p-4">
            <h4 className="fw-bold mb-3 text-dark">Why Choose Us?</h4>
            <p className="text-muted">
              Buying a home is one of the biggest decisions of your life, and we
              make it easier with expert guidance at every step. Whether you're a
              first-time buyer or looking for an investment property, we provide
              accurate market insights and verified listings to help you make the
              right choice.
            </p>

            <ul className="list-group list-group-flush mt-3">
              <li className="list-group-item">
                ✔ Verified & Trusted Property Listings
              </li>
              <li className="list-group-item">
                ✔ Compare Prices, Amenities & Locations
              </li>
              <li className="list-group-item">
                ✔ Instant Connect with Top Agents
              </li>
              <li className="list-group-item">
                ✔ Personalized Property Alerts
              </li>
              <li className="list-group-item">
                ✔ Assistance with Home Loans & Documentation
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0 h-100 p-4">
            <h4 className="fw-bold mb-3 text-dark">What You Get</h4>

            <p className="text-muted">
              We help buyers explore premium residential projects, budget-friendly
              homes, and luxury villas across major cities. Get real-time updates,
              virtual tours, and expert support throughout your buying journey.
            </p>

            <ul className="list-group list-group-flush mt-3">
              <li className="list-group-item">🏡 Virtual Property Tours</li>
              <li className="list-group-item">
                📊 Detailed Area Insights & Market Trends
              </li>
              <li className="list-group-item">
                📝 Assistance with Agreement & Verification
              </li>
              <li className="list-group-item">
                💰 Best Price Negotiation Support
              </li>
              <li className="list-group-item">
                📅 Schedule Visits Anytime with One Click
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="text-center mt-5">
        <button className="btn btn-warning text-dark fw-semibold px-4 py-2 rounded-pill">
          Explore Properties
        </button>
      </div>
    </div>
  );
}

export default Buyers;
