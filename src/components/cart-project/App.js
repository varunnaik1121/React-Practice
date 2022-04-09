
import React from 'react'
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import Loading from './Loading'
import { useGlobal } from './context'


const App = () => {
    const {loading} = useGlobal();
    if(loading){
        return <Loading></Loading>
    }
    return <>
       <Navbar></Navbar>
       <CartContainer></CartContainer>

    </>
}

export default App
