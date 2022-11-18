import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setPhone(e.target.value);
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const registeSignup = () => {
    fetch('http://10.58.52.140:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        password: password,
      }),
    }).then(() => navigate('/SignIn'));
  };
  return (
    <>
      {/* <h1 className="signup-title">SignUp</h1> */}
      <h2 className="signup-title">회원가입</h2>
      <div className="all-inputs">
        <label htmlFor="user-name">이름</label>
        <input
          id="user-name"
          type="text"
          placeholder="이름을 입력해 주세요."
          value={name}
          onChange={handleChangeName}
        />
        <label htmlFor="user-number">연락처</label>
        <input
          id="user-number"
          type="text"
          placeholder="연락처('-'제외)를 입력해주세요."
          value={phone}
          onChange={handleChangeNumber}
        />
        <label htmlFor="user-email">아이디(이메일)</label>
        <input
          id="user-email"
          type="email"
          placeholder="아이디(이메일)을 입력해 주세요."
          value={email}
          onChange={handleChangeEmail}
        />
        <label htmlFor="user-password">비밀번호</label>
        <input
          id="user-password"
          type="text"
          placeholder="비밀번호를 입력해 주세요."
        />
        <label htmlFor="user-password">비밀번호</label>
        <input
          id="user-password"
          type="text"
          placeholder="비밀번호를 다시 입력해 주세요."
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <div className="all-terms-agree-wrap">
        <label>
          <input type="checkbox" name="agree" />
          <span />
          모두 동의하기
        </label>
        <label />
        <input type="checkbox" name="agree" />만 14세 이상입니다
        <a href="http://www.naver.com" target="_blank" rel="noreferrer" />
        전문보기
        <input type="checkbox" name="agree" />
        이용 약관 동의
        <a href="http://www.naver.com" target="_blank" rel="noreferrer" />
        전문보기
        <input type="checkbox" name="agree" />
        마케팅 수신 동의 <p id="option">(선택)</p>
        <a href="http://www.naver.com" target="_blank" rel="noreferrer" />
        전문보기
      </div>
      <button className="signup-btn" onClick={registeSignup}>
        회원가입
      </button>
    </>
  );
};

export default SignUp;
