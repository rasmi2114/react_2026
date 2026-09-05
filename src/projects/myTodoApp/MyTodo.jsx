import { useState } from "react";
import { MyTodoForm } from "./MyTodoForm/MyTodoForm";

const MyTodo = () => {
    const formNameDefault = "India";
    const [formName, setFormName] = useState(formNameDefault);
    const changeAppName = () => {
        setFormName("My Todo App Updated");
    }
    const changeMyName = (arg) => {
        console.log(arg + " is my country");
    }
    return (
        <>
        <MyTodoForm formName={formName} formNameChange={changeAppName} changeMyname={changeMyName} />
        </>
    )
}

export default MyTodo;