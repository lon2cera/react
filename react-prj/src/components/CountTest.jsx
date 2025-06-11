import React, {  useEffect, useRef, useState } from 'react';

const CountTest = () => {
  // const [number, setNumber]=useState(0);
  // const [count, setCount]=useState(0);
  // const handleCounting=()=>{
  //   setCount(prev=>prev+1);
  //   if (count<3) {
  //     setNumber(prev=>prev+1);
  //   }
  // }
  const [number, setNumber]=useState(0);
  const [count, setCount]=useState(0);

  const handleCounting=()=>{
    setCount(prev=>prev+1);
  }
  useEffect(()=>{
    if (count<4&& count!==0) {
      setNumber(prev=>prev+1);
    }
  },[count])

  return (
    <div>
      <div>
        <span>number : {number}</span>
      </div>
      <div>
        <span>count : {count}</span>
      </div>
      <button onClick={handleCounting}>Click!</button>
    </div>
  );
};

export default CountTest;