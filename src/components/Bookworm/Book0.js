import React from "react";
import "./Bookworm.css";

function Book0(props) {
  return (
    <div className="container-book">
      {props.books0.map((book0, index) => (
        <div className="book-card">
          <img
            src={
              book0.volumeInfo &&
              book0.volumeInfo.imageLinks &&
              book0.volumeInfo.imageLinks.smallThumbnail
            }
            alt="Picture not available"
            style={{ height: "350px", width: "250px" }}
          />
          <div className="movie-details">
            <p>{book0.volumeInfo && book0.volumeInfo.authors}</p>
            <p>{book0.volumeInfo && book0.volumeInfo.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Book0;
