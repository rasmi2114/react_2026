import "./Todo.css";
import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo =() => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTasks] = useState([]);

    const handleInputChange =(value) =>{
        setInputValue(value);
    };

    const handelFormSubmit = (event) => {
        event.preventDefault();

        if(!inputValue) return;

        if(task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTasks((prevTask) => [ ...prevTask, inputValue]);

        setInputValue("");
    };

    return (
        <section className ="todo-container">
            <header>
                <h1> Todo List</h1>
            </header>
            <section className ="form">
                <form onSubmit={handelFormSubmit}>
                    <div>
                        <input type="text" classname="todo-input" autoComplete="off" 
                        value={inputValue} 
                        onChange={(event) => handleInputChange (event.target.value)}/>
                    </div>
                    <div>
                        <button type="submit">Add Task</button>
                    </div>
                </form>

            </section>
            <section classname="myOrderList">
                    <ul>
                        {task.map((curTask, index) => {
                            return (
                               <li key={index} className="todo-item">
                                    <span >{curTask}</span>
                                    <button className="check-btn">
                                        <MdCheck />
                                    </button>
                                    <button className="delete-btn">
                                        <MdDeleteForever />
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
            </section>
        </section>
      
    );
    
};