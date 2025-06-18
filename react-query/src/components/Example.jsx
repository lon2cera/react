import { useQuery } from '@tanstack/react-query';
import React from 'react';

const getPosts=async()=>{
  const resp=await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const result=await resp.json();
  return result;
}


const Example = () => {

  const {data, isLoading, refetch}=useQuery({
    queryKey : ['posts'],
    queryFn : getPosts,
    staleTime : 30000,
  });

  if (isLoading) return <div>로딩중</div>

  console.log(data);
  
  
  return (
    <div>
      <button onClick={refetch}>다시 불러오기</button>
      <ul>
        {
          data.map(post=>{
            return <li key={post.id}>{post.title}</li>
          })
        }
      </ul>
    </div>
  );
};

export default Example;