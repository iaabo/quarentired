import React from "react";
import { Link } from "react-router-dom";
import pride from "../../assets/pride.jpeg";
import geisha from "../../assets/geisha.jpeg";

const BookList0 = () => {
  return (
    <div>
      <h1 className="books-title">Quarentired recommends ...</h1>
      <div className="books">
        <div className="book-1">
          <img src={pride} alt="" style={{ height: "350px", width: "250px" }} />
          <p>Pride and Prejudice - Jane Austen</p>
        </div>
        <div className="book-2">
          <img
            src={geisha}
            alt=""
            style={{ height: "350px", width: "250px" }}
          />
          <p>Memoirs of a Geisha - Arthur Golden</p>
        </div>
      </div>
      <Link to="/menu-book">Return</Link>
    </div>
  );
};

export default BookList0;
