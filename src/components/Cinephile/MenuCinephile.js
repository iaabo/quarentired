import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import smiling from "../../assets/smiling.png";
import neutral from "../../assets/neutral.png";
import sweat from "../../assets/sweat.png";
import "./Cinephile.css";

const MenuCinephile = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="menu-container">
          <h1 className="menu-boredom"> What is your level of boredom?</h1>
          <div className="menu-content">
            <div className="zero">
              <img src={smiling} alt="" className="img-menu" />
              <Link
                to="/movies-1"
                className="link-zero"
                style={{ textDecoration: "none", color: "white" }}
              >
                0%
              </Link>
            </div>
            <div className="bookworm">
              <img src={neutral} alt="" className="img-menu" />
              <Link
                to="/movies-2"
                className="link-fifty"
                style={{ textDecoration: "none", color: "white" }}
              >
                50%
              </Link>
            </div>
            <div className="bookworm">
              <img src={sweat} alt="" className="img-menu" />
              <Link
                to="/movies-3"
                className="link-hundred"
                style={{ textDecoration: "none", color: "white" }}
              >
                200%
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCinephile;
