import { createContext } from "react";

//1 step
export const MyContext = createContext();

//2nd step
export const MyProvider = ({children}) => {
    const myName ="Rashmi";
    return <MyContext.Provider value={{myName}}>{children}
        
    </MyContext.Provider>

}
