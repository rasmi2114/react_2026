import { DarkMode } from "./projects/DarkMode/DarkMode";
//import { Todo } from "./projects/ToDoApp/Todo";
import "./projects/ToDoApp/todo.css";
// import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwtich";
// import { State } from "./components/hooks/State";
// import { Fragment } from "react";
// import { EventHandling } from "./components/EventHandling/EventHandling";
// import MovieRating from "./components/MovieRating/MovieRating";
// import { EventProps } from "./components/EventHandling/Eventprops";
// import { EventPropagation } from "./components/EventHandling/EventPropagation";


export const App = () => {
  //const type="Romantic";
  return (
    < section className="container">
      {/* <h1 className="card-heading">List Of Upcoming Released Movies</h1> */}
      {/* <MovieRating  /> */}
      {/* <EventHandling /> */}
      {/* <EventProps/> */}
      {/* < EventPropagation /> */}
      {/* < State/> */}
      {/* <LiftingState /> */}
      {/* <ToggleSwitch /> */}
      {/* <Todo/> */}
      <DarkMode/>
    </section>
    
  );
};