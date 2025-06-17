import React from 'react';
import Header from '../layout/Header';
import Main from '../layout/Main';
import { Route, Routes } from 'react-router-dom';
import BoardList from '../components/board/BoardList';
import BoardDetail from '../components/board/BoardDetail';
import BoardWrite from '../components/board/BoardWrite';
import BoardUpdate from '../components/board/BoardUpdate';

const Display = () => {
  const myStyle={
    margin: '5px',
    padding: '5px',
  }
  return (
    <div style={myStyle}>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/board' element={<BoardList/>}/>
        <Route path='/board/:idx' element={<BoardDetail/>}/>
        <Route path='/write' element={<BoardWrite/>}/>
        <Route path='/board/update/:idx' element={<BoardUpdate/>}/>
      </Routes>
    </div>
  );
};

export default Display;