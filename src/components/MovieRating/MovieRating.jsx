
//import React from 'react';
import seriesData from "../../api/movieData.json";
import {MovieCart} from "./MovieCart";

const MovieRating = () => {

  return (
    <ul>
      {seriesData.map((curElem) => (
        <MovieCart key= {curElem.id} curElem= {curElem}/>       
      ))} 
    </ul>
    
  );
};

export default MovieRating;