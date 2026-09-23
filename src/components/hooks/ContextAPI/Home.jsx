import { useContext } from "react";
import { MyContext } from "./MyContext";

export const Home = () => {
    const {myName, myage} = useContext(MyContext)
    return(
        <>
        <h1>Hello context API. My name is {myName}. I am {myage} yrs old.</h1> <br></br>
        </>
    );
};

