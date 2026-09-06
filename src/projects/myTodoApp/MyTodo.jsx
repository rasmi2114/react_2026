import { useState } from "react";
import { Count } from "./CounterProject/Count/Count";
import { CounterButton } from "./CounterProject/Countbutton/Counterbutton";


const MyTodo = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const incrementCount =() =>{
        setCount((prev) => prev+parseInt(inputValue))
        if (count >= 10) {
            setCount(10);
        }
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const decrementCount =() => {
        setCount((prev) => Math.max(0, prev - parseInt(inputValue, 10)))
    }

    const resetCount =() => {
        setCount(0);
    }



    return (
        <>
        <Count defaultCount={count} bgcolor="lightgray"/><br/>
        <input type="text" value={inputValue} onChange={handleInputChange} />&nbsp;
        <CounterButton inc={incrementCount} decr={decrementCount} reset={resetCount} count={count}/>
        </>
    )
};

export default MyTodo;