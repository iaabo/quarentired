import React, { useState, useEffect } from "react";
import Movie0 from "./Movie0";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const MovieList0 = () => {
  const [movies0, setMovies0] = useState([]);

  const getMovieRequest0 = async () => {
    const url =
      "http://www.omdbapi.com/?s=peaky_blinders&type=series&apikey=68259e92";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies0(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest0();
  }, []);

  return (
    <div>
      <div className="img-container">
        <div className="background-container">
          <h1 className="header-message">
            Quarentired recommends today a marathon of ... with a cup of green
            tea
          </h1>
        </div>
      </div>
      <div className="container">
        <Movie0 movies0={movies0} />
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

export default MovieList0;
