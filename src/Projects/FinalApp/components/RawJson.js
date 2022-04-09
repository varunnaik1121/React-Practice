import React from 'react'

const RawJson = ({setShow,rawData}) => {
    console.log(rawData)
    return <>
        <div className='raw-wrapper'>
            <div className='btn-wrapper'>
                <button data-testid="main-button" onClick={()=>{setShow(false)}} className='btn' >back to main page</button>
            </div>
            <h4>Raw JSON for the selected post......</h4>
            <pre className='raw'>
                <code>{rawData}</code>
            </pre> 
        </div>
        
    </>
}

export default RawJson
