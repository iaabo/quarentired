import React, { useState, useEffect } from "react";
import Book200 from "./Book200";
import { Link } from "react-router-dom";

const BookList200 = () => {
  const [books200, setBooks200] = useState([]);

  const getBookRequest200 = async () => {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=inauthor:goscinny";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson.items);
    setBooks200(responseJson.items);
  };

  useEffect(() => {
    getBookRequest200();
  }, []);

  return (
    <div>
      <h1 className="recomends">Quarentired recommends today ...</h1>
      <Book200 books200={books200} />
      <Link to="/menu-book">Return</Link>
    </div>
  );
};

export default BookList200;
