import { Children, createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({Children}) => {
    const [theme, setTheme ] = useState ('dark');

    const handleToggleTheme =() => {
        return setTheme((prevThem) => (prevThem == "dark" ? "light" : "dark"));
    }

    return <DarkLight.Provider value={{theme, handleToggleTheme}}>{Children}</DarkLight.Provider>

};

//creating a component

export const DarkLight =() => {
    const {theme, handleToggleTheme} = use(ThemeContext);

    return (
        <div>
            <h1>Dark Light Mode Website</h1>
            <p>Hello!! My React v19 Fans 👍</p><br></br>
            <button onClick={handleToggleTheme}> {theme === "dark" ? "Switch to light mode" : "Switch to Dark mode"} </button>
        </div>
    );
};

