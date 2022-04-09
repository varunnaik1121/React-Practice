
import React,{useState} from 'react'


const Quiz = ({details}) => {
    React.useEffect(()=>{
        console.log(localStorage.getItem('data'))

    },[details])

  
    return <>
     
      </>
}

export default Quiz
