import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addData } from './actions/actions'
import store from './store'
const App = () => {
  const [inputValue,setInputValue] = useState('');

const list = useSelector(state=>state.reducer)
const dispatch = useDispatch()


const addTodo = (value)=>{
  dispatch(addData(value));
  setInputValue('')

}



  return <>
    <div>
        simple todo list
    </div>
    <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
    <button className='btn' onClick={()=>{addTodo(inputValue)}}>add task</button>
    {list.map((item)=>{
      return <div>
        {item.value}
      </div>
    })}
   
  </>
}

export default App
