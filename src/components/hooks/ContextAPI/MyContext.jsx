import { createContext } from "react";

//1 step
export const MyContext = createContext();

//2nd step
export const MyProvider = ({children}) => {
    const myName ="Rashmi";
    const myage = 42;
    return <MyContext.Provider value={{myName, myage}}>{children}
        
    </MyContext.Provider>

}
