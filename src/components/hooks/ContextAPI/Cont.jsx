import { createContext } from "react";

//1 step
const MyContext = createContext();

//2nd step
const MyProvider = () => {
    return <MyContext.Provider value={{}}>
        
    </MyContext.Provider>

}
