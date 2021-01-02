import React, { useState, useEffect } from "react";
import Book0 from "./Book0";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Bookworm.css";

const BookList0 = () => {
  const [books0, setBooks0] = useState([]);
  const getBookRequest0 = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:Lagercrantz/`;

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
      <div className="img-container-books">
        <div className="background-container">
          <h1 className="header-message">
            Today Quarentired recommends these readings with a cup of iced
            coffee.
          </h1>
        </div>
      </div>
      <div className="container">
        <Book0 books0={books0} />
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

export default BookList0;
