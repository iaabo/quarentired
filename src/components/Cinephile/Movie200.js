import React from "react";
function Movie200(props) {
  return (
    <div>
      {props.movies200.map((movie200, index) => (
        <div>
          <p>
            {movie200.Title} - {movie200.Year}
          </p>

          <img src={movie200.Poster} alt="" />
        </div>
      ))}
    </div>
  );
}
export default Movie200;
