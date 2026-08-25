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

const raiting = rating >= 8.0 ? "super-hit" : "average";

 return ( 
 
  <li className="card-li">
      <div>
        <img src={img_url} alt="movie" />
      </div>
      <div className="card-container">
        <h2>Name:{moviename} </h2>
        <h3>Genre: {Genre}</h3>
        <p className="rating-col">Rating:<span className={`rating ${raiting}`}> {rating} </span></p>
        <p><strong>Director : </strong>{director}</p>
        <p><strong> Writers  :</strong> {writers}</p>
        <p><strong>Stars    : </strong>{stars}</p>
        <p><strong>Release Date:</strong> {release_date}</p>
        <p><strong> Summary :</strong> {summary} </p>
        <a href= {watch_url} target="_blank">
          <button> {canWatch()}</button>    {/*using function  */} 
        </a>
        {/* <button>{canWatch}</button> */}
        {/* <button>{age >= 18 ? "watch now" : "Not available"}</button> */}
    </div> 
 </li>
);
}