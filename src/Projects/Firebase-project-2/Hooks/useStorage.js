import { storage,db } from "../Firebase/config";
import { useState,useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const useStorage = (file)=>{
  const [progress,setProgress] = useState(0)
  const [url,setUrl] = useState(null)
  
  
  useEffect(()=>{
    const storageRef = ref(storage,file.name)
    const collectionRef = collection(db,'images')
    const uploadImage = uploadBytesResumable(storageRef,file,'data_url')
    uploadImage.on("state_changed",(snapshot)=>{
      let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      setProgress(percentage)

    },(err)=>{
      console.log(err)
    },async ()=>{
      const url = await getDownloadURL(storageRef)
    
      const payload = {url,createdAt:serverTimestamp()}
      await addDoc(collectionRef,payload)
      setUrl(url)

    })
  },[file])
  return {progress,url}

}

export default useStorage;