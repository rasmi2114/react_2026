
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
    <div style={{ borderBottom: "1px solid #393737" , margin:"1rem", paddingBottom:"1rem" }}>
      <div>
        <img src={seriesData[0].img_url} alt="movie" width="20%" height="20%" />
      </div>

      <h1>Name:{seriesData[0] .moviename} </h1>
      <h2>Genre: {seriesData[0] .Genre}</h2>
      <h3>Rating: {seriesData[0] .rating}</h3>
      <div className="details">
        <p>Director : {seriesData[0] .director}</p>
        <p>Writers  : {seriesData[0] .writers}</p>
        <p>Stars    : {seriesData[0] .stars}</p>
        <p>Release Date: {seriesData[0] .release_date}</p>
      </div>
      <p style={{marginBottom:"1rem" }}>
      Summary : {seriesData[0] .summary} </p>
      <a href={seriesData[0] .watch_url} target="_blank">
         <button> {canWatch()}</button>    {/*using function  */} 
      </a>
     
      {/* <button>{canWatch}</button> */}  {/* using the declaration  */} 
      {/* <button>{age >= 18 ?"watch now" : "Not available"}</button> }  {/* using the condition  */ } 
    </div> 
   );
};

export default MovieRating ;