
// import MyTodo from "./projects/myTodoApp/MyTodo";
// import "./projects/myTodoApp/myTodo.css";
// import { Todo } from "./projects/ToDoApp/Todo";
// import "./components/hooks/ShortCircuit";
// import ShortCircuit from "./components/hooks/ShortCircuit";
// import "./projects/ToDoApp/todo.css";

import { ReducerComp } from "./components/hooks/UseReducer";


//context API
// import { About } from "./components/hooks/ContextAPI/about";
// import { Home } from "./components/hooks/ContextAPI/Home";
// import { MyProvider } from "./components/hooks/ContextAPI/MyContext";


// Dark mode
// import { DarkLight, ThemeProvider } from "./components/hooks/ContextAPI/DarkLight";


// import './components/hooks/UseEffect/Pokemon.css';
// import { PokemonApp } from './projects/PokemonApp/PokemonApp';
// import { Clock } from "./components/hooks/UseEffect/Clock";
// import './components/hooks/UseEffect/useEffect.css';


// import {Registration} from "./components/hooks/UseState/Registration";
// import {LoginForm} from "./components/hooks/UseState/LoginForm";
// import { ContactForm} from "./components/hooks/UseState/ContactForm";
// import './components/hooks/UseState/index.css';



export const App = () => {
  //const type="Romantic";
  return (
   <>
<ReducerComp/>

   {/* contextApi component call */}
    {/* <ThemeProvider>
      <DarkLight/>
    </ThemeProvider> */}
  </>
  );
};