
import { useState } from "react";
const Tour = ({id,image,name,info,price,removeTour})=>{
const [read,setRead] = useState(false)

console.log(removeTour)




    
    return <div className='card'>
       
        <img src={image} alt='' className='image'></img>
        <div className='info-container'>
            <h5 className='title-name'>{name}</h5>
            <h5>${price}</h5>
        </div>
       
        <p className='info'>{read ? info : `${info.substring(0,200)}` }...
        <button className='btn' onClick={()=>{
                setRead(!read)
            }}>{ read ? 'ReadLess' : 'ReadMore'}</button>
        </p>
        <button className='btn-final' onClick={()=>{removeTour(id)}}>Not interested</button>
       
           
       
        
    </div>
}

export default Tour;