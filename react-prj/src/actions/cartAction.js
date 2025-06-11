import { ADD_ITEM, DELETE_ITEM } from "../reducers/type";

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

export {addItem, deleteItem};