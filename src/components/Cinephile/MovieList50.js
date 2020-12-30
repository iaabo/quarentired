import React, { useState, useEffect } from "react";
import Movie50 from "./Movie50";
import { Link } from "react-router-dom";

const MovieList50 = () => {
  const [movies50, setMovies50] = useState([]);

  const getMovieRequest50 = async () => {
    const url = "http://www.omdbapi.com/?s=superman&type=movie&apikey=68259e92";

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
      <h1 className="recomends">Quarentired recommends a marathon of ...</h1>
      <Movie50 movies50={movies50} />
      <Link to="/menu-cinema">Return</Link>
    </div>
  );
};

export default MovieList50;
