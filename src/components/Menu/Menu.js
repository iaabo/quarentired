import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import popcorn from "../../assets/popcorn.png";
import book from "../../assets/book.png";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="main-container">
      <div className="menu-container">
        <h1 className="menu-title"> How are you feeling today?</h1>
        <div className="menu-content">
          <div className="cinephile">
            <img src={popcorn} alt="" className="img-menu" />
            <Link to="/menu-cinema" className="link-cine">
              Cinephile
            </Link>
          </div>
          <div className="bookworm">
            <img src={book} alt="" className="img-menu" />
            <Link to="/menu-book" className="link-book">
              Bookworm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
