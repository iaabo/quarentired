import React, { useState, useEffect } from "react";
import Movie0 from "./Movie0";
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
    <div className="main-recomends">
      <h1 className="recomends-h1">
        Quarentired recommends today a marathon of ...
      </h1>
      <Movie0 movies0={movies0} />
      <h1 className="recomends-h1">... with a cup of green tea.</h1>
      <Link to="/menu-cinema" className="link-return">Return</Link>
    </div>
  );
};

export default MovieList0;
