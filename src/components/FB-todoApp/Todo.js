
import { collection, deleteDoc,doc } from 'firebase/firestore'


import db from './firebase'





const Todo = ({item}) => {
   
const handleDelete = async (id)=>{
  const docRef = collection(db,'todos',id);
  await deleteDoc(docRef)
 
   
    

}
 
    
return <> {item.todo && <div className='list'>
    <p className='list-name'>{item.todo}</p>
    <button className='del-btn' onClick={(e)=>{handleDelete(item.id)}}>delete</button>
</div>}
</>
}

export default Todo;
