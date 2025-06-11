import React, { useState } from 'react';

const InputCount = ({setTotalCount}) => {
  const [count, setCount]=useState(0);
  
  const handleChangeCount=(e)=>{
    setCount(e.target.value);
  }
  const checkCount=()=>{
    if (count<1) {
      alert('1이상의 값을 설정');
      return;
    }
    setTotalCount(count)
  }
  return (
    <div>
      <p>최대 인원을 정하시오</p>
      <div>
        <input type="number" onChange={handleChangeCount}/>
        <button onClick={checkCount}>확인</button>
      </div>
    </div>
  );
};

export default InputCount;