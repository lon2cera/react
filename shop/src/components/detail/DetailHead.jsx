import React from 'react';
import styled from 'styled-components';
import formatKoreanCurrency from '../../util/display/display';
import DescriptionList from './DescriptionList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../actions/cartAction';
import { useNavigate } from 'react-router-dom';

const BR = styled.div`
  width: 100%;
  height: 13px;
  border-bottom: 1px solid #999;
`;
const DetailHeadArea = styled.div`
    width: 100%;
    display : flex;
    flex-direction : row;
    margin-bottom : 100px;
    padding-bottom : 100px;
    border-bottom : 1px solid #999;
`;
const DetailMainImg = styled.div`
    flex : 1;
    height : 500px;
    background-image: url(/images/product/${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding : 50px;
`;
const Description = styled.div`
    flex : 1;
    height : 500px;
    padding : 50px;
`;
const Title = styled.span`
    font-size: 32px;
    font-weight: bold;
    display: block;
    margin: 20px 0;
`;
const PriceTitle = styled.span`
    font-size: 32px;
    font-weight: bold;
    display: block;
    margin: 20px 0;
`;
const InfoArea = styled.div`
    display: table;
    width: 100%;
    table-layout: fixed;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 8px;
`;

const ButtonArea = styled.div`
    width: 100%;
    display : flex;
    gap : 6px;
    
    button {
        vertical-align: top;
        width: 50%;
        margin: 0;
        min-width: auto;
        padding : 15px;
        border-radius : 5px;
        font-weight : 700;
    }
`;
const CartAddButton = styled.button`
    background-color : white;
    color : #333;
    border : 1px solid gray;
    cursor : pointer;
`;
const BuyButton = styled.button`
    background-color : #bcd530;
    color : #fff;
    border : 1px solid #bcd530;
    cursor : pointer;
    `;
// const MyButton = styled.button`
//     background-color : ${props=>props.bg};
//     color : ${props=>props.color||'white'};
//     border : 1px solid ${props=>props.border};
//     cursor : pointer;
// `;

const DetailHead = ({data}) => {

  const cart=useSelector(state=>state.cart);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleCartAddItem=()=>{
    const obj={
      id: data.id,
      productName: data.title,
      price: data.price,
      count:1
    }

    // 1. 메세지 없이 개수 증가
    // 2. 장바구니에 이미 담겨져있다는 메세지를 알리고, 개수 증가
    // 3. 장바구니에 이미 담겨져있다는 메세지를 알리고, 담지X

    dispatch(addItem(obj))
    // eslint-disable-next-line no-restricted-globals
    if (confirm('장바구니에 추가하였습니다. 장바구니로 이동하시겠습니까?')) {
      navigate('/cart');
    }
  }

  return (
    <DetailHeadArea>
      <DetailMainImg image={data.main}/>
      <Description>
        <Title>{data.title}</Title>
        <PriceTitle>{formatKoreanCurrency(data.price)}</PriceTitle>
        <BR/>
        <InfoArea>
          <DescriptionList contents={{dt:'원산지', dd: '상품 정보 참고'}}/>
          <DescriptionList contents={{dt:'배송비', dd: '3,000원'}}/>
        </InfoArea>
        <ButtonArea>
          <CartAddButton onClick={handleCartAddItem}>장바구니</CartAddButton>
          {/* <MyButton bg='##999' color='#333' border='gray'>장바구니</MyButton> 버튼 하나로 props를 다르게 던져서 다른 버튼으로 활용 가능*/}
          <BuyButton>바로구매</BuyButton>
        </ButtonArea>
      </Description>
    </DetailHeadArea>
  );
};

export default DetailHead;