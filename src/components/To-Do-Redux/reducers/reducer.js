

const reducer = (state=[],action)=>{
   if(action.type==='ADD-TODO'){
      const newItem = {id:new Date().getTime().toString(),value:action.payload}
     return [...state,newItem]
   
   }
   
  return state;

}
export default reducer;