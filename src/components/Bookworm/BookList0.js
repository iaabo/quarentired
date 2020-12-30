import React from "react";
import { Link } from "react-router-dom";
import mockingbird from "../../assets/mockingbird.jpeg";
import newworld from "../../assets/newworld.jpeg";

const BookList0 = () => {
  return (
    <div>
      <h1 className="books-title">Quarentired recommends ...</h1>
      <div className="books">
        <div className="book-1">
          <img
            src={mockingbird}
            alt=""
            style={{ height: "350px", width: "250px" }}
          />
          <p>To kill a Mockingbird - Harper Lee</p>
        </div>
        <div className="book-2">
          <img
            src={newworld}
            alt=""
            style={{ height: "350px", width: "250px" }}
          />
          <p>Brave new world - Aldous Huxley</p>
        </div>
      </div>
      <Link to="/menu-book">Return</Link>
    </div>
  );
};

export default BookList0;
