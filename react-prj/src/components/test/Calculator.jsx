import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1]=useState(0);
  const [number2, setNumber2]=useState(0);
  const [result, setResult]=useState(0);
  const handleNumber=(e)=>{
    const {name, value}=e.target;
    if(name==='number1')setNumber1(value)
    else setNumber2(value);
  }
  const calc=(e)=>{
    const type=e.target.name;

    let parseNum1=parseInt(number1);
    let parseNum2=parseInt(number2);

    switch (type) {
      case '+': setResult(parseNum1+parseNum2);
        break;
      case '-': setResult(parseNum1-parseNum2);
        break;
      case '*': setResult(parseNum1*parseNum2);
        break;
      case '/': setResult(parseNum1/parseNum2);
        break;
      default:
        new Error('정해지지 않은 타입 에러');
    }
  }

  return (
    <div>
      <h2>계산기</h2>
      <input type="number" name='number1' value={number1} onChange={handleNumber}/>
      <input type="number" name='number2' value={number2} onChange={handleNumber}/>
      <br />
      <button onClick={calc} name='+'>더하기</button>
      <button onClick={calc} name='-'>빼기</button>
      <button onClick={calc} name='*'>곱하기</button>
      <button onClick={calc} name='/'>나누기</button>
      <br />
      <p>결과 : {result}</p>
    </div>
  );
};

export default Calculator;<input type="text" />