import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="main-container">
        <div className="title">
          <h2 className="title-h2">
            Are you stuck between 4 walls and don’t wanna bake or stock on
            toilet paper? This app is for you!
          </h2>
        </div>
        <Link
          to="/menu"
          className="button"
          style={{ textDecoration: "none", color: "#0E075F" }}
        >
          Start now!
        </Link>
      </div>
    </div>
  );
};

export default Home;
