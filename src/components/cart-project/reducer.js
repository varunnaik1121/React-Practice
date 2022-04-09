import React from 'react'


const reducer = (state,action) => {

  
    if(action.type==='CLEAR_CART'){
     
        return {...state,cart:[]}
    }
    if(action.type==='REMOVE_ITEM'){
        return {...state,cart:state.cart.filter((item)=>item.id !== action.payload)}
    }
    
    if(action.type==='CART_TOTAL'){
        let {total,amount}=state.cart.reduce((cartTotal,cartItem)=>{
            cartTotal.amount+=cartItem.amount;

            cartTotal.total+=cartItem.amount*cartItem.price;
            return cartTotal;
        },{total:0,amount:0})
        total=parseFloat(total).toFixed(2)



        return {...state,total,amount}
    }



   

    if(action.type==='LOADING'){
        return {...state,loading:true}
    }
    if(action.type==='DATA-ARRIVED'){
        return {...state,cart:action.payload,loading:false}
    }
    if (action.type === 'TOGGLE-AMOUNT') {
        let tempCart = state.cart
          .map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              if (action.payload.type === 'inc') {
                return { ...cartItem, amount: cartItem.amount + 1 }
              }
              if (action.payload.type === 'dec') {
                return { ...cartItem, amount: cartItem.amount - 1 }
              }
            }
            return cartItem
          })
          .filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart }
      }
     



    
 
}

export default reducer;
