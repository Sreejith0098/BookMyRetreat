import React, { useState } from "react";

export default function ResortAuthPages() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert("Login successful (demo)");
    } else {
      alert("Signup successful (demo)");
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 position-relative"
      style={{
        backgroundImage: `url('beach.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      ></div>

      {/* Card */}
      <div
        className="card p-5 shadow position-relative"
        style={{
          zIndex: 1,
          width: "400px",
          borderRadius: "18px",
          background: "rgba(255, 255, 255, 0.15)",
          border: "1px solid rgba(255,255,255,0.25)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          color: "#fff",
          transition: "all 0.3s ease",
        }}
      >
        <h2 className="text-center fw-bold mb-3">
          {isLogin ? "Login" : "Create an Account"}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <input
                type="text"
                className="form-control text-light"
                placeholder="Full Name"
                required
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              />
            </div>
          )}
          <div className="mb-3">
            <input
              type="email"
              className="form-control text-light"
              placeholder="Email Address"
              required
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control text-light"
              placeholder="Password"
              required
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold"
            style={{
              background: "linear-gradient(135deg, #f8b500, #fceabb)",
              border: "none",
              color: "#333",
              borderRadius: "30px",
              padding: "10px 0",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
            }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            className="btn btn-link text-warning p-0 ms-1"
            style={{
              fontWeight: "600",
              textDecoration: "none",
            }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
      {/* Footer */}
      <footer
        className="text-white mt-4 position-relative"
        style={{
          zIndex: 1,
          opacity: 0.85,
          fontSize: "0.9rem",
        }}
      >
        © 2025 <strong>BookMyRetreat</strong>. All rights reserved.
      </footer>
    </div>
  );
}
