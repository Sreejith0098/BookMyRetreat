import React from "react";
const Footer = () => {
  return (
    <div>
      <footer
        style={{ backgroundColor: "#023E8A" }}
        className=" text-white pt-5 pb-4"
      >
        <div className="container text-md-left">
          <div className="row text-md-left">
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                ResortEscape
              </h5>
              <p>
                Discover and book luxury resorts worldwide. Relax, recharge, and
                escape the ordinary with our hand-picked destinations.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Quick Links
              </h5>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Destinations
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Bookings
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i className="bi bi-geo-alt-fill me-2"></i>123 Beachside Ave,
                Maldives
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                support@resortescape.com
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>+1 234 567 890
              </p>
            </div>

            <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Follow Us
              </h5>
              <a href="#" className="text-white me-4">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="bi bi-twitter-x fs-4"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-youtube fs-4"></i>
              </a>
            </div>
          </div>

          <hr className="mb-4 mt-4" />
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-white">
                © {new Date().getFullYear()}BookMyRetreat. All rights reserved.
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <p className="text-white text-md-end">Made with BookMyRetreat</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
