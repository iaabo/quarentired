import React, { useState, useEffect } from "react";
import Movie200 from "./Movie200";
import { Link } from "react-router-dom";

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
    <div className="main-container">
      <h1 className="recomends-0">Quarentired recommends today a marathon of ...</h1>
      <Movie200 movies200={movies200} />
      <Link to="/menu-cinema">Return</Link>
    </div>
  );
};

export default MovieList200;
