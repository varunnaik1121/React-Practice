import React from "react"
import db from './firebase'
import { useEffect } from "react"
import { collection, onSnapshot ,addDoc, doc, setDoc, deleteDoc, where,query, getDocs, serverTimestamp, orderBy} from "firebase/firestore"

const App = () => {

    const [colors,setColors] =React.useState([{name:'Loading....'}]);
    console.log(colors);

    const handleUserInput = async ()=>{

      
        const name = prompt('enter color name');
        const value = prompt('enter color value');
        const collectionRef = collection(db,'colors');
        const payload={name,value,timestamp:serverTimestamp()}
      const docRef= await addDoc(collectionRef,payload)
     console.log(docRef.id)
    }

    const handleEdit= async (id)=>{
      const name=prompt('enter the  name');
      const value = prompt('enter the value');
      if(name && value){
        var docRef = doc(db,'colors',id)
        var payload = {name,value}
      }
      else{
        return
      }
     
     setDoc(docRef,payload)

    }

    const handleDelete = async (id)=>{
      const docRef = doc(db,'colors',id)
     await deleteDoc(docRef)

    }
    const handleItem = async ()=>{
      const name = prompt('enter the name');
      const collectionRef =collection(db,'colors')
      const q = query(collectionRef,where("name","==",name));
      const snapshot = await getDocs(q);
      const result = snapshot.docs.map(doc=>({...doc.data(),id:doc.id}));
     
      result.forEach(async (res)=>{
        const docRef = doc(db,'colors',res.id)
        await deleteDoc(docRef)
      })

    }
    




    useEffect(()=>{
      const collectionRef=collection(db,'colors')

      const q = query(collectionRef,orderBy('timestamp','asc'))
      const unsub = onSnapshot(q, (snapshot) =>
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  },[])

    return <>
            <div>
            firebase project
            </div>
            <button onClick={handleUserInput}>add to db</button>
            <button className="query" onClick={()=>{handleItem()}}>delete by query</button>
            {colors.map((color,indx)=>{
              const {value,name} =color;
              return <div className="color" key={indx}>
                  <h4>{value}</h4>
                 <h3>{name}</h3> 
                 <button className="editBtn" onClick={()=>{handleEdit(color.id)}}>Edit</button>
                 <button className="deleteBtn" onClick={()=>{handleDelete(color.id)}}>Delete</button>
              </div>
            })}
            
        </>
}

export default App
