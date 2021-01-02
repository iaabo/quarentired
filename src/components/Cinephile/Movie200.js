import React from "react";
function Movie200(props) {
  return (
    <div className="movie-container">
      {props.movies200.map((movie200, index) => (
        <div className="movie-card">
          <img
            src={movie200.Poster}
            alt="Picture not available"
            className="movie-pic"
          />
          <p className="movie-detail">
            {movie200.Title} - {movie200.Year}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Movie200;
