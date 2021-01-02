import React from "react";

function Movie50(props) {
  return (
    <div className="movie-container">
      {props.movies50.map((movie50, index) => (
        <div className="movie-card">
          <img
            src={movie50.Poster}
            alt="Picture not available"
            className="movie-pic"
          />
          <p className="movie-detail">
            {movie50.Title} - {movie50.Year}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Movie50;
