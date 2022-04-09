import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Navbar from './Navbar'
import Error from './Error'
import Home from './Home'
import About from './About'



const App = () => {
    return <>
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route exact path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
       
    </>
}

export default App
