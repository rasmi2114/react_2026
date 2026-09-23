import { use } from "react";
import { MyContext } from "./MyContext";

export const About = () => {
    const {myName, myage} = use(MyContext)
    return(
        <>
        <h1>Hello context API(about). My name is {myName}. I am {myage} yrs old.</h1>
        </>
    );
};