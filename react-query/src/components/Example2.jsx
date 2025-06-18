import { useQuery } from '@tanstack/react-query';
import React from 'react';

const getPosts=async(number)=>{
  const resp=await fetch(`https://jsonplaceholder.typicode.com/posts/${number}`);
  const result=await resp.json();
  return result;
}


const Example = ({number}) => {

  const {data, isLoading, refetch}=useQuery({
    queryKey : ['posts', number],
    queryFn : ()=>getPosts(number),
    staleTime : 30000,
  });

  if (isLoading) return <div>로딩중</div>

  console.log(data);
  
  
  return (
    <div>
      {data.title}
    </div>
  );
};

export default Example;