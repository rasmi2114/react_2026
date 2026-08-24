
//import React from 'react';
import seriesData from "../../api/movieData.json";
let age = 19;

// let canWatch = "Not available";
// if( age >= 18) canWatch ="watch Now";

//call canWatch as function 
const canWatch = () => {
 if(age >= 18) return "watch Now";
 return "Not Available";
}



const MovieRating = () => {

  return (
    <ul>
      {seriesData.map((curElem) => (
      <li key={curElem.moviename}>
    <div style={{ borderBottom: "1px solid #393737" , margin:"1rem", paddingBottom:"1rem" }}>
      <div>
        <img src={curElem.img_url} alt="movie" width="20%" height="20%" />
      </div>

      <h1>Name:{curElem.moviename} </h1>
      <h2>Genre: {curElem.Genre}</h2>
      <h3>Rating: {curElem.rating}</h3>
      <div className="details">
        <p>Director : {curElem.director}</p>
        <p>Writers  : {curElem.writers}</p>
        <p>Stars    : {curElem.stars}</p>
        <p>Release Date: {curElem.release_date}</p>
      </div>
      <p style={{marginBottom:"1rem" }}>
      Summary : {curElem.summary} </p>
      <a href={curElem.watch_url} target="_blank">
         <button> {canWatch()}</button>    {/*using function  */} 
      </a>
     
      {/* <button>{canWatch}</button> */}
      {/* <button>{age >= 18 ? "watch now" : "Not available"}</button> */}
    </div> 
    </li>
      ))}
    </ul>
      
   );
};

export default MovieRating ;