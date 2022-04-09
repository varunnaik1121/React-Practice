

import React from 'react'
import { useGlobal } from './context'
import CartItem from './CartItem';
import Loading from './Loading';


const CartContainer = () => {

    const {cart,loading,clearCart,total,amount} = useGlobal();
    console.log(cart)
   
   if(cart.length==0){
       return <>
        <div>no items in cart</div>
       </>
   }

    return <>
        <div className='cart-container'>
            <h3 className='cart-title'>Your bag</h3>
            {
                cart.map((item)=>{
                    return <>
                        <CartItem {...item} key={item.id}></CartItem>
                    </>
                })
            }
            <h3 className='total'>Total:<span className='total-amount'>{total}</span></h3>
            <button className='btn' onClick={clearCart}>Clear All</button>
        </div>
    </>
}

export default CartContainer
