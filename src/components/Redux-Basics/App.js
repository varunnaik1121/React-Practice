import React from 'react'
import store from './Store'
import { useRef } from 'react';






const App = () => { 
const inputContainer = useRef();
   


    const [state,setState] = React.useState([])

    const handleInput = ()=>{
      
        let value=inputContainer.current.value;
        store.dispatch({type:'INPUT_ADDED',payload:value})
        setState(store.getState());
        value='';
       
      
        

    
      
       
    }
    React.useEffect(()=>{
   console.log('this is my state',state)
    },[state])
  
 

   
    return <>
        <div>
           <input ref={inputContainer}></input>
           <button onClick={()=>{handleInput()}}>click me</button>
        </div>
        {
            state.map((item,index)=>{
                return <div key={index}>
                    {item.value}
                </div>
            })
        }
       
        </>
}

export default App
