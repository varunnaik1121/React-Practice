import React from 'react'
import {useState,useEffect} from 'react';
import { Pagination } from '@mui/material';
import RawJson from './components/RawJson';
import Header from './components/header';
import './App.css'

const API = `https://hn.algolia.com/api/v1/search?query=bar&page=`;

const App = () => {

  const [show,setShow] = useState(false)
 
   const [data,setData] = useState([])
   const [currentIndex,setCurrentIndex] = useState(0)
   let tempArr = []
   let index=-1;
   const [pageCount,setPageCount] = useState(1)
   const [rawData,setrawData] = useState({})
   
    const fetchData = async ()=>{
      index=index+1;
      if(index>=50){
        return
      }
      try{
        const res = await fetch(API+index)
        const data = await res.json()
        tempArr=[...tempArr,data?.hits]
        setData(tempArr)
        setPageCount(pageCount+index)
      }
     catch(e){
       console.log(e)
     }
      

    }

        useEffect(() => {

            fetchData()
          
            const interval = setInterval(fetchData, 10000)
            
            return () => clearInterval(interval)
          }, []);
     
    const handlePageChange = (e,value)=>{
      console.log('hello')
      setCurrentIndex(value-1)
      
    }
    console.log( data?.[currentIndex])

    const handleClick = (e,index)=>{
      setShow(true)
      setrawData(JSON.stringify(data?.[currentIndex][index],null,4))
     
    }

    

    return <>
    

      {show ? <RawJson setShow={setShow} rawData={rawData}></RawJson>:data?.[currentIndex]&&<div>
         <div className='post-wrapper'>
          
           <Header></Header>
           <div className='post-details'>
           {
           data?.[currentIndex]?.map((item,index)=>{
             const {url,created_at,title,author} = item
             
             return <>
                  <div className='data-wrapper'>
                    <span className='data'>{index+1}. {title}</span>
                    <a className='data' href={url} target='_blank'>{url}</a>
                    <span className='data author'>{author}</span>
                    <span className='data'>{created_at}</span>
                    <button className='btn' onClick={(e)=>{handleClick(e,index)}} data-testid='select-btn'>select</button>
                  </div>
             </>
           })
         }
           </div>
         
         </div >
           {
             data?.[currentIndex]?<div className='pagination'>
             <Pagination
            count={ pageCount|| 0}
            color="secondary"
            onChange={handlePageChange}
            
          />
             </div>:null
           }

        </div>
  
}
        
      </>
}

export default App
