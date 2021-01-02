import React, { useState, useEffect } from "react";
import Movie50 from "./Movie50";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const MovieList50 = () => {
  const [movies50, setMovies50] = useState([]);

  const getMovieRequest50 = async () => {
    const url =
      "https://www.omdbapi.com/?s=bridgerton&type=series&apikey=68259e92";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies50(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest50();
  }, []);

  return (
    <div>
      <div className="img-container">
        <div className="background-container">
          <h1 className="header-message">
            Quarentired recommends today this marathon with a cappuccino.
          </h1>
        </div>
      </div>
      <div className="container">
        <Movie50 movies50={movies50} />
        <div className="btn-return">
          <Link to="/menu-cinema" className="link-return">
            Return
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieList50;
