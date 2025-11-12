import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-page">
      {/* Header */}
      <header className="contact-header">
        <h2 className="contact-logo">
          <span className="red">50.</span>one<sup>e</sup>
        </h2>
        <nav className="contact-nav">
          <Link to="/">Home</Link>
          <span className="divider">—</span>
          <a href="/">Contact us</a>
          <button className="contact-btn">Get In Touch</button>
        </nav>
      </header>

      {/* Title */}
      <section className="contact-title">
        <h1>Get In Touch</h1>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        {/* Left form */}
        <div className="contact-form">
          <h3>Start A Conversation</h3>
          <form>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Message</label>
            <textarea rows="4" placeholder="Enter your message"></textarea>

            <button type="submit">
              Send Message <FaTelegramPlane className="send-icon" />
            </button>
          </form>
        </div>

        {/* Right info */}
        <div className="contact-info">
          <div className="info-box">
            <div className="info-item">
              <FaPhoneAlt className="icon red" />
              <div>
                <h4>Phone</h4>
                <p>0416 151 505</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon red" />
              <div>
                <h4>Email</h4>
                <p>renato@50one.com.au</p>
              </div>
            </div>
          </div>

          <div className="address-box">
            <div className="info-item">
              <FaMapMarkerAlt className="icon red" />
              <div>
                <h4>Address</h4>
                <p>514 Parramatta Road, PETERSHAM NSW 2049</p>
              </div>
            </div>
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Coffs+Harbour,+NSW,+Australia&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
