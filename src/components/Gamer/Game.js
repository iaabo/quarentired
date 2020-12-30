import React from "react";

function Game(props) {
  return (
    <div>
      {props.games.map((game, id) => (
        <div>
          <p>{game.name}</p>
          <img src={game.background_image} alt="" style={{height:"250px", width:"400px"}} />
        </div>
      ))}
    </div>
  );
}
export default Game;
