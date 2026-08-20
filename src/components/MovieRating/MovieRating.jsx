
//import React from 'react';
let age = 19;

// let canWatch = "Not available";
// if( age >= 18) canWatch ="watch Now";

//call canWatch as function 
const canWatch = () => {
 if(age >= 18) return "watch Now";
 return "Not Available";
}



const MovieRating = ({moviename,rating,Genre}) => {

  return (
    <div style={{ borderBottom: "1px solid #393737" , margin:"1rem", paddingBottom:"1rem" }}>
      <div>
        <img src="images/movie.jpg" alt="movie" width="20%" height="20%" />
      </div>

      <h1>{moviename}</h1>
      <h2>Genre: {!Genre ? Genre : 'N/A'}</h2>
      <h3>Rating: {rating}</h3>
      <div className="details">
        <p>Director : Nitin Kakkar</p>
        <p>Writers  : Vishesh BhattSanjay MasoommBilal Siddiqi</p>
        <p>Stars    : Emraan HashmiShabana AzmiDisha Patani</p>
        <p>See production info at IMDbPro </p>
      </div>
      <p style={{marginBottom:"1rem" }}>
      Summary : Shivam returns to the crime world, where his path forward demands redemption, love, and sacrifice. 
       <br />As relationships deepen and conflicts intensify, every choice tests his resolve and shapes his destiny.
      </p>
      <button> {canWatch()}</button>    {/*using function  */} 
      {/* <button>{canWatch}</button> */}  {/* using the declaration  */} 
      {/* <button>{age >= 18 ?"watch now" : "Not available"}</button> }  {/* using the condition  */ } 
    </div> 
   );
};

export default MovieRating ;