import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import smiling from "../../assets/smiling.png";
import neutral from "../../assets/neutral.png";
import sweat from "../../assets/sweat.png";
import "./Bookworm.css";

const MenuBookworm = () => {
  return (
    <div>
      <div className="main-container-boredom">
        <div className="menu-container-boredom">
          <h1 className="menu-title-boredom">
            {" "}
            What is your level of boredom?
          </h1>
          <div className="menu-content-boredom">
            <div className="zero">
              <img src={smiling} alt="" className="img-menu" />
              <Link to="/books-1" className="link-zero">
                0%
              </Link>
            </div>
            <div className="fifty">
              <img src={neutral} alt="" className="img-menu" />
              <Link to="/books-2" className="link-fifty">
                50%
              </Link>
            </div>
            <div className="hundred">
              <img src={sweat} alt="" className="img-menu" />
              <Link to="/books-3" className="link-hundred">
                200%
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBookworm;
