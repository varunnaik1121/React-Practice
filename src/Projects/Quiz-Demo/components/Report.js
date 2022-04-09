import React from 'react'
import { useEffect } from 'react'

const Report = ({score,quetionsLength,userSelectedQuetions}) => {
    const [answerPer,setAnswerPer] = React.useState(0)
    const [wrongPer,setWrongPer] = React.useState(0)
  
    useEffect(()=>{
        let percentage = parseFloat(score)/parseFloat(quetionsLength)*100;
        setAnswerPer(percentage)
        setWrongPer(100-percentage)
    },[])

    let answers=userSelectedQuetions[0].quetions.map((item)=>{
        return item.correctAnswer
    })

   
    return <div className='report-main'>
              <div className='answers'>   
                    <div className='top'>
            out of {quetionsLength} quetions you answered {score} right
            <h4 className='crt-title'>Correct answers are:</h4>
        </div>
                {answers.map((items, index) => {
                        return (
                        <ul type='none'>  
                            <li className='ans'>  {index+1} . {`${items}`} </li>  
                        </ul>
                        );
                    })}
                </div>

        
      
        <div className='pie' style={{background:`conic-gradient(green 0% ${answerPer}%, red ${answerPer}% 100%)`}}>

        </div>
        
       <div className='pie-wrapper'>
            <div className='wrong-container'>
                <div className='check-box wr'></div>
                <span>wrong answeres</span>
            </div>
            <div className='right-container'>
                <div className='check-box rt'></div>
                <span>right answeres</span>
            </div>

        </div>
    </div>
}

export default Report

