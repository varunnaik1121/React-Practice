import React from "react";
import { useReducer,createContext,useState,useEffect,useContext } from "react";
import reducer from './Reducer'


const AppContext = createContext();



const AppProvider = ({children})=>{
    const initialState = 0;

    const [state,dispatch] = useReducer(reducer,initialState);

    const increase = ()=>{
        dispatch({type:'INCREASE'})
    }
    return <>
        <AppContext.Provider value={{increase,state}

        }>
            {children}
        </AppContext.Provider>
    </>

}


export const useGlobal = ()=>{
    return useContext(AppContext)
}
export {AppProvider,AppContext} 