import { createContext } from "react";

//1 step
export const MyContext = createContext();

//2nd step
const MyProvider = () => {
    return <MyContext.Provider value={{}}>
        
    </MyContext.Provider>

}
