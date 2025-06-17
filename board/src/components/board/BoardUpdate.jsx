import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BoardUpdate = () => {
  const {idx}=useParams();
  const nav=useNavigate();

  // const [board, setBoard]=useState(null);
  const [board, setBoard]=useState({});
  
  const [loading, setLoading]=useState(true);
  const getBoard=async () =>{
    const resp=await axios.get(`/board/${idx}`);
    const data=resp.data
    setBoard(data);    
    setLoading(false);
  }
  useEffect(()=>{
    getBoard();
  },[])

  if (loading) {
    return <div>로딩중</div>
  }

  const handleInputChange=(e)=>{
    const {name, value}=e.target;
    setBoard({...board,[name]:value})

  }
  const handleEdit= async()=>{
    const resp2=await axios.put('/board',board);
    const data2=resp2.data
    if (data2==='success') {
      alert('게시글 수정이 완료되었습니다');
      nav('/board')
    }else{
      alert('게시글이 수정되지 않았습니다');
    }
  }
  const moveToBoardList=()=>{
    nav('/board');
  }

  return (
    <div>
      {
        loading?<div>로딩중</div>:
        <>
          <div>
            <label>제목</label>
            <input type="text" name='title' value={board.title} onChange={handleInputChange}/>
          </div>
          <div>
            <label>작성자</label>
            <input type="text" name='writer' value={board.writer} onChange={handleInputChange}/>
          </div>
          <div>
            <label>내용</label>
            <textarea type="text" name='content' cols='30' rows='10' value={board.content} onChange={handleInputChange}></textarea>
          </div>
          <div>
            <button onClick={handleEdit}>수정</button>
            <button onClick={moveToBoardList}>목록으로 이동</button>
          </div>
        </>
      }
    </div>
  );
};

export default BoardUpdate;