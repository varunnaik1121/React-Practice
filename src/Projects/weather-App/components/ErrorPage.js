import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const ErrorPage = () => {
    let navigate = useNavigate()

    const handleNavigate = ()=>{
        navigate("/")

    }
    return (
        <div className='error-wrapper'>
            Error 404 found
            <div>something went wrong!..........</div>
            <Button value='Home' handleFunction={handleNavigate} className='btn'></Button>
           

        </div>
    )
}

export default ErrorPage
