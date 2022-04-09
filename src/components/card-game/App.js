import React from 'react'
import Home from './components/Home'
import Game from './components/Game'
import { BrowserRouter,Route,Routes, } from 'react-router-dom'

const App = () => {
    return <>
       <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home></Home>}></Route>
                <Route exact path="/game" element={<Game></Game>}></Route>
            </Routes>
       </BrowserRouter>
    </>
}

export default App
