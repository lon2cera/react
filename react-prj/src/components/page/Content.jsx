import React from 'react';
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <div>
      <h1>Content 페이지</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Content;