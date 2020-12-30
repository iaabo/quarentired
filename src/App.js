import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import MenuCinephile from "./components/Cinephile/MenuCinephile";
import MenuBookworm from "./components/Bookworm/MenuBookworm";
import MenuGamer from "./components/Gamer/MenuGamer";
import MovieList0 from "./components/Cinephile/MovieList0";
import MovieList50 from "./components/Cinephile/MovieList50";
import MovieList200 from "./components/Cinephile/MovieList200";
import BookList0 from "./components/Bookworm/BookList0";
import BookList50 from "./components/Bookworm/BookList50";
import BookList200 from "./components/Bookworm/BookList200";
import GameList0 from "./components/Gamer/GameList0";
import GameList50 from "./components/Gamer/GameList50";
import GameList200 from "./components/Gamer/GameList200";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/menu-cinema" component={MenuCinephile} />
        <Route path="/menu-book" component={MenuBookworm} />
        <Route path="/menu-game" component={MenuGamer} />
        <Route path="/movies-1" component={MovieList0} />
        <Route path="/movies-2" component={MovieList50} />
        <Route path="/movies-3" component={MovieList200} />
        <Route path="/books-1" component={BookList0} />
        <Route path="/books-2" component={BookList50} />
        <Route path="/books-3" component={BookList200} />
        <Route path="/games-1" component={GameList0} />
        <Route path="/games-2" component={GameList50} />
        <Route path="/games-3" component={GameList200} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
