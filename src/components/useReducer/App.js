import React from 'react'
import {useGlobal} from './Context'


const App = () => {

   const {increase,state} = useGlobal();
    return (
        <div>
            <h4>{state}</h4>
         <button onClick={increase}>click me</button>
        </div>
    )
}

export default App
