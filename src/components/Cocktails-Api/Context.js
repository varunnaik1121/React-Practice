

import React from "react";
import { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    return <AppContext.Provider value='hello'>
        {children}
    </AppContext.Provider>
}


export const useGlobal = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}