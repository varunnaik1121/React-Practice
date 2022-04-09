
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState ,useEffect} from "react";
import { db } from "../Firebase/config";

const useFirestore = ()=>{
    const [docs,setDocs] = useState([])
   const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        const collectionRef = collection(db,'images')
        const q = query(collectionRef,orderBy("createdAt","desc"))
      
        const unsub= onSnapshot(q,(snapshot)=>{
            let document = [];
            snapshot.docs.map((doc)=>document.push({...doc.data(),id:doc.id}))
            setDocs(document)
            setLoading(false)
     
        })

        return unsub;

    },[])
    return {docs,loading}



}

export default useFirestore;
