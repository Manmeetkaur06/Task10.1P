// src/components/Footer.js
import React from 'react';
import { Input } from 'semantic-ui-react';
import './Footer.css';

const Footer = () => (
  <>
    {/* Sign-up section outside the teal background */}
    <div className="signup-section">
      <div className="signup-container">
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
        <Input 
          action={{ color: 'grey', labelPosition: 'right', icon: 'mail', content: 'Subscribe' }} 
          placeholder="Enter your email..." 
        />
      </div>
    </div>

    {/* Footer section with teal background */}
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Explore</h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-column">
          <h4>Stay connected</h4>
          <div className="social-icons">
            <i className="facebook icon big"></i>
            <i className="twitter icon big"></i>
            <i className="instagram icon big"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>DEV@Deakin 2022</p>
        <p>Privacy Policy | Terms | Code of Conduct</p>
      </div>
    </div>
  </>
);

export default Footer;
