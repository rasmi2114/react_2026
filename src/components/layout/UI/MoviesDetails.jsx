import { useLoaderData } from "react-router-dom";

export const MoviesDetails = () => {
    const moviedata = useLoaderData();
    
    return(
        <>
        <h1>Movies details</h1>
        </>
    );
};