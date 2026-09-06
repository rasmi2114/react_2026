import { useState } from "react";
import { Count } from "./CounterProject/Count/Count";
import { CounterButton } from "./CounterProject/Countbutton/Counterbutton";


const MyTodo = () => {
    const [count, setCount] = useState(0);

    const incrementCount =() =>{
        setCount((prev) => prev+1)
        if (count >= 10) {
            alert("Count cannot exceed 10");
            setCount(10);
        }
    }

    const decrementCount =() => {
        setCount((prev) => prev-1)
        if (count <= 0) {
            alert("Count cannot be negative");
            setCount(0);
        } 
    }

    const resetCount =() => {
        setCount(0);
    }

    return (
        <>
        <Count defaultCount={count}/>
        <CounterButton inc={incrementCount} decr={decrementCount} reset={resetCount} count={count}/>
        </>
    )
}

export default MyTodo;