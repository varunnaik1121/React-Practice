

import { collection, onSnapshot } from 'firebase/firestore'
import React from 'react'
import { useState,useEffect } from 'react'
import db from './firebase'
import Todo from './Todo'
import {FaTelegramPlane} from 'react-icons/fa'

const App = () => {
    const [list,setList] = useState([])

    useEffect(()=>{
      onSnapshot(collection(db,'messages'),(snapshot)=>{
       setList(snapshot.docs.map((doc)=>doc.data()))

      })

    },[])
    return <>
        <div className='app-container'>
           <div className='input-container'>
                <input type="text" placeholder='type your message here..' className='input'></input>
                <button className='btn'>
                    <FaTelegramPlane className='send-icon'></FaTelegramPlane>
                </button>
           </div>
           <div className='list-container'>
            {list.map((message,index)=>{
                return <Todo message={message} key={index}>

                </Todo>
            })}
           </div>
       
        
        </div>
    </>
}

export default App
