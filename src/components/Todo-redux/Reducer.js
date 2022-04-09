

const initialState = {
    list:[]
}
 const reducer = (state=initialState,action)=>{
   if(action.type==='item-added'){
       return[...state,{value:action.payload}];
   }
   return state;

}
export default reducer;