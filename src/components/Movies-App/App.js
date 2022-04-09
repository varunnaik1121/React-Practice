import React from 'react'
import Navbar from './Navbar';

import Movies from './Movies';
import { useState,useEffect } from 'react';
import SingleMovie from './SingleMovie';
import Favourites from './Favourites';
import { genres } from './genres';



import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Category from './Category';
const API_KEY='27f8f3bd42154c8ec9a4719e97e56332';
const APIURL =
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=27f8f3bd42154c8ec9a4719e97e56332&page=1`;

const SEARCHAPI =
    `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;


const App = () => {

    const [movies,setMovies] = useState([]);
    const [name,setName] = useState('');
    const [loading,setLoading] = useState(false)
    const [favourites,setFavourites] = useState([]);
    const [category,setCategory] = useState([]);
  
  
 


  
    const fetchData = async (url)=>{
      
            setLoading(true)
        const res = await fetch(url);
        const data = await res.json()
        
        const list = data.results;


        setMovies(list)
     

       
        setLoading(false)
       
       
    }

    const updater = (value)=>{
        return setName(value);
    }




    const type = genres.genres;
const getCategory = (ids)=>{
    let arr = []
   ids.forEach((id)=>{
       for(let i=0;i<type.length;i++){
           if(type[i].id==id){
               return arr.push(type[i].name)
           }
       }
   })
  return arr;

}

const getGenres = ()=>{
    const value =movies.map((movie)=>{
        let cat= getCategory(movie.genre_ids);
      
            return {...movie,category:cat};
        })
    
        setCategory(value)
}
     useEffect(()=>{
        fetchData(APIURL)
        
      
    },[])

    useEffect(()=>{
       
        getGenres();
    },[movies])
   
    useEffect(()=>{
        
     if(name){
        
         fetchData(`${SEARCHAPI}${name}`)
     }
    },[name])

    const addToFav =(id)=> {
        const clickedFav = movies.find((movie)=>movie.id===id)
      for(let i=0;i<favourites.length;i++){
          if(favourites[i].id===clickedFav.id){
            return
          }
      }
      setFavourites([...favourites,clickedFav])

    }

    const convertCat = (data)=>{
        let allCat = [];
        data.map((item)=>{
            allCat.push(item.category)
            
 
        })
        let final=[...new Set(allCat.flat())];
        final.sort((a,b)=>{
            if (a < b) {
                return -1;
            }
            if(b < a){
                return 1;
            }
          
            return 0;
        })
        return final;
 
    }
  

    const catList=convertCat(category)
 
   

    return <>
        <div className='main'>
            <BrowserRouter>
            <Navbar movies={movies} catList={catList}></Navbar>
           
            <Routes>
                <Route exact path='/' element={<Movies movies={movies} updater={updater} addToFav={addToFav} category={category}></Movies>}></Route>
                <Route  exact path='/movie/:id' element={<SingleMovie movies={movies} loading={loading} ></SingleMovie >}></Route>
                <Route  exact path='/movie/favourites' element={<Favourites favourites={favourites}></Favourites>}></Route>
                <Route exact path='/category/:genreName' element={<Category category={category} addToFav={addToFav}></Category>}></Route>
              
            </Routes>
          
            </BrowserRouter>
        </div>
      

    </>
}

export default App;
