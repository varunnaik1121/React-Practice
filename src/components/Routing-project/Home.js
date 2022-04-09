import React from 'react'
import { useGlobal } from './Context'
import Poster from './Poster'
import { Link } from 'react-router-dom'

const Home = () => {
  const {posters} = useGlobal()
 console.log(posters)
    return <>
    <div className='poster-container'>
        {posters.map((item)=>{
            const {image,title,id,desc,rating,time} = item;
            return <>
                <div className='poster-card'>
                    <img src={image} alt={title} className='image'></img>
                    <h5>{title}</h5>
                    <Link to={`/poster/${id}`}>
                        <button>more info</button>
                    </Link>
                  

                </div>
            </>
        })}
    </div>
        
    </>
}

export default Home
