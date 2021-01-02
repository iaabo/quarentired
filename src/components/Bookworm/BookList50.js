import React, { useState, useEffect } from "react";
import Book50 from "./Book50";
import { Link } from "react-router-dom";

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
    <div className="main-container"> 
      <h1 className="recomends">Quarentired recommends today ...</h1>
      <Book50 books50={books50} />
      <Link to="/menu-book">Return</Link>
    </div>
  );
};

export default BookList50;
