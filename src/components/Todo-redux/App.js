import React from 'react'
import store from './Store';
import { useState } from 'react';


const App = () => {
    const [value,setValue] = useState('');
   

    
    return (
        <div>
           <input className='input' value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
           <button className='btn' onClick={store.dispatch({type:'item-added',payload:value})}>add task</button>
           
        </div>
    )
}

export default App;
