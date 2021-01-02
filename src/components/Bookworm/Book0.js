import React from "react";
import "./Bookworm.css";

function Book0(props) {
  return (
    <div className="movie-container">
      {props.books0.map((book0, index) => (
        <div className="movie-card">
          <img
            src={
              book0.volumeInfo &&
              book0.volumeInfo.imageLinks &&
              book0.volumeInfo.imageLinks.smallThumbnail
            }
            alt="Picture not available"
            style={{ height: "350px", width: "250px" }}
          />
         {/*  {book0.volumeInfo && book0.volumeInfo.authors}
          <p>{book0.volumeInfo && book0.volumeInfo.title}</p> */}
        </div>
      ))}
    </div>
  );
}
export default Book0;
