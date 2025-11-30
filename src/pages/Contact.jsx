import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="contact-bg py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card contact-card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <h1 className="text-center mb-4 fw-bold contact-title">
                  Contact Us
                </h1>

                <div className="row g-4">
                  {/* Contact Details */}
                  <div className="col-md-6">
                    <ul className="list-unstyled contact-info">
                      <li className="mb-4 d-flex align-items-start">
                        <span className="icon-circle me-3">📍</span>
                        <span>Paradise Resort, Beach Road, Kerala, India</span>
                      </li>
                      <li className="mb-4 d-flex align-items-start">
                        <span className="icon-circle me-3">📞</span>
                        <span>+91 98765 43210</span>
                      </li>
                      <li className="mb-4 d-flex align-items-start">
                        <span className="icon-circle me-3">📧</span>
                        <span>contact@paradiseresort.com</span>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Form */}
                  <div className="col-md-6">
                    <form>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Name</label>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-semibold">Email</label>
                        <input
                          type="email"
                          className="form-control custom-input"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Message
                        </label>
                        <textarea
                          className="form-control custom-input"
                          rows={4}
                          placeholder="Write your message..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn contact-btn w-100 mt-3"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
