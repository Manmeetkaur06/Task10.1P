import React from 'react';
import { Input } from 'semantic-ui-react';
import './Footer.css';

const Footer = () => (
  <>
    {/* Email sign-up section outside of the main footer */}
    <div className="signup-section">
      <div className="signup-container">
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
        {/* Input for email with a 'Subscribe' button */}
        <Input 
          action={{ color: 'grey', labelPosition: 'right', icon: 'mail', content: 'Subscribe' }} 
          placeholder="Enter your email..." 
        />
      </div>
    </div>

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
