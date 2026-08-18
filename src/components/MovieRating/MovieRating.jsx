
import React from 'react';

const MovieRating = () => {
   return (
    <div style={{ borderBottom: "1px solid #393737" , margin:"1rem" }}>
      <div>
        <img src="images/movie.jpg" alt="movie" width="20%" height="20%" />
      </div>

      <h1>Awarapan 2</h1>

      <h3>Rating: 7.3/10 </h3>
      <div className="details">
        <p>Director : Nitin Kakkar</p>
        <p>Writers  : Vishesh BhattSanjay MasoommBilal Siddiqi</p>
        <p>Stars    : Emraan HashmiShabana AzmiDisha Patani</p>
        <p>See production info at IMDbPro </p>
      </div>
      <p style={{marginBottom:"1rem" }}>
      Sumary : Shivam returns to the crime world, where his path forward demands redemption, love, and sacrifice. 
       <br />As relationships deepen and conflicts intensify, every choice tests his resolve and shapes his destiny.
      </p>
    </div>
   );

};



export default MovieRating ;