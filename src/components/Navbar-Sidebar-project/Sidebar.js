import React from 'react'
import { list } from './Links';
import { useEffect,useRef } from 'react';


const Sidebar = ({show}) => {


    const refContainer = useRef(null)
    const refLink = useRef(null)


    useEffect(()=>{
       let linksHeight = refLink.current.getBoundingClientRect().height;
      if(show){
          refContainer.current.style.height=`${linksHeight}px`
      }
      else{
        refContainer.current.style.height=`0px`
      }

    },[show])
   
    return <>
        <div className='links-container' ref={refContainer}>
            <ul className='ul' ref={refLink}>
               {
                   list.map((item)=>{
                       const {id,name,url} = item;
                       return <>
                        <li className='links'><a href={url}>{name}</a></li>
                       </>
                   })
               }
            </ul>
        </div>
    </>
}

export default Sidebar;
