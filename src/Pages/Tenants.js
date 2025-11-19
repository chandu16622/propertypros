import React from "react";
import { useNavigate } from "react-router-dom";

function Tenants() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/rentals");
  };

  return (
    <div className="container py-5">
      <div className="text-center mt-4">
        <h1 className="text-warning fw-bold">For Tenants</h1>
        <p className="lead text-muted">
          Find comfortable, budget-friendly rental homes with verified landlords,
          secure agreements, and seamless rental assistance.
        </p>
      </div>

      <div className="row g-4">
        {/* Left Section */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0 h-100 p-4">
            <h4 className="fw-bold mb-3 text-dark">Why Rent With Us?</h4>
            <p className="text-muted">
              Renting a home should be simple, safe, and stress-free. We offer
              verified rental options, transparent pricing, and landlord support to
              make your rental journey smooth from search to move-in.
            </p>

            <ul className="list-group list-group-flush mt-3">
              <li className="list-group-item">✔ Verified Rental Properties</li>
              <li className="list-group-item">✔ Zero-Brokerage Options Available</li>
              <li className="list-group-item">✔ Safe & Verified Landlords</li>
              <li className="list-group-item">✔ Transparent Rent & Deposit Details</li>
              <li className="list-group-item">✔ Quick Online Rental Agreement Support</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0 h-100 p-4">
            <h4 className="fw-bold mb-3 text-dark">What You Get</h4>

            <p className="text-muted">
              We help tenants explore a wide range of rental homes — from family
              apartments to fully-furnished rooms and shared accommodations.
              Experience convenience with digital rent payments, virtual tours, and
              24/7 rental support.
            </p>

            <ul className="list-group list-group-flush mt-3">
              <li className="list-group-item">🏠 Fully-Furnished & Semi-Furnished Options</li>
              <li className="list-group-item">🔐 Secure Digital Rental Agreements</li>
              <li className="list-group-item">💬 Direct Chat with Landlords</li>
              <li className="list-group-item">📅 Schedule Visits Instantly</li>
              <li className="list-group-item">💳 Easy Monthly Rent Payments Online</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="text-center mt-5">
       <button
  className="btn btn-warning text-dark fw-semibold px-4 py-2 rounded-pill"
  onClick={handleExplore}
>
  Explore Rentals
</button>

      </div>
    </div>
  );
}

export default Tenants;
