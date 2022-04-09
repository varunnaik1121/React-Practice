


import React from 'react'
import { useState,useEffect,memo,useCallback,useMemo } from 'react'
 

const Setup = () => {

    const [count,setCount] = useState(0);
    const [data,setData] = useState([]);
    const [cart,setCart] = useState(0);

    const fetchData = async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json();
        setData(data)
      
        
    }

    useEffect(()=>{

        console.log('re rendered')
        fetchData()
    },[])

    const addToCart = ()=>{

        console.log('function rendered')
        setCart(cart+1)


    }
   

    return ( 
        <div>
            <button onClick={()=>{
                setCount(count+1)
            }}>click me</button>
            <h3>you clicked this {count} times</h3>
          

            <h3 style={{margin:'3rem'}}>Cart value : {cart}</h3>
            <List data={data} addToCart={addToCart}></List>

        </div>
    )
}
export default Setup;


const List = memo(({data,addToCart})=>{
    useEffect(()=>{
        console.log('list renderd')
    })
    return <>
        <h3>hello world</h3>
        <List1 data={data} addToCart={addToCart}></List1>
    </>
})


const List1 = ({data,addToCart})=>{





    useEffect(()=>{
        console.log('last list renderd')
    })
    return <>
        <h3>this is list 2</h3>
        {data.map((item,index)=>{
            return index<10 && <div style={{margin:'10px'}}>
                <h2 key={index}>{item.title}</h2>
                <button onClick={()=>{
                    addToCart()
                }}>add to cart</button>
            </div>
        })}
    </>
}
