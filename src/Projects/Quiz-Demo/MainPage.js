import React from 'react'
import { useState } from 'react'
import QuizPage from './components/QuizPage'
import UserLogin from './components/UserLogin'
import { quetionsData } from './components/quetionsData'
import { useNavigate } from 'react-router-dom'
import './style.css'


const MainPage = () => {
    const [userName,setUserName] = useState('')
    const [selectedLang,setSelectedLang] = useState('english')
    const [IsUserLogged,setIsUserLogged] = useState(false)
    const [initialQuetions,setInitialQuetions] = useState(quetionsData)
    const [selectedGender,setSelectedGender] = useState('male')
    const [age,setAge] = useState(0)
    const [error,setError] = useState(false)
    let navigate = useNavigate()

    const handleQuizLogic = ()=>{
        console.log('quiz logic')
        setIsUserLogged(true)
        getUserChoosenQuetions(initialQuetions,selectedLang)
        navigate("/quizPage")
    }
    //for error displaying
    const displayError = ()=>{
        alert('name cannot be empty')
        setError(true) 
    }
    //function for userChosenquetions
    const getUserChoosenQuetions = (quetions,language)=>{
        let tempQuetions=quetions.filter((item)=>item.language===language)
        localStorage.setItem('quetions',JSON.stringify(tempQuetions))
    }

    return <>
        {IsUserLogged ? 
        <QuizPage  
       >
        </QuizPage> : 
        <UserLogin 
        userName={userName} 
        setUserName={setUserName} selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
        handleQuizLogic={handleQuizLogic}
        displayError={displayError}
        setIsUserLogged={setIsUserLogged}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        age={age} 
        setAge={setAge}
        error={error}
        >
        </UserLogin>}
    </>
}

export default MainPage
