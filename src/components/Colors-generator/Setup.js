

import React from 'react'
import { useState,useEffect } from 'react'
import 'values.js'
import Values from 'values.js'
import List from './List'

const Setup = () => {
    const [userColor,setUserColor] = useState('');
    const [error,setError] = useState(false);
    const [list,setList] = useState([])


    const handleSubmit = (e)=>{
        e.preventDefault();
      
        try{
            const colors = new Values(userColor).all(10);
            setList(colors)

        }catch(error){
           
            console.log(error)
            setError(true)
        }
        
    }
  
    return <>
       <h3 className='title'>Color shade generator</h3>
       <form className='form' onSubmit={handleSubmit}>
           <label htmlFor='amount'>Enter Color Value:</label>
           <input 
         
             
         
            
            value={userColor} 
            onChange={(e)=>setUserColor(e.target.value) 
             }
             placeholder='#8f44fd'
            type='text'
             />
           <button type='submit'>Generate Colors</button>
       </form>
       <div className='section-center'>
             {list.map((item,index)=>{
                 return <> 
                 <List key={index} {...item}></List>
                 </>
             })}
       </div>
    </>
}

export default Setup;
