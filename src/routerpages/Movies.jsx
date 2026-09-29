import { useLoaderData } from "react-router-dom";

export const Movies =() => {
    const moviesData = useLoaderData();
    console.log(moviesData);
    return (
      <>
      {moviesData.search.map((curMovie) => {
      return <card key={curMovie.imdbID}
     curMovie ={curMovie}/>;
    
    })}

      </>

    );
};