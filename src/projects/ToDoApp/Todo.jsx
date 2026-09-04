import "./Todo.css";
import { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo =() => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTasks] = useState([]);
    const[dateTime, setDateTime] = useState();

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

    //todo Date and Time
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
          setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);

       return () => clearInterval(interval);
    }, []);

    //todo handelDeleteTodo function 
        const handelDeleteTodo = (value) => {
            const updatetask = task.filter((curTask) => curTask !== value);
            setTasks(updatetask);   
        }

    // handelClearTodoData funation
    const handelClearTodoData = () => {
        setTasks([]);
    }
  
    return (
        <section className ="todo-container">
            <header>
                <h1> Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>
            <section className ="form">
                <form onSubmit={handelFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" 
                        value={inputValue} 
                        onChange={(event) => handleInputChange (event.target.value)}/>
                    </div>
                    <div>
                        <button type="submit">Add Task</button>
                    </div>
                </form>

            </section>
            <section className="myOrderList">
                    <ul>
                        {task.map((curTask, index) => {
                            return (
                               <li key={index} className="todo-item">
                                    <span >{curTask}</span>
                                    <button className="check-btn">
                                        <MdCheck />
                                    </button>
                                    <button className="delete-btn" onClick={() => handelDeleteTodo(curTask)}>
                                        <MdDeleteForever />
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
            </section>
            <section className="clear-btn" onClick={handelClearTodoData}>
                Clear all
            </section>
        </section>
      
    );
    
};