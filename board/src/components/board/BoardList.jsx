import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import paging from '../../util/paging';

const BoardList = () => {
  // 상태 값으로 관리할 데이터
  // 1. 게시글 리스트 ( boardList )
  // 2. 현재 페이지 ( curPage )
  // 3. 현재 페이지에서 확인할 목록 개수 ( amount )
  // 4. 로딩 처리 ( loading )
  // 5. 검색 값 ( filter )
  const navigate=useNavigate();
  const [boardList, setBoardList]=useState([]);
  const [curPage, setCurPage]=useState(1);
  const [amount, setAmount]=useState(10);
  const [loading, setLoading]=useState(true);
  const [filter, setFilter]=useState('');


  const getBoardList=async ()=>{
    // 2. 게시글 목록 데이터 받아오기
    const resp=await axios.get('/boardList');
    if (resp.status===200) {
      const data=resp.data;    
      // 3. 게시글 목록 데이터 상태 값에 할당
      setBoardList(data);
      setLoading(false);
    }else{
      new Error('데이터 실패..');
    }
  }

  useEffect(()=>{
    getBoardList(); // 1. 게시글 목록 조회함수 호출
  },[])
  
  const handleMoveWritePage=()=>{
    navigate('/write');
  }

  /* 페이징 및 필터 게시글 목록 계산 */
  // 필터링 된데이터들만 추출
  const tmpPosts=filter?
    boardList.filter(post=>post.title.toLowerCase().includes(filter.toLowerCase()))
    :boardList
  
  // 필터링 된 데이터를 화면에 보여줄 개수로 나눔
  //현재 보여줄 글의 마지막 인덱스
  const indexOfLastPost=curPage*amount;
  //현재 보여줄 글의 처음 인덱스
  const indexOfFirstPost=indexOfLastPost-amount;
  const filterPosts=tmpPosts.slice(indexOfFirstPost, indexOfLastPost);

  /* 페이징을 만들기 위해 현재 필터링이 적용된
     글의 개수인지, 전체 글의 개수인지 판단 */  
  const cnt=filter===''?boardList.length:tmpPosts.length;
  // 페이징 데이터 받아오기
  const obj=paging(cnt, curPage, amount);
  const {endPage, startPage, prev, next}=obj;
  // 페이지 버튼 생성
  const pageList=[];
  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);    
  }

  // 페이지 번호 변경 함수
  const handleChangePageNum=(e)=>{
    const type=e.target.value;
    if (type==='next') {
      setCurPage(parseInt(endPage)+1);
    }else if(type==='prev'){
      setCurPage(parseInt(startPage)-1);
    }else{
      setCurPage(type);
    }
        
  }
  // 필터링 함수
  const handleChangeFilter=(e)=>{
    setFilter(e.target.value);
    setCurPage(1);
  }

  const handleChangeAmount=(e)=>{
    setAmount(e.target.value);
    setCurPage(1);
  }


  return (
    <div>
      <div>
        <button onClick={handleMoveWritePage}>새 게시글 등록</button>
      </div>
      <input type="text" value={filter} placeholder='검색어 입력' onChange={handleChangeFilter}/>
      <select onChange={handleChangeAmount}>
        <option value="10">10개씩 보기</option>
        <option value="15">15개씩 보기</option>
        <option value="20">20개씩 보기</option>
      </select>
      <ul>
        {
          filterPosts.map(board=>{
            return (
              <Link to={`/board/${board.idx}`} key={board.idx}>
                <li>{board.title}</li>
              </Link>
            )
          })
        }
      </ul>
      <div>
        {
          prev&&<button value='prev' onClick={handleChangePageNum}>&lt;</button>
        }
        {
          pageList.map(number=>(
            <button key={number} value={number} onClick={handleChangePageNum}>{number}</button>
          ))
        }
        {
          next&&<button value='next' onClick={handleChangePageNum}>&gt;</button>
        }
      </div>
    </div>
  );
};

export default BoardList;