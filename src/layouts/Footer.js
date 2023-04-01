import React from "react";
import "./Footer.css";
import Logo2 from "../assets/logovertical.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">
          <img src={Logo2} alt="LOGO" />
        </Link>
      </nav>

      <nav>
        <h3>Contact Us</h3>
        <ul>
          <li>Address: 123 Lemon Street</li>
          <li>Email: order@littlelemon.com</li>
          <li>Phone: 123 456 7890</li>
        </ul>
      </nav>
      <nav>
        <h3>Opening</h3>
        <ul>
          <li>Monday - Friday: 9:00 - 22:00</li>
          <li>Saturday - Sunday: 10:00 - 24:00</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
