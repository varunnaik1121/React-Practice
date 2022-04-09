

import React from 'react'
import { useGlobal } from './context'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
 
const CartItem = ({title,price,img,amount,id}) => {
    const {removeItem,increase,decrease,toggleAmount} = useGlobal()
    return <>
        <div className='cart-card'>
            <div className='left-side'>
                <h5 className='product-title'>{title}</h5>
                <img src={img} alt={title}></img>
                <button className='btn remove' onClick={()=>removeItem(id)}>Remove</button>
                <h5 className='price'>${price}</h5>
            </div>
            <div className='right-side'>
                    <AiOutlineMinus className='minus' onClick={()=>toggleAmount(id,'dec')}></AiOutlineMinus>
                    <h3 className='amount'>{amount}</h3>
                    <AiOutlinePlus className='plus' onClick={()=>toggleAmount(id,'inc')}></AiOutlinePlus>
            </div>

        </div>
    </>
}

export default CartItem
