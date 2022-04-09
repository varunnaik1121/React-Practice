

import React from 'react'

const url = 'https://jsonplaceholder.typicode.com/todos';
const App = () => {
    const [searchValue,setSearchValue] = React.useState('')
    const [data,setData] = React.useState([])

    const fetchData = async ()=>{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setData(data)

    }

    React.useEffect(()=>{
        fetchData();
    },[])
    return <>
        <input type='text' onChange={(e)=>{setSearchValue(e.target.value)}}></input>
        {
            data.filter((item,index)=>{
              
                if(searchValue==""){
                    return item;
                }
               
                else if(item.title.toLowerCase().includes(searchValue.toLowerCase())){
                    return item;
                }
            }).map((item)=>{
                return <h4>{item.title}</h4>
            })
        }
    </>
}

export default App
