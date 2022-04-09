

import React from 'react'
import { useState,useEffect } from 'react'
import people from './people';
import {AiFillCaretRight} from 'react-icons/ai'
import {AiFillCaretLeft} from 'react-icons/ai'



const Setup = () => {

    const [data,setData] = useState(people);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, people]);

      useEffect(()=>{
          let autoSlide=setTimeout(()=>{
              setIndex(index+1)

          },3000)

          return ()=>{
            clearInterval(autoSlide)
          }
          
      })

    
    return (

        <div className='section-center'>
            {people.map((person,personIndex)=>{
                 let position = 'nextSlide';


                 if(index===personIndex){
                     position='activeSlide'
                 }
                 if(personIndex===index-1 || (index===0 && personIndex===people.length-1)){
                     position='lastSlide'
                 }

                return <>

                   
                    <article className={position}>
                        <img src={person.image} alt={person.title} className='image'></img>
                        <h3>{person.name}</h3>
                        <p>{person.quote}</p>
                        <div className='icon-container'>

                           
                            <AiFillCaretLeft className='icon' onClick={()=>{
                                setIndex(index-1)
                            }}>
                                
                            </AiFillCaretLeft>
                            <AiFillCaretRight className='icon' onClick={()=>{
                                setIndex(index+1)
                            }}></AiFillCaretRight>
                        </div>
                        
                    </article>
                </>
            })
            }

        </div>
    )
}

export default Setup
