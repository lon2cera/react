import React, { useState } from 'react';

const authInfo={
  id: 'admin',
  password: '1234'
}


const LoginPage = () => {
  // let ck=true;
  const [ck, setCk]=useState(true);
  const [user, setUser]=useState({
    id: '',
    password: ''
  })
  const handleLogin=(e)=>{
    const {name, value}=e.target;
    setUser({
      ...user,[name]:value
    })
  }
  const login=()=>{
    
    if(user.id===authInfo.id&&user.password===authInfo.password){
      setCk(false)
    }else{
      alert('유저 정보가 일치하지 않습니다');
    }
  }
  const logOut=()=>{
    setCk(true);
    setUser({
    id: '',
    password: ''
  })
  }


  return (
    <div>
      <h1>로그인 / 로그아웃</h1>
      {
        ck?
        (
          <div>
            <p>아이디 : <input type="text" onChange={handleLogin} name='id' value={user.id}/></p>
            <p>비밀번호 : <input type="password" onChange={handleLogin} name='password' value={user.pw}/></p>
            <button onClick={login}>로그인</button>
          </div>
        )
        :
        (
          <div>
            <p><b>안녕하세요 {user.id}님</b></p>
            <button onClick={logOut}>로그아웃</button>
          </div>
        )
      }
    </div>
  );
};

export default LoginPage;