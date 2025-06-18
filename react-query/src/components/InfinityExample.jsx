import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';

const InfinityExample = () => {

  const {
    data, // 가져온 데이터
    fetchNextPage, //다음 페이지 가져오기 함수
    hasNextPage, // 다음 페이지가 있는지 여부
    isFetchingNextPage, // 다음 페이지 가져오는 중
    isLoading,
    isError,
    error
  }=useInfiniteQuery({
    queryKey : ['posts'],
    queryFn : async ({pageParam=1})=>{
      const limit=50;
      const resp=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=${limit}`);
      if(!resp.ok) throw new Error("에러 발생");
      const result=await resp.json();
      return result;
    },
    initialPageParam : 1, // 첫 페이지 번호 초기화
    getNextPageParam : (lastPage, allPages)=>{
      // 더 이상 받아올 데이터가 없으면 undefined 반환
      return lastPage.length===0?undefined:allPages.length+1;
    },
    enabled : true,
    staleTime : 1000*60,
    gcTime : 1000 * 60,
  });
  
  if(isLoading) return <div>로딩중</div>
  if (isError) return <div>에러 : {error.message}</div>

  return (
    <div>
      {
        data.pages.map((page, pageIndex)=>(
          page.map(post=>(
            <div key={post.id} style={{border : '1px solid #ccc', marginBottom : '10px', padding : '10px'}}>
              <h4>{post.id}/{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))
        ))        
      }
      {
        hasNextPage
        ?
        (<button onClick={()=>fetchNextPage()} disabled={isFetchingNextPage}>{isFetchingNextPage?'불러오는 중...':'더보기'}</button>)
        : 
        <p>더 이상 데이터가 없습니다.</p>
      }
    </div>
  );
};

export default InfinityExample;