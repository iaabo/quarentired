import React from "react";

function Movie0(props) {
  return (
    <div className="movie-container">
      {props.movies0.map((movie0, index) => (
        <div className="movie-card">
          <img
            src={movie0.Poster}
            alt="Picture not available"
            className="movie-pic"
          />
          <p className="movie-detail">
            {movie0.Title} - {movie0.Year}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Movie0;
