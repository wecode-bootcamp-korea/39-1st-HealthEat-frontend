import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const alertMsg = () => {
    if (email.length === 0 || password.length === 0) {
      return alert('입력란을 채워주세요');
    } else {
      return alert('로그인 성공');
    }
  };

  return (
    <div className="login">
      <img src="./images/pill.png" alt="logo" className="logo" />
      <form className="loginForm">
        <input
          className="userInput"
          type="text"
          placeholder="이메일 또는 전화번호를 입력하세요."
          title="아이디입력"
          onChange={handleChangeEmail}
        />
        <input
          className="userInput"
          type="password"
          placeholder="비밀번호를 입력하세요."
          minlength="5"
          maxlength="30"
          title="비밀번호입력"
          onChange={handleChangePassword}
        />

        <button className="btn" onClick={alertMsg}>
          로그인
        </button>
      </form>

      <div className="findPw">
        <a className="pwA" href="#">
          비밀번호 찾기
        </a>
        <span>|</span>
        <a className="idA" href="#">
          회원가입
        </a>
      </div>
    </div>
  );
};

export default Login;
