import React from "react";
import { useNavigate } from "react-router-dom"; // import navigation hook
import signup from "../images/signup.jpg";

function Signup() {
  const navigate = useNavigate(); // initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // 👉 you can also add form validation or API call here
    alert("Signup successful!");

    // after signup, redirect to login page
    navigate("/login");
  };

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

     <div className="d-flex justify-content-center align-items-center mb-4">
  <img
    src={signup}   // ✔ correct variable name
    alt="signup"
    style={{
      width: "330px",
      height: "150px",
      objectFit: "contain",
      marginRight: "10px",
    }}
  />


</div>


        {/* form submit handled here */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
             <style>{`
    .custom-placeholder::placeholder {
      color: #ff4400ff;   /* your placeholder color */
      opacity: 1;
    }
  `}</style>
            <input
              type="text"
              className="form-control custom-placeholder"
              placeholder="Full Name"
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
              required
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
              type="email"
              className="form-control custom-placeholder"
              placeholder="Email"
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
              required
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
              className="form-control  custom-placeholder"
              placeholder="Password"
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 fw-semibold text-dark"
            style={{ borderRadius: "10px" }}
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-3 text-dark" style={{ fontSize: "14px" }}>
          Already have an account?{" "}
          <a
            href="#"
            className="text-warning fw-semibold"
            onClick={() => navigate("/login")} // also navigate when clicking link
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
