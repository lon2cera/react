import { useQuery } from '@tanstack/react-query';
import React from 'react';

const getPosts=async(number)=>{
  const resp=await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const result=await resp.json();
  return result;
}


const Example = ({number}) => {

  const {data, isLoading, refetch}=useQuery({
    queryKey : ['posts'],
    queryFn : ()=>getPosts(number),
    // select : data=>data.map(post=>post.title),
    // initialData : [{
    //   id : 1,
    //   title : '데이터가 없습니다'
    // }],
    // staleTime : 1000*60*5, // 5분동안 fresh, Infinity 무한
    // gcTime : 1000*60*10, // 10분 동안 메모리에 유지
  });

  if (isLoading) return <div>로딩중</div>

  console.log(data);
  
  return (
    <div>
      {
        data.map(post=>{
          return <p key={post.id}>{post.title}</p>
        })
      }
    </div>
  );
};

export default Example;