
import { useEffect,useState } from 'react'
import React from 'react'
import List from './List';
import Alert from './Alert';

const Setup = () => {


  const getLocalStorage = ()=>{
    let list = localStorage.getItem('list');
   
    if(list){
     list=JSON.parse(localStorage.getItem('list'));
     return list;
    }
    else{
      return [];
    }
  }

    const [name,setName] = useState('');
    const [list,setList] = useState(getLocalStorage())
    const [alert,setAlert] = useState({show:false,msg:'',type:''})
    const [isEditing,setIsEditing] = useState(false);
    const [editId,setEditId] = useState(null)





    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name){
           showAlert(true,'please enter the value','danger')

        }

        else if(name && isEditing){
            setList(list.map((item)=>{
              if(item.id===editId){
                return {...item,title:name}
              }
              return item;


            }))
            
            console.log(list)

            setIsEditing(false)
            setEditId(null)
            setName('')





        }
        else{
          
            const newItem = {id:new Date().getTime().toString(),title:name}
            showAlert(true,'item added','success')
            setList([...list,newItem]);
            console.log(list)
            setName('');
           
        }
       
       

    }

    

    const showAlert = (show=false,msg='',type='')=>{
      setAlert({show,msg,type})
    }

    const removeItem = (id)=>{
        setList(list.filter((item)=> item.id!== id))

    }

    const editItem = (id)=>{
      const specificItem = list.find((item)=>item.id===id);
      setEditId(specificItem.id)
      setIsEditing(true)
      setName(specificItem.title);
     
    }

   useEffect(()=>{
      localStorage.setItem('list',JSON.stringify(list))
   },[list])


    return <>
        <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
          {
              alert.show && <Alert {...alert} list={list} showAlert={showAlert}></Alert>
          }
        

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name} 
            onChange={(e)=>{setName(e.target.value)}}
           
          />
          <button type='submit' className='submit-btn'  >
           {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
     
      {
        
        <div className='grocery-container'>
         <List items={list} removeItem={removeItem} editItem={editItem}></List>
          <button className='clear-btn' onClick={()=>{
             showAlert(true,'list is empty','danger')
              setList([])
          }}>
            clear items
          </button>
        </div>
      }
    </section>
    </>
}

export default Setup;
