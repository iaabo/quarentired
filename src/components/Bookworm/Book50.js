import React from "react";

function Book50(props) {
  return (
    <div>
      {props.books50.map((book50, index) => (
        <div>
            Author: {book50.volumeInfo && book50.volumeInfo.authors}
          <p>{book50.volumeInfo && book50.volumeInfo.title}</p>
          <img
            src={
              book50.volumeInfo &&
              book50.volumeInfo.imageLinks &&
              book50.volumeInfo.imageLinks.smallThumbnail
            }
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
export default Book50;