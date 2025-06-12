import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/product/ProductList';
const Wrapper=styled.div``;
const MainBG=styled.div`
  min-height: 500px;
  background-image: url(/images/main/main1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 50px;
`;


const Main = ({data}) => {
  return (  
    <Wrapper>
      <MainBG/>
      <ProductList data={data}/>
      {/* <ProductList/> 삽입예정 */}
    </Wrapper>
  );
};

export default Main;