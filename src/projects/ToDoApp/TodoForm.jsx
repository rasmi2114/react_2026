import { useState,useEffect } from "react";

export const TodoForm = ({ onAddTodo, callingGirlname }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };
  useEffect(() => {
    console.log("ladki", ladki);
  }, []);
  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
          <button
            type="button"
            className="todo-btn"
            onClick={callingGirlname}
          >
            Call Girl Name
          </button>
        </div>
      </form>
    </section>
  );
};