import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const alertMsg = e => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      return alert('입력란을 채워주세요');
    } else {
      login();
      return alert('로그인 성공');
    }
  };

  const login = () => {
    fetch('http://10.58.52.124:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        navigate('/login');
      });
  };

  return (
    <div className="login">
      <img src="./images/pill.png" alt="logo" className="logo" />
      <form className="login-form" onSubmit={alertMsg}>
        <input
          className="user-input"
          type="text"
          placeholder="이메일 또는 전화번호를 입력하세요."
          title="아이디입력"
          onChange={handleChangeEmail}
        />
        <input
          className="user-input"
          type="password"
          placeholder="비밀번호를 입력하세요."
          minlength="5"
          maxlength="30"
          title="비밀번호입력"
          onChange={handleChangePassword}
        />

        <button className="btn" type="submit">
          로그인
        </button>
      </form>

      <div className="find-pw-body">
        <Link className="find-pw" to="/">
          비밀번호 찾기
        </Link>
        <span>|</span>
        <Link className="join-user" to="/">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
