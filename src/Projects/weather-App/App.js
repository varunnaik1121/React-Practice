import React from 'react'
import UserLogin from './components/UserLogin'
import './components/style.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CountryData from './components/countryData'
import ErrorPage from './components/ErrorPage'

const App = () => {

    return <>
       <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<UserLogin
                 ></UserLogin>}></Route>
                <Route  path='/countryPage' element={<CountryData></CountryData>}></Route>
                <Route exact path="*" element={<ErrorPage></ErrorPage>}></Route>
            </Routes>
       </BrowserRouter>
    </>
}

export default App




