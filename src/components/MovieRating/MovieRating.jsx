
//import React from 'react';
import seriesData from "../../api/movieData.json";
import {MovieCart} from "./MovieCart";

const MovieRating = () => {

  return (
    <ul>
      {seriesData.map((curElem) => (
        <MovieCart key= {curElem.id} data= {curElem}/>       
      ))} 
    </ul>
    
  );
};

export default MovieRating;