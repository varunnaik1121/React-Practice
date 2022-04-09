import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from './MainPage'
import QuizPage from './components/QuizPage'

const App = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<MainPage></MainPage>}></Route>
                <Route exact path='/quizPage' element={<QuizPage></QuizPage>}></Route>
            </Routes>
        </BrowserRouter>

    </>
}

export default App
