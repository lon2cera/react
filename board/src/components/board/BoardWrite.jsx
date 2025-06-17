import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardWrite = () => {

  const nav=useNavigate();
  const [inputs, setInputs]=useState({
    title: '',
    writer: '',
    content: '',
  })
  const handleInputChange=(e)=>{
    const {name, value}=e.target;
    setInputs({...inputs,[name]:value})
  }
  const registerBoard= async()=>{
    // 1. 빈 값 검증 방법-1
    const {title, writer, content}=inputs;
    if (!title||!writer||!content) {
      alert("모든 내용을 입력해주세요");
      return;
    }

    // 2. 빈 값 검증 방법-2
    // Object.keys 키 값으로 배열 만들기
    // Object.values 밸류 값으로 배열 만들기
    const inputArr=Object.values(inputs);
    const isEmpty=inputArr.some(value=>value==='');
    if (isEmpty) {
      alert("모든 내용을 입력해주세요");
      return;
    }

    const resp=await axios.post('/board',inputs)
    // .then(response=>console.log(response.data));
    const data=resp.data
    console.log(data);
    if (data==='success') {
      alert('게시글 등록이 완료되었습니다');
      nav('/board')
    }else{
      alert('게시글이 등록되지 않았습니다');
    }
  }

  const resetInputs=()=>{
    setInputs({
      title: '',
      writer: '',
      content: '',
    })
  }
  const moveToBoardList=()=>{
    nav('/board')
  }


  return (
    <div>
      <div>
        <label>제목</label>
        <input type="text" name='title' value={inputs.title} onChange={handleInputChange}/>
      </div>
      <div>
        <label>작성자</label>
        <input type="text" name='writer' value={inputs.writer} onChange={handleInputChange}/>
      </div>
      <div>
        <label>내용</label>
        <textarea type="text" name='content' cols='30' rows='10' value={inputs.content} onChange={handleInputChange}></textarea>
      </div>
      <div>
        <button onClick={registerBoard}>등록</button>
        <button onClick={resetInputs}>다시 입력</button>
        <button onClick={moveToBoardList}>목록으로 이동</button>
      </div>
    </div>
  );
};

export default BoardWrite;