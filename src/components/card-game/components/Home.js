import React from 'react'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { GETUSERNAME,GETUSERNUMBER } from '../redux/userDetails';

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state)=>state.user.userName);
    const userNumber = useSelector((state)=>state.user.value);
    let navigate = useNavigate();
    const nameRef = useRef(null);
    const numberRef = useRef(null);



    const checkName = (name)=>{
      
        if(!(name.length>3)){
         nameRef.current.className='invalid'
         return false;
        }
        else {
            nameRef.current.className='error'
           return true;
        }
    }
    const checkNumber = (number)=>{
       if((number >0) && (number<10)){
           numberRef.current.className="error"
           return true
       }
       else{
           numberRef.current.className="invalid"
           return false;
       }
    }

    const handleClick = (e)=>{
        console.log('this is userName',userName)
        console.log(typeof userNumber)
        e.preventDefault()
      let stateName = checkName(userName);
      let stateNumber = checkNumber(userNumber);
     if(stateName && stateNumber){
         navigate("/game")
         localStorage.removeItem('key')
         localStorage.setItem('key',userNumber)
     }    
    }
    return <>
        <div className='home-container'>
           
           <form onSubmit={handleClick} className='form'>

                <div className='logo'>Guessing Game</div>
                <div className='input-container'>
                    <span className='form-title'>Enter username</span>
                    <input type="text" placeholder='eg : sushmitha' value={userName} name='userName' onChange={(e)=>{dispatch(GETUSERNAME(e.target.value))}} autoComplete='off'></input>
                    <div className='error' ref={nameRef}>username is too short</div>
                </div>

                <div className='input-container'>
                <span className='form-title'>Enter no between 1-9</span>
                    <input type="number" placeholder='enter the number' value={userNumber} name='userNumber' onChange={(e)=>{dispatch(GETUSERNUMBER(e.target.value))}} autoComplete='off'></input>
                    <div className='error' ref={numberRef}>
                        number should be between  1 to 9
                    </div>
                </div>

                <button type='submit' onClick={handleClick} className='btn'>start game</button>
           </form>
        </div>
       
    </>
}

export default Home;
