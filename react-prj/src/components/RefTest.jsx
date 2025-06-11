import React, { useEffect, useRef, useState } from 'react';

const RefTest = () => {
  const [text, setText]=useState('');
  const textInput=useRef();
  const handleChangeInput=(e)=>{
    setText(e.target.value);
  }
  const reset=()=>{
    setText('');
    textInput.current.focus();
  }

  const refValue=useRef(0);
  let varValue=0;

  console.log('렌더링 후 refValue : ', refValue.current);
  console.log('렌더링 후 varValue : ', varValue);
  
  useEffect(()=>{
    refValue.current++;
    varValue++;
  });


  return (
    <div>
      <input type="text" value={text} onChange={handleChangeInput} ref={textInput}/><br />
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default RefTest;