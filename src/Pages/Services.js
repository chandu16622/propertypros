import React from "react";

function Services() {
  const services = [
    {
      title: "Property Valuation",
      icon: "📊",
      desc: "Get expert-driven, accurate valuation based on market trends, locality, and property condition.",
    },
    {
      title: "Virtual Tours",
      icon: "🏡",
      desc: "Explore properties online with high-quality 360° virtual walkthroughs from anywhere.",
    },
    {
      title: "Legal Assistance",
      icon: "⚖️",
      desc: "From sale agreements to document verification, our legal experts ensure smooth transactions.",
    },
    {
      title: "Home Loans",
      icon: "💰",
      desc: "Find the best interest rates, bank offers, and loan approval support with our partner banks.",
    },
    {
      title: "Property Management",
      icon: "🛠️",
      desc: "Complete maintenance, rent collection, tenant handling, and regular inspections for owners.",
    },
    {
      title: "Verified Listings",
      icon: "✔️",
      desc: "All our listings are verified for ownership, legality, and authenticity before going live.",
    },
    {
      title: "Rental Assistance",
      icon: "📄",
      desc: "We help tenants and landlords with property search, agreements, pricing, and negotiations.",
    },
    {
      title: "Marketing & Promotion",
      icon: "📢",
      desc: "Professional photography, video tours, and premium advertising to reach more buyers.",
    },
    {
      title: "Property Consultation",
      icon: "🧭",
      desc: "Get expert advice on buying, selling, renting, investing, and understanding market trends.",
    },
    {
      title: "Investment Guidance",
      icon: "📈",
      desc: "We help investors identify high-growth locations, rental-yield properties, and ROI forecasts.",
    },
    {
      title: "Interior & Renovation Support",
      icon: "🎨",
      desc: "Connect with trusted interior designers and renovation experts to upgrade your space.",
    },
    {
      title: "End-to-End Transaction Support",
      icon: "🤝",
      desc: "From property visit to registration, we assist you at each step for a hassle-free experience.",
    },
  ];

  return (
    <div className="container py-5 text-center">
      <h1 className="text-warning fw-bold mt-3">Our Services</h1>
      <p className="lead text-muted">
        We provide complete, end-to-end real estate solutions that simplify every part of your property journey. From buying and selling to renting, investing, and full-scale property management, our services are designed to offer convenience, transparency, and expert support. With verified listings, accurate valuations, trusted legal assistance, and personalized consultations, we help you navigate the real estate market with confidence. Whether you're searching for your dream home, securing profitable investments, or managing residential or commercial spaces, we ensure a smooth, secure, and hassle-free experience through our professional guidance and modern technology.

      </p>

      <div className="row mt-5 g-4">
        {services.map((service, i) => (
          <div key={i} className="col-md-3">
            <div className="card shadow-lg p-4 border-0 h-100">
              <div className="display-5">{service.icon}</div>
              <h5 className="fw-semibold text-warning mt-3">{service.title}</h5>
              <p className="small text-muted mt-2">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
