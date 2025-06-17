import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BoardDetail = () => {
  /*
    1. idx 라는 param을 통해서 해당 컴포넌트로 이동(라우팅)
    2. 전달 받은 idx파라미터를 통해 api에 데이터 요청
    3. 요청 받은 데이터 콘솔에 출력
  */
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

  // if (board===null) {
  //   return <div>로딩중</div>
  // }
  if (loading) {
    return <div>로딩중</div>
  }


  const handleEdit= async()=>{
    nav(`/board/update/${idx}`);
  }
  const handleDelete=async()=>{
    const resp2=await axios.delete(`/board/${idx}`)
    const data2=resp2.data
    if (data2==='success') {
      alert('게시글이 삭제되었습니다');
      nav('/board');
    }else{
      alert('게시글이 삭제되지 않았습니다');
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
          <h2>{board.title}</h2>
          <h4>{board.regdate}</h4>
          <hr />
          <p>{board.content}</p>
          <div>
            <button onClick={handleEdit}>수정</button>
            <button onClick={handleDelete}>삭제</button>
            <button onClick={moveToBoardList}>목록으로 이동</button>
          </div>
        </>
      }
    </div>
  );
};

export default BoardDetail;