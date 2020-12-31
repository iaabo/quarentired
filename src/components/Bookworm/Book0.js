import React from "react";

function Book0(props) {
  return (
    <div>
      {props.books0.map((book0, index) => (
        <div>
            Author: {book0.volumeInfo && book0.volumeInfo.authors}
          <p>{book0.volumeInfo && book0.volumeInfo.title}</p>
          <img
            src={
              book0.volumeInfo &&
              book0.volumeInfo.imageLinks &&
              book0.volumeInfo.imageLinks.smallThumbnail
            }
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
export default Book0;
