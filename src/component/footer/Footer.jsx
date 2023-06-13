import React from 'react';
import '../footer/Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <h3 className="footer-title">Get in Touch</h3>
      <div className="social-links">
        <a href="https://example.com">Twitter</a>
        <a href="https://example.com">Instagram</a>
        <a href="https://example.com">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;