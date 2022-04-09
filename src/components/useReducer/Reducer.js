import React from 'react'

const Reducer = (state=0,action) => {
    if(action.type==='INCREASE'){
        return state+1
    }
    return state;
   
}

export default Reducer
