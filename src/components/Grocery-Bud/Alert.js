import React from 'react'
import { useEffect } from 'react'

const Alert = ({msg,type,list,showAlert}) => {

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            showAlert()

        },2000)

        return ()=>{
            clearTimeout(timeOut)
        }

    },[list])
    return <p className={`alert alert-${type}`}>{msg}</p>;
    
}

export default Alert
