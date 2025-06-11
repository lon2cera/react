import { ADD_ITEM, DELETE_ITEM } from "./type";

const initialState=[
  { id : 1, productName : 'hat', price : 2000}
];

const cart=(state=initialState, action)=>{
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter(item=>item.id!==action.payload);
    default:
      return state;
  }
}

export default cart;