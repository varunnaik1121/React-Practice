import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

import { useEffect,useState } from 'react'
import Loading from './Loading'
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const defaultImage = 'https://images.unsplash.com/photo-1585951237313-1979e4df7385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'


const SingleMovie = ({movies,loading}) => {

const {id} = useParams();
console.log(movies)


const [image,setImage] = useState('')


let backdrop =[];


const fetchData = ()=>{
   
    const data = movies.filter((item)=>item.id==id).map((item)=>item.backdrop_path);
   backdrop.push(...data)
   console.log(backdrop)
    let backdropPath = backdrop.join('');
     let  url = backdropPath && IMGPATH+backdropPath;
      setImage(url)
     
  

    
}
   
useEffect(()=>{
    fetchData()
},[movies])






    return <>
    {loading ? <Loading></Loading> : <div className='single-movie' >
      
       
      <img src={`${image || defaultImage }` } alt='name' className='backdrop-image'></img>
     

  </div>}
      
    </>
}

export default SingleMovie
