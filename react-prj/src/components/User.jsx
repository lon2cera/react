import React from 'react';

const User = ({name, age, setAge}) => {

  return (
    <div>
      <h1>안녕하세요. 제 이름은 {name}이고, 나이는 {age}살 입니다.</h1>
      <button onClick={()=>setAge(100)}>나이 변경</button>
    </div>
  );
};

export default User;