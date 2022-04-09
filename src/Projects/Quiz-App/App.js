import React,{useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import { data } from './components/quetions'
import Quiz from './components/Quiz'


const App = () => {
   const [quetions,setQuetions] = useState(data);
 
  const [details,setDetails] = useState({
      name:'',
      language:''
  })
  const [finalQn,setFinalQn] = useState([])

  const getQuetionsByChoice = (language)=>{
   const particlarLangQuetion=quetions.filter((item)=>item.language===language)
   setFinalQn(particlarLangQuetion)
   localStorage.setItem('data',JSON.stringify(finalQn))
 

}
useEffect(()=>{
    getQuetionsByChoice(details.language);
   
    
   
},[details])
 
 




    return <>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home details={details} setDetails={setDetails}></Home>}></Route>
                <Route path='/quiz' element={<Quiz finalQn={finalQn} details={details}></Quiz>}></Route>
            </Routes>
        </BrowserRouter>
    </>
}

export default App
