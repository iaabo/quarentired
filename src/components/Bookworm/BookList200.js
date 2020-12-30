import React from "react";
import { Link } from "react-router-dom";

const BookList200 = () => {
  return (
    <div>
      <h1 className="booklist200-title">
        You are too bored to read ... Choose these options instead!
      </h1>
      <Link to="/movies-3" style={{ textDecoration: "none", color: "blue" }}>
        Movies
      </Link>
      <Link to="/games-3" style={{ textDecoration: "none", color: "blue" }}>
        Games
      </Link>
    </div>
  );
};

export default BookList200;
