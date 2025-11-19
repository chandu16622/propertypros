import React from "react";
import logo from "../images/logo.jpg"; // ✅ update this path based on where your image is saved
function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://png.pngtree.com/thumb_back/fh260/background/20230715/pngtree-illustration-of-luxurious-golden-real-estate-property-in-3d-render-image_3875756.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     <div
  className="card p-4 shadow-lg border-0"
  style={{
    width: "400px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    backgroundImage: `url('https://images.ctfassets.net/nnkxuzam4k38/4BIP4ge9ontCTkNubiY4lb/48121f9d09134fd83670b1d6e182aa66/white-particles-background.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
  }}
>

     
        {/* 🖼️ Logo + Title Heading */}
        <div className="d-flex justify-content-center align-items-center mb-4">
          <img
            src={logo}
            alt="Login Logo"
            style={{
              width: "850px",
              height: "170px",
              objectFit: "contain",
              marginRight: "10px",
            }}
          />
          <h3
            className="fw-bold"
            style={{
              color: "#5A4FCF", // purple text color (like your uploaded example)
              fontFamily: "'Cinzel Decorative', cursive",
              margin: 0,
            }}
          >
          </h3>
        </div>

        {/* 🧾 Login Form */}
        <form>
          <div className="mb-3">
             <style>{`
    .custom-placeholder::placeholder {
      color: #ff4400ff;   /* your placeholder color */
      opacity: 1;
    }
  `}</style>
            <input
              type="email"
              className="form-control   custom-placeholder"
              placeholder="Email"
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
            />
          </div>

        <div className="mb-3">
  <style>{`
    .custom-placeholder::placeholder {
      color: #ff4400ff;   /* your placeholder color */
      opacity: 1;
    }
  `}</style>

  <input
    type="password"
    className="form-control custom-placeholder"
    placeholder="Password"
    style={{
      borderRadius: "10px",
      padding: "10px",
    }}
  />
</div>


          <button
            className="btn btn-warning w-100 fw-semibold text-dark"
            style={{ borderRadius: "10px" }}
          >
            Login
          </button>
        </form>

        <p
          className="text-center mt-3 text-dark"
          style={{ fontSize: "14px" }}
        >
          Don’t have an account?{" "}
          <a href="#" className="text-primary fw-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
