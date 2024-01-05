// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li><Link to="/products/category1">Category 1</Link></li>
            <li><Link to="/products/category2">Category 2</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Cart</h3>
          <ul>
            <li><Link to="/cart">View Cart</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your E-commerce Website</p>
      </div>
    </footer>
  );
};

export default Footer;
