import React from "react";

function Movie50(props) {
  return (
    <div>
      {props.movies50.map((movie50, index) => (
        <div>
          <p>
            {movie50.Title} - {movie50.Year}
          </p>
          <img src={movie50.Poster} alt="" />
        </div>
      ))}
    </div>
  );
}
export default Movie50;
