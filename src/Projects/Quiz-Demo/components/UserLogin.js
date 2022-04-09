import React from 'react'
import { Button } from '@mui/material'

const UserLogin = ({
    selectedLang,setSelectedLang,
    userName,setUserName,
    handleQuizLogic,displayError,
    selectedGender,setSelectedGender}) => {

      const handleNameChange = (e)=>{
          setUserName(e.target.value)
      }

      const handleLangChange = (e)=>{
          setSelectedLang(e.target.value)
         
      }
      const handleCatChange = (e)=>{
        
          setSelectedGender(e.target.value)
      }

      const handleClick = ()=>{
         
         (userName && selectedLang) ?  handleQuizLogic(): displayError();

      }
      
    
    return <div className='wrapper'>
       
        <div className='form'>
            {/* {error && alert('name cannot be blank')} */}
            <input type="text" autoComplete='off'  value={userName} onChange={handleNameChange} name='name' ></input>
            <select value={selectedGender} name="category" id="category" onChange={handleCatChange}>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="others">others</option>
            </select>

            <select value={selectedLang} name="languages" id="languages" onChange={handleLangChange}>
                <option value="english">english</option>
                <option value="kannada">kannada</option>
                <option value="hindi">hindi</option>
            </select>
            <Button variant="contained" onClick={handleClick}>start</Button>
           
               
           
            
        </div>
        
    </div>
}

export default UserLogin
