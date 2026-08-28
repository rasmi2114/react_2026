// import { Fragment } from "react";
import MovieRating from "./components/MovieRating/MovieRating";
import "./components/MovieRating/Movies.css"

export const App = () => {
  //const type="Romantic";
  return (
    < section className="container">
      <h1 className="card-heading">List Of Upcoming Released Movies</h1>
      <MovieRating  />
    </section>
    
  );
};