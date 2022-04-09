
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

   
    const [userCountry,setUserCountry] = useState('')
    const [disabled,setDisabled] = useState(true)
    let navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        localStorage.setItem('usercountry',userCountry)
        
        navigate('/countryPage')



    }
    const handleChange = (e)=>{
        let value = e.target.value;
        setDisabled(true)
       
       
        if(value){
            setDisabled(false)
            setUserCountry(value)
        }
        else{
            setDisabled(true)
        }


    }
    
    return <div className='login-container'>
              <form onSubmit={handleSubmit} className='form'>
                    <input type='text' onChange={handleChange} placeholder='country name' className='input'></input>
                    <button type='submit'  className='btn' disabled={disabled}>send</button>
              </form>
            </div>
}

export default Login
