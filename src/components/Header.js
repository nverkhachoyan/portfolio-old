import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header(props) {
  const [isMenuDropped, setIsMenuDropped] = useState(false);
  const location = useLocation();

  return (
    <div className="header-wrapper">
      {/* Logo */}
      <Link to="/" className="logo">
        <h1>Nver Khachoyan</h1>
      </Link>

      {/* Main Navbar */}
      <ul className="navbar">
        <li>
          <Link
            to="/"
            className={`${location.pathname === "/" ? "active" : null}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={`${location.pathname === "/blog" ? "active" : null}`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${location.pathname === "/about" ? "active" : null}`}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${location.pathname === "/contact" ? "active" : null}`}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div
        className="cliclableIcon"
        onClick={() => setIsMenuDropped((prevState) => !prevState)}
      >
        <i className="fa-solid fa-bars navbar-button"></i>
      </div>
      <div
        className={`hamburger-menu-wrapper`}
        style={{
          transform: isMenuDropped ? "translate(0%)" : "translate(100%)"
        }}
      >
        <ul className="hamburger-menu">
          <li>
            <Link
              to="/"
              className={`${location.pathname === "/" ? "active" : null}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`${location.pathname === "/blog" ? "active" : null}`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${location.pathname === "/about" ? "active" : null}`}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact" ? "active" : null
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
