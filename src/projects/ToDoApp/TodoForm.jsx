import { useState,useEffect } from "react";
import { TodoFilter } from "./TodoFilter";

export const TodoForm = ({ onAddTodo, activeFilter, onFilterChange }) => {
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
  }, []);
  return (
    <div className="form-container">
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
        </div>
        
      </form>
    </section>
     <TodoFilter
       activeFilter={activeFilter}
       onFilterChange={onFilterChange}
     />
     </div>
  );
};