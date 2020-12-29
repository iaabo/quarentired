import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main-container">
      <div className="title">
        <h1 className="title-h1">Quarentired?</h1>
      </div>
      <Link
        to="/home"
        className="button"
        style={{ textDecoration: "none", color: "#0E075F" }}
      >
        Say No More
      </Link>
    </div>
  );
};

export default LandingPage;
