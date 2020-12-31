import React from "react";

function Book200(props) {
  return (
    <div>
      {props.books200.map((book200, index) => (
        <div>
          {book200.volumeInfo && book200.volumeInfo.authors}
          <p>{book200.volumeInfo && book200.volumeInfo.title}</p>
          <img
            src={
              book200.volumeInfo &&
              book200.volumeInfo.imageLinks &&
              book200.volumeInfo.imageLinks.smallThumbnail
            }
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
export default Book200;
