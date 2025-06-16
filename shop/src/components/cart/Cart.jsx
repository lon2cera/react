import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { decrease, increase, deleteItem } from '../../actions/cartAction';

const CartWrapper=styled.div`
  max-width: 80%;
  margin: auto;
  table{
    width: 100%
  }
  td{
    text-align: center;
  }
`;

const Cart = () => {

  const cart=useSelector(state=>state.cart);
  const dispatch=useDispatch();
  const increaseCount=(productId)=>{
    dispatch(increase(productId));
  }
  const decreaseCount=(productId)=>{
    dispatch(decrease(productId));

  }
  const removeItem=(produtcId)=>{
    dispatch(deleteItem(produtcId));
  }

  return (
    <CartWrapper>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품 이름</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((product, index)=>{
              return (
                <tr key={product.id}>
                  <td>{index+1}</td>
                  <td>{product.productName}</td>
                  <td>
                    <button onClick={()=>decreaseCount(product.id)} disabled={product.count===1}>-</button>
                    {product.count}
                    <button onClick={()=>increaseCount(product.id)}>+</button>
                  </td>
                  <td>{product.price*product.count}</td>
                  <td><button onClick={()=>removeItem(product.id)}>삭제</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </CartWrapper>
  );
};

export default Cart;