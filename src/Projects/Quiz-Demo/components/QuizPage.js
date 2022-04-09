

import React from 'react'
import {useState} from 'react'
import Report from './Report'
import Button from '@mui/material/Button';

const QuizPage = () => {
    const userSelectedQuetions=JSON.parse(localStorage.getItem('quetions'))
    const [staticIndex,setStaticIndex] = useState(0)
    const [quetionIndex,setQuetionIndex] = useState(0)
    const [score,setScore] = useState(0)
    const [showReport,setShowReport] = useState(false)
    const [disabled,setDisabled] = useState(false)
    const [count,setCount] = useState(0)
    const [clickDetails,setClickDetails] = useState([])

    let quetions = userSelectedQuetions[staticIndex].quetions[quetionIndex];
    const quetionsLength = userSelectedQuetions[staticIndex].quetions.length;
    let quetionsForBtn = userSelectedQuetions[staticIndex].quetions;
  

    var dummyArray=[]
    for(let i=0;i<quetionsLength;i++){
        dummyArray.push({id:i,clicked:false,disabled:false,userAnswer:[],clickCount:0,options:userSelectedQuetions[staticIndex].quetions[i].options.map((item)=>{
            return {clicked:false}
        })
    })
}
     const [quetionStatus,setQuetionStatus] = useState(dummyArray)

     let temp_state = [...quetionStatus];
       
     let temp_element = { ...temp_state[quetionIndex] };

     let correctAnswer =userSelectedQuetions[staticIndex].quetions[quetionIndex].correctAnswer;

// console.log(quetionStatus)

const handleClick = (e,index)=>{
    let currentIndex=e.target.dataset.index;
    clickDetails.push({index:quetionIndex,clicked:true,disable:true,value:e.target.textContent})
  
    let tempArr = []
    tempArr.push(e.target.textContent)
    setCount(count+1)
    temp_element.clicked =true;
    temp_element.userAnswer.push(e.target.textContent);
    temp_element.clickCount =temp_element.clickCount+1;
    temp_element.clickedValue=e.target.textContent

    if(temp_element.clickCount===quetions.inputNumber){
        temp_element.disabled=true
    }

    temp_element.options[currentIndex].clicked=true;
    let userAnswer = temp_element.userAnswer
    checkUserAnswer(userAnswer,correctAnswer)
    temp_state[quetionIndex] = temp_element;
   setQuetionStatus(temp_state)

}

   
    const handleIndexBtn = (e)=>{ 
        const currentId=(parseInt(e.target.textContent)-1)
        setQuetionIndex(currentId)
    }
    const nextQuetionHandle = ()=>{
        
        setQuetionIndex(quetionIndex+1)
    
    }

    const checkUserAnswer = (userAnswer,correctAnswer)=>{
     if(JSON.stringify(userAnswer)===JSON.stringify(correctAnswer)){
         setScore(score+1)
        
     }
     else{
         setScore(score)
     }
    }
    const checkTrue = (index,value1,value2)=>{
        return quetionStatus[quetionIndex].options[index].clicked===true ? value1 : value2
    }

  const setClassName = (index)=>{
    if(quetionStatus[index].clicked===true){
        return 'btn red-card'
    }
    else{
        return 'btn grey-card'
    }
  }

  const setPointerEvents = (index)=>{
    return checkTrue(index,'none','auto')
  }
  const setClassForClicked =(index)=>{
    return checkTrue(index,'btn1 orange-card','btn1')

  }
  const handleMatchClick = (e,index)=>{
     quetionStatus[quetionIndex].clicked=true
      let value= e.target.textContent;
      let userAnswer=temp_element.userAnswer
      userAnswer.push(value)
      e.target.className='btn-match orange-card'
      checkUserAnswer(userAnswer,correctAnswer)
     
     if(userAnswer.length>3){
         setDisabled(true)
     }

  }
 
    return <>
        { showReport ? <Report score={score} 
        quetionsLength={quetionsLength} 
        userSelectedQuetions={userSelectedQuetions}>
        </Report> : <div className='quiz-wrapper'>
           
           <div className='btn-container'>
            {
                    quetionsForBtn.map((item,index)=>{
                    
                        return <button className={setClassName(index)} onClick={handleIndexBtn} key={index}>{index+1}</button>
                    })
                }
           </div>
          
           {   
              <h4 className='qn-title'>{quetions.title}</h4>   
           }
           {quetionIndex <= parseInt(quetionsLength-2) ? <div className='options-container'>
              
           <div className='options'>
           {quetions.options.map((option,index)=>{          
                    return  <button 
                    className={setClassForClicked(index)} 
                    style={{pointerEvents:setPointerEvents(index)}}  
                    data-index={index} 
                    onClick={(e)=>handleClick(e,index)} 
                    disabled={quetionStatus[quetionIndex].disabled} 
                    key={index}>
                    {option}
                </button>
               })}

           </div>
               <div className='next'>
               <button onClick={()=>{nextQuetionHandle()}} className='btn1'>next Quetion</button>
               </div>
            </div>
               : 
               
               <div className='match-container'>
                   <p>{quetions.instruction}</p>
                    <div className='match-wrapper'>
                        <div className='left'>
                                {
                                    quetions.leftQuetions.map((item,index)=>{
                                        return <span className='left-wrapper' key={index}>
                                            <button className='btn-match' >{item}</button>
                                        </span>
                
                                    })
                                }
                        </div>
                        <div className='right'>
                        {quetions.options.map((item,index)=>{
                                        return <div className='right-wrapper' key={index}>
                                                <button className='btn-match' onClick={(e)=>{handleMatchClick(e,index)}} disabled={disabled}>{item}</button>
                                        </div>
                
                                    })}
                                
                        </div>

                    </div>
                    <button className='btn' onClick={()=>{setShowReport(true)}}>get quiz Report</button>
           </div>
           
           }
           
         
        </div>
        }

        
    </>
  
}
export default QuizPage





