import { ADD_ITEM, DECREASE, DELETE_ITEM, INCREASE } from "../reducers/type";

function addItem(item) {
  return {
    type: ADD_ITEM,
    payload : item
  }
}
function deleteItem(id) {
  return{
    type: DELETE_ITEM,
    payload: id
  }
}
function increase(productId) {
  return {
    type: INCREASE,
    payload : productId
  }
}
function decrease(productId) {
  return{
    type: DECREASE,
    payload: productId
  }
}

export {addItem, deleteItem, increase, decrease};