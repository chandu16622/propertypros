// src/Pages/SellerProperties.js
import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBolt,
  FaEdit,
  FaTrash,
  FaUsers,
  FaBullhorn,
  FaRegCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.jpg";
import project5 from "../images/project5.jpg";
import project6 from "../images/project6.jpg";
import dev1 from "../images/dev1.jpg";
import dev2 from "../images/dev2.jpg";
import dev3 from "../images/dev3.jpg";
import dev4 from "../images/dev4.jpg";
import dev5 from "../images/dev5.jpg";

const PER_PAGE = 4; 

/**
 * SellerProperties - a seller-facing dashboard page.
 * Features:
 * - Search & pagination
 * - Listing cards with analytics badge (views/leads)
 * - Actions: Edit, Delete, Boost (promote), View Leads
 * - Modals: Edit Listing, Confirm Delete, View Leads, Schedule Visit (for buyer requests)
 * - Simple local state to demonstrate functionality
 *
 * Drop into src/Pages and wire route /seller-properties -> <SellerProperties />
 */

export default function SellerProperties() {
  // initial demo dataset for seller's listings
  const initialListings = useMemo(
    () => [
      {
        id: 1,
        title: "Skyline 3BHK - Sea View",
        location: "Worli, Mumbai",
        price: "₹1.8 Cr",
        beds: 3,
        baths: 3,
        area: "1620 sq.ft",
        img: project1,
        views: 1823,
        leads: 12,
        boosted: false,
        createdAt: "2025-09-04",
      },
      {
        id: 2,
        title: "Elite Greens 2BHK",
        location: "Bellandur, Bengaluru",
        price: "₹92 Lakhs",
        beds: 2,
        baths: 2,
        area: "1100 sq.ft",
        img: project2,
        views: 912,
        leads: 4,
        boosted: true,
        createdAt: "2025-10-01",
      },
      {
        id: 3,
        title: "Palm Heights - Family Home",
        location: "Baner, Pune",
        price: "₹73 Lakhs",
        beds: 2,
        baths: 2,
        area: "1000 sq.ft",
        img: project3,
        views: 642,
        leads: 6,
        boosted: false,
        createdAt: "2025-08-26",
      },
      {
        id: 4,
        title: "Elite Plus Resorts Villa",
        location: "Calangute, Goa",
        price: "₹1.5 Cr",
        beds: 4,
        baths: 4,
        area: "2800 sq.ft",
        img: project4,
        views: 420,
        leads: 2,
        boosted: false,
        createdAt: "2025-07-10",
      },
      {
        id: 5,
        title: "Private Vizag Villas",
        location: "Vizag - Beach Rd",
        price: "₹95 Lakhs",
        beds: 3,
        baths: 3,
        area: "1500 sq.ft",
        img: project5,
        views: 321,
        leads: 1,
        boosted: false,
        createdAt: "2025-10-18",
      },
      {
        id: 6,
        title: "Henrry Enclave - Cozy 2BHK",
        location: "Pondicherry - French Colony",
        price: "₹85 Lakhs",
        beds: 2,
        baths: 2,
        area: "1150 sq.ft",
        img: project6,
        views: 210,
        leads: 0,
        boosted: false,
        createdAt: "2025-11-02",
      },
      {
        id: 7,
        title: "Duplex Ocean Villa",
        location: "Vizag - RK Beach",
        price: "₹2.2 Cr",
        beds: 5,
        baths: 5,
        area: "4200 sq.ft",
        img: dev1,
        views: 156,
        leads: 0,
        boosted: false,
        createdAt: "2025-06-12",
      },
      {
        id: 8,
        title: "Green Smart Home",
        location: "Electronic City, Bengaluru",
        price: "₹1.05 Cr",
        beds: 3,
        baths: 3,
        area: "1650 sq.ft",
        img: dev2,
        views: 498,
        leads: 3,
        boosted: true,
        createdAt: "2025-05-21",
      },
      {
        id: 9,
        title: "Oceanfront Luxury Villa",
        location: "Goa - North Shore",
        price: "₹3.75 Cr",
        beds: 6,
        baths: 6,
        area: "5200 sq.ft",
        img: dev3,
        views: 720,
        leads: 9,
        boosted: false,
        createdAt: "2025-04-14",
      },
      {
        id: 9,
        title: "Oceanfront Luxury Villa",
        location: "Goa - North Shore",
        price: "₹3.75 Cr",
        beds: 6,
        baths: 6,
        area: "5200 sq.ft",
        img: dev4,
        views: 720,
        leads: 9,
        boosted: false,
        createdAt: "2025-04-14",
      },{
        id: 9,
        title: "Oceanfront Luxury Villa",
        location: "Goa - North Shore",
        price: "₹3.75 Cr",
        beds: 6,
        baths: 6,
        area: "5200 sq.ft",
        img: dev5,
        views: 720,
        leads: 9,
        boosted: false,
        createdAt: "2025-04-14",
      },
    ],
    []
  );

  // state
  const [listings, setListings] = useState(initialListings);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null); // selected listing for view/edit
  const [showEdit, setShowEdit] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showLeads, setShowLeads] = useState(false);
  const [showBoost, setShowBoost] = useState(false);
  const [scheduleModal, setScheduleModal] = useState(false);

  // sample leads per property (in a real app you'd fetch this)
  const sampleLeads = {
    1: [
      { id: "L1", name: "Asha Patel", phone: "9876543210", when: "2025-11-10" },
      { id: "L2", name: "Rohit Kumar", phone: "9988776655", when: "2025-11-12" },
    ],
    2: [{ id: "L3", name: "Priya Sharma", phone: "9123456780", when: "2025-10-22" }],
    3: [],
    // others empty or small arrays
  };

  // filtered + paginated
  const filtered = listings.filter((l) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      l.title.toLowerCase().includes(q) ||
      l.location.toLowerCase().includes(q) ||
      l.price.toLowerCase().includes(q)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  // Actions
  const handleDelete = (id) => {
    setListings((prev) => prev.filter((p) => p.id !== id));
    setShowDeleteConfirm(false);
    setSelected(null);
  };

  const toggleBoost = (id) => {
    setListings((prev) => prev.map((p) => (p.id === id ? { ...p, boosted: !p.boosted, views: p.boosted ? p.views : p.views + 200 } : p)));
    setShowBoost(false);
  };

  const openEdit = (listing) => {
    setSelected({ ...listing }); // clone
    setShowEdit(true);
  };

  const saveEdit = () => {
    setListings((prev) => prev.map((p) => (p.id === selected.id ? selected : p)));
    setShowEdit(false);
    setSelected(null);
  };

  const openLeads = (listing) => {
    setSelected(listing);
    setShowLeads(true);
  };

  const openScheduleFor = (listing) => {
    setSelected(listing);
    setScheduleModal(true);
  };

  // small helper for stat summary
  const totalViews = listings.reduce((s, l) => s + (l.views || 0), 0);
  const totalLeads = listings.reduce((s, l) => s + (l.leads || 0), 0);
  const boostedCount = listings.filter((l) => l.boosted).length;

  return (
    <div style={{ paddingTop: 120 }}>
      <div className="container-fluid py-5" style={{ minHeight: "100vh", background: "linear-gradient(135deg,#fffdf5,#fff6e0)" }}>
        {/* Header & quick stats */}
        <div className="container mb-4">
          <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <div>
              <h2 className="fw-bold text-warning mb-1">Seller Dashboard</h2>
              <p className="text-muted mb-0">Manage your listings, view leads and boost performance.</p>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <div className="text-center px-3 py-2 rounded-3" style={{ background: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
                <div className="text-muted small">Total Views</div>
                <div className="fw-bold">{totalViews.toLocaleString()}</div>
              </div>
              <div className="text-center px-3 py-2 rounded-3" style={{ background: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
                <div className="text-muted small">Total Leads</div>
                <div className="fw-bold">{totalLeads}</div>
              </div>
              <div className="text-center px-3 py-2 rounded-3" style={{ background: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
                <div className="text-muted small">Boosted Listings</div>
                <div className="fw-bold">{boostedCount}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="container mb-4">
          <div className="d-flex justify-content-center">
            <div className="shadow-sm d-flex align-items-center px-3" style={{ width: "60%", background: "#fff", borderRadius: 999 }}>
              <FaSearch className="me-2 text-warning" />
              <input
                className="form-control border-0 py-2"
                placeholder="Search your listings (title, location, price)..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </div>
          </div>
        </div>

        {/* Listing grid */}
        <div className="container">
          <div className="row g-4">
            {visible.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.id}>
                <div className="card shadow-sm border-0" style={{ borderRadius: 14, overflow: "hidden", transition: "transform .25s" }}>
                  <div style={{ position: "relative" }}>
                    <img src={p.img} alt={p.title} className="w-100" style={{ height: 220, objectFit: "cover" }} />
                    <div style={{ position: "absolute", left: 12, top: 12 }}>
                      <span className="badge bg-warning text-dark px-3 py-2 fw-semibold" style={{ borderRadius: 12 }}>
                        {p.price}
                      </span>
                    </div>

                    {p.boosted && (
                      <div style={{ position: "absolute", right: 12, top: 12 }}>
                        <span className="badge bg-danger text-white px-3 py-2" style={{ borderRadius: 12 }}>
                          <FaBolt className="me-1" /> Boosted
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between">
                      <div>
                        <h5 className="fw-bold mb-1">{p.title}</h5>
                        <div className="text-muted small">
                          <FaMapMarkerAlt className="me-1 text-warning" />
                          {p.location}
                        </div>
                      </div>

                      <div className="text-end">
                        <div className="text-muted small">Views</div>
                        <div className="fw-bold">{p.views}</div>
                        <div className="text-muted small">Leads</div>
                        <div className="fw-bold">{p.leads}</div>
                      </div>
                    </div>

                    <div className="d-flex gap-2 mt-3">
                      <button className="btn btn-outline-dark w-50" onClick={() => openEdit(p)}>
                        <FaEdit className="me-2" /> Edit
                      </button>
                      <button className="btn btn-outline-danger w-50" onClick={() => { setSelected(p); setShowDeleteConfirm(true); }}>
                        <FaTrash className="me-2" /> Delete
                      </button>
                    </div>

                    <div className="d-flex gap-2 mt-3">
                      <button className="btn btn-warning w-50" onClick={() => { setSelected(p); setShowBoost(true); }}>
                        <FaBullhorn className="me-2" /> Boost
                      </button>

                      <button className="btn btn-dark w-50" onClick={() => openLeads(p)}>
                        <FaUsers className="me-2" /> View Leads
                      </button>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="small text-muted">Listed: {p.createdAt}</div>
                      <div>
                        <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => openScheduleFor(p)}>
                          <FaRegCalendarAlt className="me-1" /> Schedule Visit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* pagination */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            <button className="btn btn-outline-dark btn-sm" disabled={page === 1} onClick={() => setPage((s) => Math.max(1, s - 1))}>
              <FaChevronLeft />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                className={`btn btn-sm ${page === i + 1 ? "btn-warning text-dark" : "btn-outline-dark"}`}
                key={i}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button className="btn btn-outline-dark btn-sm" disabled={page === totalPages} onClick={() => setPage((s) => Math.min(totalPages, s + 1))}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* EDIT LISTING MODAL */}
      {showEdit && selected && (
        <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }} onClick={() => { setShowEdit(false); setSelected(null); }}>
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content border-0 rounded-4 shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title">Edit Listing</h5>
                <button className="btn-close" onClick={() => { setShowEdit(false); setSelected(null); }}></button>
              </div>

              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-8">
                    <label className="form-label small">Title</label>
                    <input className="form-control" value={selected.title} onChange={(e) => setSelected({ ...selected, title: e.target.value })} />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label small">Price</label>
                    <input className="form-control" value={selected.price} onChange={(e) => setSelected({ ...selected, price: e.target.value })} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small">Location</label>
                    <input className="form-control" value={selected.location} onChange={(e) => setSelected({ ...selected, location: e.target.value })} />
                  </div>

                  <div className="col-md-2">
                    <label className="form-label small">Beds</label>
                    <input type="number" className="form-control" value={selected.beds} onChange={(e) => setSelected({ ...selected, beds: Number(e.target.value) })} />
                  </div>

                  <div className="col-md-2">
                    <label className="form-label small">Baths</label>
                    <input type="number" className="form-control" value={selected.baths} onChange={(e) => setSelected({ ...selected, baths: Number(e.target.value) })} />
                  </div>

                  <div className="col-md-2">
                    <label className="form-label small">Area</label>
                    <input className="form-control" value={selected.area} onChange={(e) => setSelected({ ...selected, area: e.target.value })} />
                  </div>

                  <div className="col-12">
                    <label className="form-label small">Image URL (or keep existing)</label>
                    <input className="form-control" value={selected.img} onChange={(e) => setSelected({ ...selected, img: e.target.value })} />
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-outline-secondary" onClick={() => { setShowEdit(false); setSelected(null); }}>Cancel</button>
                <button className="btn btn-warning" onClick={saveEdit}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM */}
      {showDeleteConfirm && selected && (
        <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.6)" }} onClick={() => setShowDeleteConfirm(false)}>
          <div className="modal-dialog modal-sm modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content rounded-4 p-3 text-center">
              <h5 className="fw-bold">Delete Listing?</h5>
              <p className="text-muted">This action cannot be undone. Are you sure you want to remove <strong>{selected.title}</strong>?</p>
              <div className="d-flex gap-2 justify-content-center">
                <button className="btn btn-outline-secondary" onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
                <button className="btn btn-danger" onClick={() => handleDelete(selected.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOOST CONFIRM */}
      {showBoost && selected && (
        <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }} onClick={() => setShowBoost(false)}>
          <div className="modal-dialog modal-md modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content rounded-4 p-4">
              <h5 className="fw-bold">Boost Listing</h5>
              <p className="text-muted">Boosting promotes your listing to more buyers for better visibility. Pick a duration to boost <strong>{selected.title}</strong>.</p>

              <div className="mb-3">
                <label className="form-label small">Duration</label>
                <select className="form-select">
                  <option>3 days — ₹199</option>
                  <option>7 days — ₹349</option>
                  <option>14 days — ₹599</option>
                </select>
              </div>

              <div className="d-flex gap-2 justify-content-end">
                <button className="btn btn-outline-secondary" onClick={() => setShowBoost(false)}>Cancel</button>
                <button className="btn btn-warning" onClick={() => toggleBoost(selected.id)}>Pay & Boost</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LEADS LIST */}
      {showLeads && selected && (
        <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }} onClick={() => setShowLeads(false)}>
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">Leads for: {selected.title}</h5>
                <button className="btn-close" onClick={() => setShowLeads(false)}></button>
              </div>

              <div className="modal-body">
                {(sampleLeads[selected.id] && sampleLeads[selected.id].length > 0) ? (
                  <div className="list-group">
                    {sampleLeads[selected.id].map((ld) => (
                      <div key={ld.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <div className="fw-semibold">{ld.name}</div>
                          <div className="small text-muted">{ld.phone} • {ld.when}</div>
                        </div>
                        <div>
                          <button className="btn btn-outline-primary btn-sm me-2" onClick={() => alert(`Calling ${ld.phone} (demo)`)}>Call</button>
                          <button className="btn btn-outline-success btn-sm" onClick={() => alert(`Message ${ld.phone} (demo)`)}>Message</button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-muted p-4">No leads yet for this listing.</div>
                )}
              </div>

              <div className="modal-footer">
                <button className="btn btn-outline-secondary" onClick={() => setShowLeads(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SCHEDULE VISIT (for buyer requests) */}
      {scheduleModal && selected && (
        <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.55)" }} onClick={() => setScheduleModal(false)}>
          <div className="modal-dialog modal-md modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content p-4 rounded-4">
              <h5 className="fw-bold">Schedule Visit for {selected.title}</h5>

              <div className="mb-2">
                <label className="form-label small">Visitor Name</label>
                <input className="form-control" placeholder="Name" />
              </div>

              <div className="mb-2">
                <label className="form-label small">Visitor Phone</label>
                <input className="form-control" placeholder="Mobile" />
              </div>

              <div className="mb-3">
                <label className="form-label small">Select Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-outline-secondary" onClick={() => setScheduleModal(false)}>Cancel</button>
                <button className="btn btn-dark" onClick={() => { alert("Visit scheduled (demo)"); setScheduleModal(false); }}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .card:hover { transform: translateY(-6px) scale(1.004); box-shadow: 0 18px 40px rgba(11,21,45,0.08); }
        .btn-outline-danger { border-color: rgba(220,53,69,0.18); }
        @media (max-width: 768px) {
          .container { padding-left: 12px; padding-right: 12px; }
        }
      `}</style>
    </div>
  );
}
