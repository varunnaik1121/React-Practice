
import React from "react";
import {data} from "./data";
import { useContext } from "react";

const AppContext = React.createContext();



const AppProvider = ({children})=>{


   const [posters,setPosters] = React.useState(data);
   
   



    return <AppContext.Provider value={{posters}}>
        {children}
    </AppContext.Provider>
}


export const useGlobal = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}