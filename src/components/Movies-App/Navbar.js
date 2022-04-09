import React from 'react'
import {BiCameraMovie} from 'react-icons/bi'

import { Link } from 'react-router-dom'


const Navbar = ({movies,catList}) => {
// const arr1 = movies[5].genre_ids;


// let empty = [];

//  const arr2 = genres.genres;

// //LOGIC FOR FILTERING THE GENRE THAT COMES FRM AN API DYNAMCALLY
 
// arr1.forEach((item)=>{
//     for(let i=0;i<arr2.length;i++){
//         if(arr2[i].id==item){
//            empty.push(arr2[i].name)
//         }
//     }
// })


// console.log(empty)

 

   
    return  <div className='nav-container'>
                <div className='nav-wrapper'>
                    <div className='logo'>
                    <BiCameraMovie className='nav-logo'></BiCameraMovie>
                    <h3 className='nav-logo-name'>Imdb</h3>
                </div>
                <div className='menu-container'>
                    <p className='menu'>menu</p>
                   <Link to='/' className='link-list'>
                        <p className='menu'>home</p>
                   </Link>
                  {catList.map((genre,indx)=>{
                     return  <Link to={`/category/${genre}`} className='link-list' key={indx}>
                                <p className='menu'>{genre}</p>
                            </Link>
                      
                  })}

                </div>
               
               
            </div>
    </div>

    
}

export default Navbar
