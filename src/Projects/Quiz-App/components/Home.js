import { any, exact } from 'prop-types';
import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = ({details,setDetails}) => {

    
 
  







    const getInitialState = () => {
        const value = "react";
        return value;
      };

    const [value,setValue] =React.useState(getInitialState)

    const handleChange = (e)=>{
      
      setValue(e.target.value)
    }
    const handleClick = ()=>{
        
       setDetails({...details,language:value})
    }

   
    
    return <>
        <div>
            <input type="text"  onChange={handleChange} name='name'></input>
            <select value={value} name="languages" id="languages" onChange={handleChange}>
                <option value="react">React</option>
                <option value="js">js</option>
            </select>
            <button className='btn' onClick={handleClick}>Click me</button>
            <Link to='/quiz'>
                <button>start game</button>
            </Link>
            
        </div>
        
    </>
}

export default Home
