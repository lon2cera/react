import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import board from '../api/board';

const BoardRegister = () => {
  const queryClient=useQueryClient();
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
    mutate(inputs);   
  }

  const resetInputs=()=>{
    setInputs({
      title: '',
      writer: '',
      content: '',
    })
  }
  const moveToBoardList=()=>{
  }

  const {mutate, error, isPending, isError}=useMutation({
    mutationFn : (inputs)=>board.boardRegisterAxios(inputs),
    onMutate : async (inputs)=>{
      // 낙관적 업데이트 전에 게시글 목록 쿼리를 취소해 충돌 방지
      await queryClient.cancelQueries({queryKey : ['bl']});
      // 캐시된 게시글 데이터 가져오기
      const prevData=queryClient.getQueryData(['bl']);
      // 낙관적 업데이트
      if (prevData) {
        queryClient.setQueryData(['bl'], [...prevData, inputs]);
      }
      // 각 콜백의 context로 전달할 데이터 반환
      return {inputs};
    },
    onSuccess : (data, context)=>{
      console.log('onSuccess !!', data, context);
      // 변이 성공 시 캐시 무효화로 게시글 데이터 갱신
      queryClient.invalidateQueries({queryKey : ['bl']});
    },
    onError : (err, context)=>{
      console.log('onError !!', err, context);
      // 변이 실패 시 낙관적 업데이트 결과를 이전 게시글 목록으로 되돌리기
      if (context) {
        queryClient.setQueryData(['bl'], context.prevData);
      }
    },
    onSettled : (data, error, context)=>{
      console.log('onSettled !!' , data, error, context);
    },
    retry : 0
  });





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

export default BoardRegister;