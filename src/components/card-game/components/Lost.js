import React from 'react'
import {useNavigate} from 'react-router-dom'

const Lost = ({shuffleCards}) => {
    let navigate = useNavigate()

    const refreshPage = ()=>{
      window.location.reload(false)
       setTimeout(()=>{
        shuffleCards()
       },1000)
      }
    return (
        <div className='lost-container'>
            <h4 className='message'>you lost!</h4>
            <div className='btn-container'>
                <button onClick={refreshPage} className='btn1'>Retry</button>
                <button onClick={()=>{navigate("/")}} className='btn1'>Exit</button>
            </div>
        </div>
    )
}

export default Lost
