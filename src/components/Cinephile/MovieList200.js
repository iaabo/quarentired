import React, { useState, useEffect } from "react";
import Movie200 from "./Movie200";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const MovieList200 = () => {
  const [movies200, setMovies200] = useState([]);

  const getMovieRequest200 = async () => {
    const url =
      "http://www.omdbapi.com/?s=how_i_met_your_mother&type=series&apikey=68259e92";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies200(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest200();
  }, []);

  return (
    <div>
      <div className="img-container">
        <div className="background-container">
          <h1 className="header-message">
            Quarentired recommends today a marathon of ... with a pint of cider.
          </h1>
        </div>
      </div>
      <div className="container">
        <Movie200 movies200={movies200} />
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

export default MovieList200;
