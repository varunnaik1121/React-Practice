import React from 'react';
import { useState } from 'react';
import { storage } from '../Firebase/config';
import ProgressBar from './ProgressBar';

const UploadForm = () => { 

   
    const [file,setFile] = useState(null)
    const types = ['image/jpeg','image/png','image/jpg'];

    const handleChange = (e)=>{
        const selected = e.target.files[0]
        console.log(selected)
    
        if(selected && types.includes(selected.type)){
            setFile(selected)
            

        }
        else{
            setFile(null)
        }

    }
  return <div>
      <input type="file" onChange={handleChange}></input>
      {file && <ProgressBar file={file} setFile={setFile}/>}
  </div>;
};

export default UploadForm;
