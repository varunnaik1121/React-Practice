import React from 'react'
import { useParams } from 'react-router-dom'
import Movie from './Movie'
const Category = ({category,addToFav}) => {

 const {genreName}= useParams()
 console.log(genreName)
   
    return <>
    <div  className='movies-card-wrapper'>
    {category.map((item)=>{
       if(item.category.includes(genreName)){
            
          return <>
         
          <Movie {...item} addToFav={addToFav}></Movie>
      
            
        </>
 
 
       }})}
       
          
       
    </div>
       
    </>
}

export default Category;
