import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount]=useState(0);
  const handleCounting=()=>{
    console.log('increase btn clicked');
    setCount(prev=>prev+1);
    setCount(prev=>prev+2);
    setCount(prev=>prev+3);
  }

  useEffect(()=>{
    console.log('렌더링 완료');
    return ()=>{
      console.log('cleanup');
      // 일반 로그를 출력하거나 특정 함수를 실행할 수 있다
      // ex) 접속 해제, 로그아웃 등
    }
  });
  // 배열이 없을 때 계속 렌더링
  // 빈배열일 때 처음 한번만
  // 상태값이 들어갔을 때 해당 상태값이 변할 때만 렌더링

  return (
    <div>
      <p>{count}번 클릭</p>
      {/* <button onClick={()=>setCount(count+1)}>Click!!</button>   */}
      <button onClick={handleCounting}>Click!!</button>
    </div>
  );
};

export default Counter;