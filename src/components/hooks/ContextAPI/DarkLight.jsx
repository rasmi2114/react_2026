import { Children, createContext, useState } from "react";

export const DarkLight = createContext();

export const DarkProvider = ({Children}) => {
    const [theme, setTheme ] = useState ('dark');

    return <DarkLight.Provider value={{theme}}>{Children}</DarkLight.Provider>

};

