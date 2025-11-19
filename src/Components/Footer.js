import React from "react";

function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-3"
      style={{
        background: "radial-gradient(circle at top left, #111 0%, #000 80%)",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <div
        style={{
          height: "5px",
          background: "linear-gradient(90deg, #ffc107, #ff9800, #ff5722)",
        }}
      ></div>

      <div className="container mt-4">
        <div className="row gy-4 text-center text-md-start">
          {/* Brand Info */}
          <div className="col-md-3">
            <h3 className="fw-bold text-warning mb-3">
              Property<span className="text-light">Pro</span>
            </h3>
            <p className="small text-secondary">
              Your trusted partner for real estate — discover verified homes, premium rentals, and commercial spaces with ease.
            </p>
            <div className="d-flex justify-content-md-start justify-content-center mt-3">
              <a href="#" className="text-light me-3 fs-5 social-hover">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light me-3 fs-5 social-hover">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light me-3 fs-5 social-hover">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-light fs-5 social-hover">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="col-md-3">
            <h6 className="fw-bold text-warning mb-3">Explore</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="footer-link">Buy Property</a></li>
              <li><a href="#" className="footer-link">Rent Property</a></li>
              <li><a href="#" className="footer-link">Commercial Spaces</a></li>
              <li><a href="#" className="footer-link">Luxury Projects</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3">
            <h6 className="fw-bold text-warning mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h6 className="fw-bold text-warning mb-3">Stay Updated</h6>
            <p className="small text-secondary">
              Subscribe to get exclusive property updates, market insights, and offers directly to your inbox.
            </p>
            <form className="d-flex mt-2">
              <input
                type="email"
                className="form-control rounded-start-pill border-0"
                placeholder="Your email"
                style={{ background: "#222", color: "#fff" }}
              />
              <button
                className="btn btn-warning rounded-end-pill fw-semibold px-3"
                type="button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-secondary mt-5" />
        <div className="text-center small text-secondary">
          <p className="mb-0">
            © {new Date().getFullYear()}{" "}
            <span className="text-warning fw-semibold">PropertyPro</span>. All Rights Reserved.
          </p>
          <p className="text-success">Designed with ❤️ by the PropertyPro Frontend Team</p>
        </div>
      </div>

      {/* Glow effect */}
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,193,7,0.15), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      ></div>

      <style>{`
        .footer-link { color: #bbb; text-decoration: none; transition: color 0.3s ease; }
        .footer-link:hover { color: #ffc107; }
        .social-hover:hover { color: #ffc107 !important; transform: scale(1.1); transition: all 0.2s ease; }
      `}</style>
    </footer>
  );
}

export default Footer;
