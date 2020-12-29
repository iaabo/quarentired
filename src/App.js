import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import MenuCinephile from "./components/Cinephile/MenuCinephile";
import MenuBookworm from "./components/Bookworm/MenuBookworm";
import MovieDetails from "./components/Cinephile/MovieDetails";
import MovieList0 from "./components/Cinephile/MovieList0";
import MovieList50 from "./components/Cinephile/MovieList50";
import MovieList200 from "./components/Cinephile/MovieList200";
import BookDetails from "./components/Bookworm/BookDetails";
import BookList0 from "./components/Bookworm/BookList0";
import BookList50 from "./components/Bookworm/BookList50";
import BookList200 from "./components/Bookworm/BookList200";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/menu-cine" component={MenuCinephile} />
        <Route path="/menu-book" component={MenuBookworm} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/movies-1" component={MovieList0} />
        <Route path="/movies-2" component={MovieList50} />
        <Route path="/movies-3" component={MovieList200} />
        <Route path="/book/:id" component={BookDetails} />
        <Route path="/books-1" component={BookList0} />
        <Route path="/books-2" component={BookList50} />
        <Route path="/books-3" component={BookList200} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
