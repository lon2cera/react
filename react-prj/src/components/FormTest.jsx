import React, { useState } from 'react';

const FormTest = () => {
  const [user, setUser]=useState({
    name: '',
    age: '',
    email: '',
    gender: '남자',
    addr: '강남'
  })
  // const [name, setName]=useState('');
  // const [age, setAge]=useState('');
  // const [email, setEmail]=useState('');

  const handleInputChange=(e)=>{
    const {name, value}=e.target;
    setUser({
      ...user,
      [name]:value,
    })
    //구조분해할당
  }
  const handleSubmit=()=>{
    // console.log(user.name, user.age, user.email);
    
  }
  const resetForm=()=>{
    setUser({
      name: '',
      age: '',
      email: '',
      gender: '남자',
      addr: '강남'
    });
  }


  return (
    <div>
      <form action="#">
        <div>
          <label>이름</label>
        </div>
        <div>
          <input type="text" onChange={handleInputChange} name='name' value={user.name}/>
        </div>
        <div>
          <label>나이</label>
        </div>
        <div>
          <input type="text" onChange={handleInputChange} name='age' value={user.age}/>
        </div>
        <div>
          <label>이메일</label>
        </div>
        <div>
          <input type="text" onChange={handleInputChange} name='email' value={user.email}/>
        </div>
        <div>
          <label>성별</label>
        </div>
        <div>
          <input type="radio" onChange={handleInputChange} name='gender' value={'남자'} defaultChecked/>남자
      {/* <input type="radio" onChange={handleInputChange} name='gender' value={'남자'} checked={user.gender==='남자'}/>남자 */}
          <input type="radio" onChange={handleInputChange} name='gender' value={'여자'}/>여자
        </div>
        <div>
          <label>주소</label>
        </div>
        <div>
          <select name="addr" id="" onChange={handleInputChange}>
            <option value="강남">강남</option>
            <option value="강동">강동</option>
            <option value="강서">강서</option>
            <option value="강북">강북</option>
          </select>
        </div>
        <button type='button' onClick={handleSubmit}>Click!</button>
        <button type='button' onClick={resetForm}>초기화</button>
      </form>
    </div>
  );
};

export default FormTest;
