import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

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
      }}
    >
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>

     
      <div className="card p-4 shadow position-relative" style={{ zIndex: 1, minWidth: "400px", maxWidth: "500px",background:'rgba(255, 255, 255, 0.10)',backdropFilter:"blur(11px)" }}>
        <h2  className="card-title text-light text-center mb-3">{isLogin ? "Login" : "Create an Account"}</h2>
        <p className="text-center text-muted mb-4">
          
            
        </p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <input style={{background:'rgba(255,255,255,0.10)',border:'1px solid rgba(255,255,255,0.14)'}}
                type="text"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
          )}
          <div className="mb-3">
            <input  style={{background:'rgba(255,255,255,0.10)',border:'1px solid rgba(255,255,255,0.14)'}}
              type="email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-3">
            <input style={{background:'rgba(255,255,255,0.10)',border:'1px solid rgba(255,255,255,0.14)'}}
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn fw-bold  btn-light w-100">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-3">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            className="btn btn-link p-0 ms-1"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>

      {/* Footer */}
      <footer className="text-white mt-4 position-relative" style={{ zIndex: 1 }}>
        © 2025 BookMyRetreat. All rights reserved.
      </footer>
    </div>
  );
}
