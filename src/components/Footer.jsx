import React from 'react';
import './Footer.css';

const Footer = () => (
  <>

    {/* Main footer section */}
    <div className="footer-wrapper">
      <div className="footer-content">
        
        {/* Explore column with navigation links */}
        <div className="footer-column">
          <h4>Explore</h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        
        {/* Support column with help links */}
        <div className="footer-column">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        
        {/* Social media links column */}
        <div className="footer-column">
          <h4>Stay connected</h4>
          <div className="social-icons">
            <i className="facebook icon big"></i>
            <i className="twitter icon big"></i>
            <i className="instagram icon big"></i>
          </div>
        </div>
      </div>
      
      {/* Bottom section of the footer with legal links */}
      <div className="footer-bottom">
        <p>DEV@Deakin 2022</p>
        <p>Privacy Policy | Terms | Code of Conduct</p>
      </div>
    </div>
  </>
);

export default Footer;
