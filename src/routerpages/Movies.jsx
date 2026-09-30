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