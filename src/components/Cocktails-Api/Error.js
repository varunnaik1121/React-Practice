import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return <>
    <div className='error-container'>
        <h3 className='title'>Oops something went wrong!...</h3>
        <Link to='/'>
             <button className='btn'>Go To Home</button>
        </Link>
       
    </div>
    </>
}

export default Error
