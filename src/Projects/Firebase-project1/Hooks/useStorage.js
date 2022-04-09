import { useState,useEffect } from "react";
import { storage } from "../Firebase/config";
import {ref} from "firebase/storage"

const useStorage = (file)=>{
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);

    useEffect(()=>{
        const storageRef = ref(storage,`files/${file?.name}`)
        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage = snap
           

        },(err)=>{
            setError(err)
        },async ()=>{
            const url = await storageRef.getDownloadURL();
            setUrl(url)

        })
       

    },[file])

    return {progress,url,error}


}

export default useStorage;