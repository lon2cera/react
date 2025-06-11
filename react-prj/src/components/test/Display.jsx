import React, { useEffect, useState } from 'react';

const Display = (props) => {
  const [count, setCount]=useState(0);
  
  const increase=()=>{
    setCount(prev=>prev+1);
  }
  const decrease=()=>{
    setCount(prev=>prev-1);
  }
  useEffect(()=>{
    if (Number(props.totalCount)<Number(count)) {
      setCount(Number(props.totalCount));
    }
  },[props.totalCount])
  
  return (
    <div>
      <hr/>
      <p>총 {count}/{props.totalCount}명</p>
      <button onClick={increase} disabled={Number(props.totalCount)<=Number(count)&&Number(props.totalCount)!==0}>증가</button>
      <button onClick={decrease} disabled={Number(count)===0}>감소</button>
      <p>
        {
          (Number(props.totalCount)<=Number(count)&&Number(props.totalCount)!==0)&&(<span style={{color:'red'}}>인원이 가득 찼습니다</span>)
        }
      </p>
    </div>
  );
};

export default Display;