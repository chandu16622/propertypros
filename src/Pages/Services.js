import React from "react";

function Services() {
  const services = [
    { title: "Property Valuation", icon: "📊", desc: "Get accurate valuation based on market trends, locality, and property condition." },
    { title: "Virtual Tours", icon: "🏡", desc: "Explore properties online with high-quality 360° virtual walkthroughs." },
    { title: "Legal Assistance", icon: "⚖️", desc: "Document verification and legal support for smooth transactions." },
    { title: "Home Loans", icon: "💰", desc: "Best interest rates, bank offers, and loan approval support." },
    { title: "Property Management", icon: "🛠️", desc: "Complete maintenance, rent collection, and inspection support." },
    { title: "Verified Listings", icon: "✔️", desc: "Every listing is authenticated for ownership and legality." },
    { title: "Rental Assistance", icon: "📄", desc: "We help both tenants & landlords with agreements and pricing." },
    { title: "Marketing & Promotion", icon: "📢", desc: "Professional photos, video tours & targeted online promotions." },
    { title: "Property Consultation", icon: "🧭", desc: "Expert advice on buying, selling, renting & investing." },
    { title: "Investment Guidance", icon: "📈", desc: "High-growth areas, ROI projections, and rental yield analysis." },
    { title: "Interior & Renovation", icon: "🎨", desc: "Connect with top interior designers and renovation experts." },
    { title: "End-to-End Support", icon: "🤝", desc: "We help you from first visit to final registration." },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="services-hero d-flex align-items-center text-center">
        <div className="container">
          <div className="hero-glass p-4 p-md-5 mx-auto">
            <h1 className="fw-bold mb-3 hero-title">Our Professional Services</h1>
            <p className="hero-subtitle mb-0">
              Everything you need in your real estate journey — simplified, verified & expert-driven.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div
        className="container"
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div className="text-center mb-5">
          <h1 className="text-warning fw-bold">Our Services</h1>
          <p className="lead text-muted" style={{ maxWidth: "750px", margin: "0 auto" }}>
            From buying and selling to renting, investing, legal support, and full property management — our services are designed to give you a safe, smooth, and hassle-free real estate experience.
          </p>
        </div>

        <div className="row mt-4 g-4">
          {services.map((service, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6">
              <div className="service-card shadow-lg text-center p-4 border-0 h-100">
                <div className="icon-box mb-3">{service.icon}</div>
                <h5 className="fw-semibold text-warning">{service.title}</h5>
                <p className="small text-muted mt-2">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOM STYLES */}
      <style>{`
        /* HERO SECTION */
        .services-hero {
          height: 100vh;
          min-height: 380px;
          background-image: url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .services-hero::before {
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
          backdrop-filter: blur(14px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
        }

        .hero-title {
          font-size: 2.6rem;
          color: #ffe9a3;
          animation: slideDown 0.8s ease-out;
        }

        .hero-subtitle {
          color: #f8f9fa;
          animation: slideUp 1s ease-out;
        }

        /* CARD STYLING */
        .service-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 18px;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
        }

        .icon-box {
          font-size: 2.4rem;
          background: #fff8e1;
          width: 70px;
          height: 70px;
          margin: 0 auto;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 14px rgba(255, 193, 7, 0.3);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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

export default Services;
