import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav>
        <ul className="nav-wrapper">
          <li className="menu-item logo-text">Penned thoughts</li>
          <li className="menu-item login-btn">
            {" "}
            <Link to="login">Login</Link>
          </li>
          <li className="menu-item signup-btn">
            <Link to="/register">Sign up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
