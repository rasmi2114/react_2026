import { useLoaderData } from "react-router-dom";
import { Card } from "../components/layout/UI/Card";
export const Movies = () => {
  const moviesData = useLoaderData();

  return (
    <ul className="container grid grid-four--cols">
      {moviesData &&
        moviesData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
    </ul>
  );
};



// getting APi using Axios.

// import { useEffect, useState } from "react";
// import { getMovie } from "../services/GetServices";
// import { MovieCart } from "../components/MovieRating/MovieCart";

// export const Movies = () => {
//   const [data, setData] = useState([]);

//   const getMoviedata =async () => {
//     try{
//         const res = await getMovie();
//         setData(res.data.Search);
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
//   };


//   useEffect (() => {
//     getMoviedata();
//   },[]);

//   return (
//     <ul className="container grid grid-four--cols">
//       {data.map ((curElem) => {
//         return <MovieCart  key={curElem.imdbID} data={curElem} />;
//       })}
//     </ul>

//   );

// };
