import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount]=useState(0);
  const [timer, setTimer]=useState(false);
  // const [timer, setTimer]=useState(null);

  useEffect(()=>{
    let timeOut=setTimeout(() => {
      if (timer===true) {
        setCount(prev=>prev+1);
      }        
    }, 1000);
    return ()=>{
      clearTimeout(timeOut);
    }
  },//[count]    여기 주석 지우고 실행
  )
  
  const start=()=>{
    if (timer===false) {
      setTimer(true);
      setCount(prev=>prev+1);
    }

    // const interval=setInterval(() => {
    //   setCount(prev=>prev+1);
    // }, 1000);
    // setTimer(interval);

  }
  const stop=()=>{
    setTimer(false);
    // clearInterval(timer);
  }
  const reset=()=>{
    setCount(0);
    // setCount(0);
    // clearInterval(tiemr);
  }

  return (
    <div>
      <h1>Timer</h1>
      <span>경과시간 : {count}초</span>
      <div>
        <button onClick={start}>시작</button>
        <button onClick={stop}>정지</button>
        <button onClick={reset}>초기화</button>
      </div>
    </div>
  );
};

export default Timer;