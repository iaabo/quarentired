import React, { useState, useEffect } from "react";
import Game from "./Game";
import { Link } from "react-router-dom";

const GameList0 = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://wild-games.herokuapp.com/api/v1")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div>
      <h1 className="recomends">Quarentired recommends ...</h1>
      <Game games={games} />
      <Link to="/menu-game">Return</Link>
    </div>
  );
};

export default GameList0;
