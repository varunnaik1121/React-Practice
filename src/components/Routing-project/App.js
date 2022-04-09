import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Poster from './Poster'
import Navbar from './Navbar'


const App = () => {
    return <>
        <BrowserRouter>
        <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/poster/:id' element={<Poster></Poster>}></Route>
            </Routes>
        </BrowserRouter>
    </>
}

export default App
