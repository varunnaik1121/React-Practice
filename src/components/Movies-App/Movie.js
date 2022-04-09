import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import {BsFillHeartFill} from 'react-icons/bs'

import PropTypes from 'prop-types'; // ES6

import Loading from './Loading';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const defaultImage='https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'


const Movie = ({title,id,overview,poster_path,category,addToFav}) => {


   
    let url = poster_path && IMGPATH+poster_path;
  
    return  <div className='movie-card'>
    <Link className='active' to={`/movie/${id}`}>
        <img src={`${url || defaultImage}`} alt={title} className='image'></img>
     </Link>
     <div className='title-div'>
         <h5 className='movie-title'>{title}</h5>
         <span className='fav-icon' onClick={()=>{addToFav(id)}}><BsFillHeartFill></BsFillHeartFill></span>
       
     </div>
   
   
 </div>

    
   
}



export default Movie;
