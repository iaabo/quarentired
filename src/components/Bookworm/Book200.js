import React from "react";
import "./Bookworm.css";

function Book200(props) {
  return (
    <div className="container-book">
      {props.books200.map((book200, index) => (
        <div className="book-card">
          <img
            src={
              book200.volumeInfo &&
              book200.volumeInfo.imageLinks &&
              book200.volumeInfo.imageLinks.smallThumbnail
            }
            alt="Picture not available"
            style={{ height: "350px", width: "250px" }}
          />
          <div className="movie-details">
            <p>{book200.volumeInfo && book200.volumeInfo.authors}</p>
            <p>{book200.volumeInfo && book200.volumeInfo.title}</p>
          </div>{" "}
        </div>
      ))}
    </div>
  );
}
export default Book200;
