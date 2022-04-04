import React from "react";
import { Link } from "react-router-dom";
import "./navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;