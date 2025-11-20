import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

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
          {/* BRAND + SOCIAL LINKS */}
          <div className="col-md-3">
            <h3 className="fw-bold text-warning mb-3">
              Property<span className="text-light">Pro</span>
            </h3>
            <p className="small text-secondary">
              Your trusted partner for real estate — discover verified homes, premium rentals,
              and commercial spaces with ease.
            </p>

            {/* SOCIAL ICONS */}
            <div className="d-flex justify-content-md-start justify-content-center mt-3 gap-3">
              <a href="https://facebook.com" target="_blank" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com" target="_blank" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* EXPLORE SECTION */}
          <div className="col-md-3">
            <h6 className="fw-bold text-warning mb-3">Explore</h6>
            <ul className="list-unstyled small">
              <li><Link to="/rent" className="footer-link">Rent Property</Link></li>
              <li><Link to="/commercial" className="footer-link">Commercial Spaces</Link></li>
              <li><Link to="/luxury" className="footer-link">Luxury Projects</Link></li>
              <li><Link to="/buy" className="footer-link">Buy Property</Link></li>
            </ul>
          </div>

          {/* SUPPORT SECTION */}
          <div className="col-md-3">
            <h6 className="fw-bold text-warning mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
              <li><Link to="/contactus" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
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

      {/* GLOW EFFECT */}
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

      {/* EXTRA STYLES */}
      <style>{`
        .footer-link {
          color: #bbb;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #ffc107;
        }

        .social-icon {
          color: #bbb;
          font-size: 1.2rem;
          transition: 0.3s ease;
        }
        .social-icon:hover {
          color: #ffc107;
          transform: scale(1.2);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
