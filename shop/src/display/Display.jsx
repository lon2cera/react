import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import styled from 'styled-components';
import Main from '../layout/Main';
import { Route, Routes } from 'react-router-dom';
// import data from '../util/mock/data';
import Detail from '../components/detail/Detail';
import axios from 'axios';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;
const HeaderArea = styled.div`
    width: 100%;
    background-color : white;
    position : sticky;
    top : 0;
    z-index : 9999;
`;
const Body = styled.div`
    width: 100%;
    min-height: 50vh;
`;


const Display = () => {

  const [products, setProducts]=useState([]);
  const [more, setMore]=useState();

  const getProductList=async()=>{
    const response=await fetch('/api/products');
    const data=await response.json();
    setProducts(data);
  }
  useEffect(()=>{
    getProductList();
  }, []);

  // const run1=()=>{
  //   fetch('/getTextReact')
  //   .then(response=>response.text())
  //   .then(data=>console.log(data));
  // }
  // const run1=async ()=>{
  //   const response=await fetch('/api/products');
  //   const data=await response.json();
  //   console.log(data);
  // }
  // const run2=()=>{
  //   fetch('/getListReact')
  //   .then(response=>response.json())
  //   .then(data=>console.log(data));
  // }
  // const run3=()=>{
  //   axios.get('/getListReact')
  //   .then(response=>console.log(response.data));
  // }
  // run1();
  // run2();
  // run3();

      return (
    <Container>
      <HeaderArea>
        <Header/>
      </HeaderArea>
      <Body>
        <Routes>
          <Route path='/' element={<Main data={products}/>}/>
          <Route path='/detail/:pId' element={<Detail data={products}/>}/>
        </Routes>
      </Body>
    </Container>
  );
};

export default Display;