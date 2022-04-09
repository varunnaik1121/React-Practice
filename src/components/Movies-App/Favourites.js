import React from 'react'
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const Favourites = ({favourites}) => {

    const [favs,setFavs] = React.useState([...favourites])
  
    
    const removeFav = (id)=>{
        let removed=favs.filter((item)=>item.id!==id)
     
        setFavs(removed)
     
       
    }
      
    if(favs.length===0){
        return <div>
            no favourites yet
        </div>
    }
    return <div className='fav-wrapper'>

        {favs.map((item)=>{
            const {poster_path,id,title} = item;
            return <>
               
                    <div className='fav-card'>
                        <div className='img-container'> 
                            <img src={IMGPATH+poster_path} alt='name'></img>
                            <button className='remove-btn' onClick={()=>removeFav(id)}>remove</button>
                        </div>
                    </div>
              
            </>
            
            

        })}
    </div>

 
}

export default Favourites
