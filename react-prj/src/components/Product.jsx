import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../actions/counterAction';
import { addItem, deleteItem } from '../actions/cartAction';

const Product = () => {

  // store에 접근해서 state 가져오기
  const counter=useSelector(
    state=>state.counter.count
  )
  // 1. cart state 가져오기 찍어보기
  const cart=useSelector(state=>state.cart)
  console.log(cart);
  

  // dispatch를 사용하기 위한 준비
  const dispatch=useDispatch();
  
  // state를 변경하는 함수들
  const handleIncrease=()=>{
    dispatch(increase(1));
  }
  const handleDecrease=()=>{
    dispatch(decrease());
  }


  let id=123;
  const handleAddItem=()=>{
    const newItem={
      id : 2,
      productName : 'hat2',
      price : 1123
    };
    console.log(newItem);
    dispatch(addItem(newItem))
  }
  const handleDeleteItem=()=>{
    dispatch(deleteItem(2))
  }


  return (
    <div>
      <h1>Hello Redux</h1>
      <p>{counter}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <hr />

      {
        cart.map(item=>(
            <p key={item.id}>{item.productName}, {item.price}</p>
        ))
      }
      <br />
      <button onClick={handleAddItem}>아이템 추가</button>
      <button onClick={handleDeleteItem}>아이템 삭제</button>

    </div>
  );
};

export default Product;