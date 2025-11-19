// src/Pages/ProjectDetails.js
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.jpg";
import project5 from "../images/project5.jpg";
import project6 from "../images/project6.jpg";

const projects = [
  {
    id: 1,
    title: "Skyline Residency",
    location: "Mumbai, Maharashtra",
    price: "From ₹85L",
    description:
      "Skyline Residency offers premium 2BHK and 3BHK homes with sea-view balconies, rooftop gardens, and luxury amenities in the heart of Mumbai.",
    img: project1,
  },
  {
    id: 2,
    title: "Elite Greens",
    location: "Bengaluru, Karnataka",
    price: "From ₹72L",
    description:
      "Elite Greens combines eco-friendly architecture with comfort. Enjoy landscaped gardens, jogging tracks, and modern living spaces.",
    img: project2,
  },
  {
    id: 3,
    title: "Palm Heights",
    location: "Pune, Maharashtra",
    price: "From ₹65L",
    description:
      "Palm Heights is a smart residential complex with luxury amenities, connectivity to IT parks, and serene green surroundings.",
    img: project3,
  },
  {
    id: 4,
    title: "Elite Plus Resorts",
    location: "Goa",
    price: "From ₹75L",
    description:
      "A perfect combination of comfort and luxury, Elite Plus Resorts offers sea-facing villas and holiday homes with modern interiors.",
    img: project4,
  },
  {
    id: 5,
    title: "Private Villas",
    location: "Vizag",
    price: "From ₹1.2cr",
    description:
      "Independent premium villas in Vizag with private pools, contemporary design, and high-end finishes.",
    img: project5,
  },
  {
    id: 6,
    title: "Henrry Enclave",
    location: "Pondicherry",
    price: "From ₹85L",
    description:
      "Henrry Enclave features French-inspired architecture with modern comfort, located in the peaceful French Colony of Pondicherry.",
    img: project6,
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // ✅ Scroll to top whenever this component loads or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="container text-center py-5">
        <h2>Project Not Found</h2>
        <button className="btn btn-warning mt-3" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ marginTop: "90px" }}>
      <button
        className="btn btn-outline-dark mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="card border-0 shadow-lg overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-100"
          style={{ maxHeight: "480px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h2 className="fw-bold text-warning">{project.title}</h2>
          <p className="text-muted mb-1">📍 {project.location}</p>
          <h5 className="fw-semibold mb-3">{project.price}</h5>
          <p className="text-secondary">{project.description}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">✅ 24x7 Security & Power Backup</li>
            <li className="list-group-item">✅ Swimming Pool & Gym Facilities</li>
            <li className="list-group-item">✅ High-speed Elevators</li>
            <li className="list-group-item">✅ Near Schools & Shopping Centers</li>
          </ul>

          <button
            className="btn btn-warning text-dark fw-bold px-4 rounded-pill"
            onClick={() => setShowForm(true)}
          >
            Schedule a Visit
          </button>

        </div>
      </div>
      {/* === Schedule Visit Form Modal === */}
      {showForm && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)", zIndex: 2000 }}
          onClick={() => setShowForm(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 shadow-lg rounded-4 p-3">

              {/* SUCCESS MESSAGE */}
              {submitted ? (
                <div className="text-center p-4">
                  <h4 className="text-success fw-bold">Visit Scheduled Successfully!</h4>
                  <p className="text-muted">
                    Our team will contact you shortly.
                  </p>
                  <button
                    className="btn btn-warning rounded-pill px-4 mt-3"
                    onClick={() => {
                      setShowForm(false);
                      setSubmitted(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h4 className="fw-bold mb-3 text-warning text-center">
                    Schedule a Site Visit
                  </h4>

                  <div className="modal-body">

                    {/* Name */}
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />

                    {/* Phone */}
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />

                    {/* Date */}
                    <input
                      type="date"
                      className="form-control mb-3"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />

                    {/* Time */}
                    <input
                      type="time"
                      className="form-control mb-3"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                    />

                    {/* Message */}
                    <textarea
                      className="form-control mb-3"
                      rows="3"
                      placeholder="Any message (optional)"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>

                    {/* Submit Button */}
                    <button
                      className="btn btn-warning w-100 rounded-pill fw-bold"
                      onClick={() => setSubmitted(true)}
                    >
                      Submit
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProjectDetails;
