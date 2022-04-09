import React from 'react'
import { useState } from 'react';
import Winner from './winner';
import Lost from './Lost';
const Card = ({cards,shuffleCards}) => {

   let userId = parseInt(localStorage.getItem('key'))
    const [lives,setLives] = useState(1)
    const [livesLeft,setLivesLeft] = useState(3);
   const [winner,setWinner] = useState(false)


    return <div className='card-wrapper'>
    <div className='lives'>
        <div className='lives-count'>lives left</div>
        <div className='lives-left'>{livesLeft}</div>
    </div>
    <div className='card-container' style={{ pointerEvents : livesLeft===0 || winner ? 'none' : 'auto'}}>
        {cards.map((card)=>{
            return <div className='scene scene--card' >
            <div className='card' onClick={(e)=>{
                       
                           setWinner(false)
                           e.target.parentElement.className="card is-flipped" 
                           setLives(lives+1)
                           setLivesLeft(livesLeft-1)
                        
                       if(card.id===userId){
                           e.target.parentElement.parentElement.parentElement.style="pointerEvents:none";
                           e.target.className="card is-flipped"
                           e.currentTarget.firstChild.style="opacity:0"
                           e.currentTarget.lastChild.style='background:rgb(50,205,50)';

                           setTimeout(()=>{
                            setWinner(true)  
                           },100)
                           
                       }
                    
                       }}>
                        <div className='card__face card__face--front' >
                                 flip
                        </div>
                        <div className='card__face card__face--back'>
                              {card.id}
                        </div>
                    
                </div>
            </div>
            })}
    
       
   
        
    </div>
    {winner && <Winner shuffleCards={shuffleCards}></Winner>}
        {livesLeft===0 && (!winner) ? <Lost shuffleCards={shuffleCards}></Lost>:null }
    </div>    
}
export default Card;
