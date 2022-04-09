import React from 'react'

const Button = (props) => {
    
    return (
     
        <button className={props.className} onClick={props.handleFunction}>{props.value}</button>
       
    )
}

export default Button
