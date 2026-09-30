import { useParams } from "react-router-dom";

export const MoviesDetails = () =>{
    const params = useParams();
    console.log(params);
    return(
        <>
        <h1>Movies details</h1>
        </>
    );
};