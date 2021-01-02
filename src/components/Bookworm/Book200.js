import React from "react";

function Book200(props) {
  return (
    <div>
      {props.books200.map((book200, index) => (
        <div className="container-books">
          {book200.volumeInfo && book200.volumeInfo.authors}
          <p>{book200.volumeInfo && book200.volumeInfo.title}</p>
          <img
            src={
              book200.volumeInfo &&
              book200.volumeInfo.imageLinks &&
              book200.volumeInfo.imageLinks.smallThumbnail
            }
            alt="Picture not available" style={{ height: "350px", width: "250px" }}
          />
        </div>
      ))}
    </div>
  );
}
export default Book200;
