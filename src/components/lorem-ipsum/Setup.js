


import React from 'react'
import { useState,useEffect } from 'react'
import data from './data';

const Setup = () => {

   const [userValue,setUserValue] = useState(0);
   const [text,setData] = useState(data)

   const [paras,setParas] = useState([])

   let arr = [];



   const  handleSubmit = (e)=>{
      e.preventDefault();
     
    let value = parseInt(userValue);
    if(value<=0){
       value=1
    }
    

    for(let i=0;i<value;i++){
       arr.push(text[randomIndex()])
       
    }
    setParas(arr)

   
    

   }

  
const randomIndex = ()=>{
   return Math.floor(Math.random()*data.length)
}

 
   return <>
      <h3>lorem ipsuum generator</h3>
      <form onSubmit={handleSubmit}>
         <label htmlFor='amount'>
            paragaraph:
         </label>
         <input type='number' name='amount' id='amount' value={userValue} onChange={(e)=>setUserValue(e.target.value)}></input>
         <button type='submit'>generate</button>
      </form>

   <div className='main-div'>
      {paras.map((item)=>{
         return <div className='card'>
            {item}
         </div>
      })}
   </div>

     
     
             
      </>
   
}

export default Setup;
