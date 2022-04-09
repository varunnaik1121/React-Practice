import React from 'react';
import { useEffect } from 'react';
import useStorage from '../Hooks/useStorage';

const ProgressBar = ({file,setFile}) => {
    const {url,progress} = useStorage(file)


    useEffect(()=>{
        if(url){
            setFile(null)
        }

    },[url,setFile])
    
  return <span className='progressBar' style={{width:progress+'%'}}>
     
      </span>;
};

export default ProgressBar;
