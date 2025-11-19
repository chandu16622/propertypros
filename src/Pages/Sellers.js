import React from "react";

function Sellers() {
  return (
    <div className="container py-5">
      <div className="text-center mt-4">
        <h1 className="text-warning fw-bold">For Sellers</h1>
        <p className="lead text-muted">
          Sell your property faster with expert guidance, accurate pricing, 
          verified buyers, and complete marketing support.
        </p>
      </div>

      <div className="row g-4">
        {/* Left Section */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0 h-100 p-4">
            <h4 className="fw-bold mb-3 text-dark">Why Sell With Us?</h4>
            <p className="text-muted">
              Selling a property requires the right strategy, accurate valuation, 
              and access to serious buyers. We help you maximize your property’s 
              visibility while ensuring a smooth and transparent selling process 
              from listing to final agreement.
            </p>

            <ul className="list-group list-group-flush mt-3">
              <li className="list-group-item">✔ Accurate Property Valuation</li>
              <li className="list-group-item">✔ Verified & Genuine Buyers Only</li>
              <li className="list-group-item">✔ High-Quality Photos & Virtual Tours</li>
              <li className="list-group-item">✔ Complete Support for Documentation</li>
              <li className="list-group-item">✔ Negotiation Assistance for Best Price</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0 h-100 p-4">
            <h4 className="fw-bold mb-3 text-dark">What You Get</h4>

            <p className="text-muted">
              We ensure maximum reach for your property through targeted 
              marketing, premium listings, and dedicated support to help you 
              close the deal faster and at the right price.
            </p>

            <ul className="list-group list-group-flush mt-3">
              <li className="list-group-item">📸 Professional Photos & Video Walkthroughs</li>
              <li className="list-group-item">📢 Premium Advertising & Online Promotion</li>
              <li className="list-group-item">📝 Assistance with Agreements & Registration</li>
              <li className="list-group-item">💼 Dedicated Selling Expert for Your Property</li>
              <li className="list-group-item">🎯 Faster Lead Generation from Qualified Buyers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="text-center mt-5">
        <button className="btn btn-warning text-dark fw-semibold px-4 py-2 rounded-pill">
          List Your Property
        </button>
      </div>
    </div>
  );
}

export default Sellers;
