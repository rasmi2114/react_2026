
//import React from 'react';
import seriesData from "../../api/movieData.json";
import {MovieCart} from "./MovieCart";

const MovieRating = () => {

  return (
    <ul className=" grid grid-three-cols">
      {seriesData.map((curElem) => (
        <MovieCart key= {curElem.id} data= {curElem}/>       
      ))} 
    </ul>
    
  );
};

export default MovieRating;