import React from "react";
import { Link } from "react-router-dom";
import Food from "../assets/Food.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Welcome to Little Lemon! Our webapp is your convenient go-to
          destination for fresh and delicious food. With just a few clicks, you
          can browse our menu and <u>book for reservations.</u>
        </p>
        <button>
          <Link to="/booking">Reserve a table</Link>
        </button>
      </div>
      <div className="right-side">
        <img
          src={Food}
          alt="our cook holding a tablet with delicoues baguettes"
        />
      </div>
    </header>
  );
};

export default Header;
