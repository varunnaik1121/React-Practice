import React from 'react'
import { useEffect } from 'react'
import Button from './Button'

const CapitalData = ({data,manageCapital,fetchData}) => {

    useEffect(()=>{
       fetchData()
    },[])


   

    return <>
            <div className='capital-container'>

                <div className='title'>
                    country : {data?.name?.common}
                </div>
                <div>country's capital : <span>{data?.capital}</span></div>
                <div>population : 
                    <span>{data?.population}</span>
                </div>
                <div>latlng : <span>{data?.latlng[0]} , {data?.latlng[1]}</span></div>
                <div>
                    <img src={data?.flags?.png} alt='flag'></img>
                </div>
                <div>
                    <a href={data?.flags?.png} 
                    target='_blank' rel="noreferrer">
                    {data?.flags?.png}</a>
                </div>
                <div>
                    
                    <Button 
                    handleFunction={manageCapital} 
                    className='btn capital' 
                    value='capital weather'>
                    </Button>
                </div>
               
            </div>
    </>
}

export default CapitalData
