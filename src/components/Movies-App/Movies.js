import React  from 'react'
import Movie from './Movie'
import {FiSearch} from 'react-icons/fi'
import { useState,useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { Component } from 'react'
import { AiOutlineConsoleSql } from 'react-icons/ai'

const Movies = ({movies,updater,addToFav,category}) => {
   
    

  

  
   
  
    const [loading,setLoading] = useState(true);




    let settings={
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed: 4000
      
       
       
    }


  
    return <>
 <div className='movies-container'>
        <div className='input-container'>
            <div className='input-wrapper'>
                <FiSearch className='search-icon'></FiSearch>
                <input type='text' placeholder='search' className='input' onChange={(e)=>{updater(e.target.value)}}>
            
                </input>
            </div>
        </div>
        <div className="movie-container">
            <div className='genre-links'>
                <li >Movie</li>
                <li>Tv Show</li>
                <li>Anime</li>
                <Link to='/movie/favourites'>
                    <li>favourites</li>
                </Link>
              
            </div>
            <div className='advertisement'>
                <h3 className='trending'>trending</h3>
                <Slider {...settings} className='slick-wrapper'>
                    <div className='slick-container'>
                       <img src='https://cdn.mos.cms.futurecdn.net/fSdNCFhvpmgdeDhG59aN7o.jpg' alt='wither image'></img>
                    </div>
                    <div className='slick-container'>
                        <img src='https://www.ghostbusters.com/ghostbusters_afterlife.jpg' alt='ghostbuster'></img>
                    </div>
                    <div className='slick-container'>
                        <img src='https://www.leisurebyte.com/wp-content/uploads/2021/11/Red-Notice-Review.jpg' alt='ghostbuster'></img>
                    </div>
                    <div className='slick-container'>
                        <img src='https://phantom-marca.unidadeditorial.es/927e619e34b67b9e7326c9266914e6f0/crop/68x0/1311x700/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/20/16294695683527.jpg' alt='ghostbuster'></img>
                    </div>
                   
                </Slider>
               
                 </div>

            <div className='movies-card-wrapper'>
                {movies.length > 0 &&
                movies.map((movie) => <Movie key={movie.id} {...movie} addToFav={addToFav}/>)}
            </div>
            
          <p className='copyright'>
<b>@Copyright</b> Office
Section 9 of the Copyright Act requires for establishment of an office to be called the Copyright Office for the purpose of the Act.</p>
         </div>
         
      
    </div>
  
    </>
}

export default Movies;
