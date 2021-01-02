import React, { useState, useEffect } from "react";
import Book50 from "./Book50";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Bookworm.css";

const BookList50 = () => {
  const [books50, setBooks50] = useState([]);

  const getBookRequest50 = async () => {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=intitle:shadows+inauthor:ruiz+zafon";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson.items);
    setBooks50(responseJson.items);
  };

  useEffect(() => {
    getBookRequest50();
  }, []);

  return (
    <div>
      <div className="img-container-books">
        <div className="background-container">
          <h1 className="header-message">
            Today Quarentired recommends these readings with a cup of green tea.
          </h1>
        </div>
      </div>
      <div className="container">
        <Book50 books50={books50} />
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

export default BookList50;
