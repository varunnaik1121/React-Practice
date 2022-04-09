

import React,{useReducer,useContext,useEffect} from 'react'
import reducer from './reducer';
import cartItems from './data'




const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();
const AppProvider = ({children}) => {

    const initialState = {
        loading:false,
        cart:cartItems,
        amount:0,
        total:0,

    }

    const clearCart = ()=>{
        dispatch({type:'CLEAR_CART'})
    }
    const removeItem = (id)=>{
       dispatch({type:'REMOVE_ITEM',payload:id})

    }
    const increase = (id)=>{
        dispatch({type:'INCREASE',payload:id})
    }
    const decrease = (id)=>{
        dispatch({type:'DECREASE',payload:id})
    }
    const toggleAmount = (id,type)=>{
        dispatch({type:'TOGGLE-AMOUNT',payload:{id,type}})
    }
    
    
    

    const [state,dispatch] = useReducer(reducer,initialState);


    useEffect(()=>{
        dispatch({type:'CART_TOTAL'})
    },[state.cart])


    const fetchData = async ()=>{
        dispatch({type:'LOADING'})
        const respose = await fetch(url);
        const data = await respose.json();
        dispatch({type:'DATA-ARRIVED',payload:data})
    }

    useEffect(()=>{
        fetchData()
    },[])
    
    return  <AppContext.Provider value={
        {...state,clearCart,removeItem,increase,decrease,toggleAmount}
      
    }> {children}  </AppContext.Provider>
   
      
   
    
    
}

export const useGlobal= ()=>{
    return useContext(AppContext)
}

export {AppProvider,AppContext};
