import React from "react";
import "./Bookworm.css";

function Book50(props) {
  return (
    <div className="container-book">
      {props.books50.map((book50, index) => (
        <div className="book-card">
          <img
            src={
              book50.volumeInfo &&
              book50.volumeInfo.imageLinks &&
              book50.volumeInfo.imageLinks.smallThumbnail
            }
            alt="Picture not available"
            style={{ height: "350px", width: "250px" }}
          />
           <div className="movie-details">
          <p>{book50.volumeInfo && book50.volumeInfo.authors}</p>
          <p>{book50.volumeInfo && book50.volumeInfo.title}</p>
        </div></div>
      ))}
    </div>
  );
}
export default Book50;
