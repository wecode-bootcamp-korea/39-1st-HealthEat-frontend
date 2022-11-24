import React, { useState } from 'react';
import '../Login/Login.scss';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const a = true;
  const alertMsg = e => {
    e.preventDefault();
    //로그인 정보 확인
    fetch('http://10.58.52.143:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userValue.email,
        password: userValue.password,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('로그인 실패!');
      })
      .catch(error =>
        setLoginAlert(
          '입력하신 정보는 없는 계정입니다. 로그인 정보를 확인해 주세요.'
        )
      )
      .then(data => {
        localStorage.setItem('TOKEN', data.accessToken);
        navigate('/');
      });
  };
  const [loginAlert, setLoginAlert] = useState('');
  const [userValue, setUserValue] = useState({
    email: '',
    password: '',
  });
  const { email } = userValue;
  const emailRegExp =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const isEmailValid = !emailRegExp.test(email) && '양식을 확인해주세요.';
  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserValue({ ...userValue, [name]: value });
  };
  return (
    <div className="login">
      <img src="./images/pill.png" alt="logo" className="logo" />
      <form className="login-form" onSubmit={alertMsg}>
        <input
          className="user-input"
          type="text"
          name="email"
          placeholder="이메일을 입력하세요."
          minLength="5"
          maxLength="30"
          title="이메일입력"
          onChange={getUserInfo}
        />
        <span className="emailrewrite">{email.length > 0 && isEmailValid}</span>
        <input
          className="user-input"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요."
          minLength="5"
          maxLength="30"
          title="비밀번호입력"
          onChange={getUserInfo}
        />
        <div className="loginAlert">{loginAlert}</div>
        <button className="btn" type="submit">
          로그인
        </button>
      </form>
      <div className="find-pw-body">
        <Link className="find-pw" to="/">
          비밀번호 찾기
        </Link>
        <span>|</span>
        <Link className="join-user" to="/signup">
          회원가입
        </Link>
      </div>
    </div>
  );
};
export default Login;
