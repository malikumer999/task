import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      
        <div className="footer-left">
          <h2 className="footer-logo">
            <span className="">50.</span>on
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pulvinar potenti neque metus
            in leo massa. Pellentesque tristique maecenas amet tellus eu elit
            elit leo.
          </p>
        </div>

    
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Projects</a>
          <a href="/">Contact Us</a>
        </div>

      
        <div className="footer-right">
          <div className="footer-social">
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaLinkedinIn /></a>
          </div>
          <div className="footer-policy">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Uses</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 All Rights Reserved</p>
        <p>
          Designed & Developed by{" "}
          <span className="dev-name">AUTHOR</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
