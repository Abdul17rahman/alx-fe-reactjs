import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul
        style={{
          display: flex,
          justifyContent: "space-between",
          backgroundColor: "gray",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
