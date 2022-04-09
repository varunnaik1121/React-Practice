import React from 'react';
import useFirestore from '../Hooks/useFirestore';

const ImageGrid = () => {
    const {docs,loading} = useFirestore()

    if(loading){
      return <div>loading...</div>
    }
    
  return <div>
  
    {
      docs.map((image)=>{
        return <img src={image.url} alt='image' className='image'></img>
      })
    }
  </div>;
};

export default ImageGrid;
