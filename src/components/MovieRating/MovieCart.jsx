export const MovieCart =({data}) => {
//console.log(data);
const { img_url, moviename, Genre, rating, director, writers, stars, release_date, summary, watch_url} = data;

let age = 19;
// let canWatch = "Not available";
// if( age >= 18) canWatch ="watch Now"; 

//call canWatch as function 
const canWatch = () => {
 if(age >= 18) return "Watch Now";
 return "Not Available";
}

 return ( 
 
  <li>
    <div style={{ borderBottom: "1px solid #393737" , margin:"1rem", paddingBottom:"1rem" }}>
      <div>
        <img src={img_url} alt="movie" width="30%" height="20%" />
      </div>

      <h1>Name:{moviename} </h1>
      <h2>Genre: {Genre}</h2>
      <p>Rating: {rating}</p>
      <div className="details">
        <p>Director : {director}</p>
        <p>Writers  : {writers}</p>
        <p>Stars    : {stars}</p>
        <p>Release Date: {release_date}</p>
      </div>
      <p style={{marginBottom:"1rem" }}>
      Summary : {summary} </p>
      <a href= {watch_url} target="_blank">
         <button> {canWatch()}</button>    {/*using function  */} 
      </a>
     
      {/* <button>{canWatch}</button> */}
      {/* <button>{age >= 18 ? "watch now" : "Not available"}</button> */}
    </div> 
 </li>
);
}