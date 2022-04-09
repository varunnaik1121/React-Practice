import React from 'react'
import { useState,useEffect } from 'react'
import db from './firebase'
import { collection, onSnapshot,addDoc, doc } from "firebase/firestore"
import Todo  from './Todo'
import { useSelector,useDispatch } from 'react-redux'
import { addtodo } from './redux/listItems'


const App = () => {

    // const [list,setList] = useState([]);
    const {list} = useSelector(state=>state.todo)
    

  const dispatch = useDispatch()
    const [input,setInput] = useState('')

    const addTodo = async ()=>{
       
      
        if(input){
            const collectionRef = collection(db,'todos');
            const payload = {todo:input,id:doc.id}
            const docRef= await addDoc(collectionRef,payload)
            console.log(docRef.id)
           

        }
        setInput('')
      
      
      
       

    }

    useEffect(()=>{
       onSnapshot(collection(db,'todos'),(snapshot)=>{
         dispatch(addtodo(snapshot.docs.map(doc=>doc.data())));
         console.log(list)


       })

    },[])
   
    return <>
           <input value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
           <button onClick={()=>{addTodo()}}>add task</button>
           {list.map((item,indx)=>{
               return <Todo item={item} key={indx}> 

               </Todo>
           })}
         

        </>
}

export default App
