// import { createContext, useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import About from './components/page/About';
import Content from './components/page/Content';
import Main from './components/page/Main';
import View from './components/page/View';
import Write from './components/page/Write';
// import Parent from './components/Parent';
// import Product from './components/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/view/:postId' element={<View/>}>
            <Route path='content' element={<Content/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
          <Route path='/write' element={<Write/>}/>

          <Route path='*' element={<div>404페이지</div>}/>
        </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
