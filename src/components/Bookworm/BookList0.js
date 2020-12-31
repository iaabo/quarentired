import React, { useState, useEffect } from "react";
import Book0 from "./Book0";
import { Link } from "react-router-dom";

const BookList0 = () => {
  const [books0, setBooks0] = useState([]);

  const getBookRequest0 = async () => {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=inauthor:george+r+r+martin";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson.items);
    setBooks0(responseJson.items);
  };

  useEffect(() => {
    getBookRequest0();
  }, []);

  return (
    <div>
      <h1 className="recomends">Quarentired recommends ...</h1>
      <Book0 books0={books0} />
      <Link to="/menu-book">Return</Link>
    </div>
  );
};

export default BookList0;
