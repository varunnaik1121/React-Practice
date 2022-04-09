import React from "react";
import { useState,useEffect } from "react";
import Tour from "./Tour";
const Api = 'https://course-api.com/react-tours-project'

const Setup = ()=>{
    const [people,setPeople] = useState([]);

  useEffect(() => {
    fetchTours()
    
    
  }, [])
  const fetchTours = async ()=>{
    const res = await fetch(Api);
    const data = await res.json();
    setPeople(data);
  
  }

  const removeTour = (id)=>{
    const newPerson = people.filter((person)=> person.id!==id);
    setPeople(newPerson)

  }
  

  const [show,setShow] = useState(false)
  
  const clicked = ()=>{
    setShow(!show)
  }
  
  
  console.log(people)
  if(people.length==0){
    return <>
    <h2 className='last-title'>
      no tours left
    </h2>
    <button className='final-btn' onClick={()=>{
      fetchTours()
    }
    }>get Tours</button>
    </>
  }
  
  



  return <div className='wrapper'>

    <button onClick={clicked}>click to show or hide</button>
   {show ? <div className='main-1'>div</div> : <div className='main'>div</div>}


    <h2 className='title'>Our tours</h2>
    <div className='tours-container'>

   
      {people.map((person)=>{
        
        return <Tour key={person.id} {...person} removeTour={removeTour}></Tour>
      })}
    </div>
  </div>

}

export default Setup;