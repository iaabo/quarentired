import React from "react";

function Movie0(props) {
  return (
    <div>
      {props.movies0.map((movie0, index) => (
        <div>
          <p>
            {movie0.Title} - {movie0.Year}
          </p>
          <img src={movie0.Poster} alt="" />
        </div>
      ))}
    </div>
  );
}
export default Movie0;
