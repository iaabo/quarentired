import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      Navbar
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
