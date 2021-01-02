import React, { useState, useEffect } from "react";
import Book200 from "./Book200";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Bookworm.css";

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
      <div className="img-container-books">
        <div className="background-container">
          <h1 className="header-message">
            Today Quarentired recommends these readings with a cup of hot chocolate.
          </h1>
        </div>
      </div>
      <div className="container">
        <Book200 books200={books200} />
        <div className="btn-return">
          <Link to="/menu-book" className="link-return">
            Return
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookList200;
