import React from "react";
import { Link } from "react-router-dom";
import smiling from "../../assets/smiling.png";
import neutral from "../../assets/neutral.png";
import sweat from "../../assets/sweat.png";
import "./Cinephile.css";

const MenuCinephile = () => {
  return (
    <div className="main-container-boredom">
      <div className="menu-container-boredom">
        <h1 className="menu-title-boredom"> What is your level of boredom?</h1>
        <div className="menu-content-boredom">
          <div className="zero">
            <img src={smiling} alt="" className="img-menu" />
            <Link to="/movies-1" className="link-zero">
              0%
            </Link>
          </div>
          <div className="fifty">
            <img src={neutral} alt="" className="img-menu" />
            <Link to="/movies-2" className="link-fifty">
              50%
            </Link>
          </div>
          <div className="hundred">
            <img src={sweat} alt="" className="img-menu" />
            <Link to="/movies-3" className="link-hundred">
              200%
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCinephile;
