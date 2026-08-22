// import { Fragment } from "react";
import MovieRating from "./components/MovieRating/MovieRating";
import Producer from "./components/Producer/Producer";

export const App = () => {
  //const type="Romantic";
  return (
    
    <>
      <Producer/>
     <MovieRating moviename="Awarapan 2" rating="7.6" Genre='Romantic' />
     <MovieRating moviename="The End of Oak Street" rating="9" Genre='Action'/>
     <MovieRating moviename="Batwara 1947" rating="6" Genre='Comedy'/>
     <MovieRating moviename="The Last House" rating="5" />
    </>
    
  );
};