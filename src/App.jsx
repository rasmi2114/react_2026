// import { Fragment } from "react";


import MovieRating from "./components/MovieRating/MovieRating";
import Producer from "./components/Producer/Producer";

export const App = () => {
  //const type="Romantic";
  return (
    
    <>
      <Producer/>
     <MovieRating moviename="Awarapan 2" rating="7.6" Genre='Romantic' />
     <MovieRating moviename="Doglapan 2" rating="9" Genre='Action'/>
     <MovieRating moviename="Chhinarpan 2" rating="8" Genre='Comedy'/>
     <MovieRating moviename="Randipan 2" rating="5" />
    </>
  );
};