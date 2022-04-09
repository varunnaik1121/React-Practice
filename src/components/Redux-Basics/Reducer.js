const reducer = (state=[],action)=>{
   if(action.type==='INPUT_ADDED'){
       return [...state,{value:action.payload}];
   }
  

   return state;

}
export default reducer;