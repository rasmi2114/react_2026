// import { Todo } from "./projects/ToDoApp/Todo";
// import ShortCircuit from "./components/hooks/ShortCircuit";
// import "./projects/ToDoApp/todo.css";


//context API
// import { About } from "./components/hooks/ContextAPI/about";
// import { Home } from "./components/hooks/ContextAPI/Home";
// import { MyProvider } from "./components/hooks/ContextAPI/MyContext";


// Dark mode
// import { DarkLight, ThemeProvider } from "./components/hooks/ContextAPI/DarkLight";

// import {Registration} from "./components/hooks/UseState/Registration";
// import {LoginForm} from "./components/hooks/UseState/LoginForm";
// import { ContactForm} from "./components/hooks/UseState/ContactForm";
// import './components/hooks/UseState/index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./routerpages/About";
import { Home } from "./routerpages/Home";
import { Movies } from "./routerpages/Movies";
import { Contact } from "./routerpages/Contact";
import AppLayout from "./components/layout/AppLayout";
import { ErrorPages } from "./components/layout/ErrorPages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<AppLayout/>,
      errorElement : <ErrorPages/>,
      children: [
        {
        path: "/",
        element: <Home />
        },
        {
        path: "/About",
        element: <About/>
        },
        {
        path: "/Movies",
        element: <Movies/>
        },
        {
          path: "/Contact",
          element: <Contact />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;