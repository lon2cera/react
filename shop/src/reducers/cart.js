import { ADD_ITEM, DECREASE, DELETE_ITEM, INCREASE } from "./type";

const initialState=[];

const cart=(state=initialState, action)=>{
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
      // return state.map(item=>item.id===action.payload.id?{...item, count:item.count+1}:[...state, action.payload]);
    case DELETE_ITEM:
      return state.filter(item=>item.id!==action.payload);
    case INCREASE:
      return state.map(product=>product.id===action.payload?{...product, count:product.count+1}:product);
    case DECREASE:
      return state.map(product=>product.id===action.payload&&product.count>1?{...product, count:product.count-1}:product);
    default:
      return state;
  }
}

export default cart;