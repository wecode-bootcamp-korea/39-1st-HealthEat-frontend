import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [userValue, setUserValue] = useState({
    email: '',
  });
  const { email } = userValue;
  const [isEmailError, setIsEmailError] = useState(false);

  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserValue({ ...userValue, [name]: value });
    const emailRegExp =
      /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (emailRegExp.test(email) || value === '') {
      setIsEmailError(false);
    } else {
      setIsEmailError(true);
    }
  };

  const alertMsg = e => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      return alert('입력란을 채워주세요.');
    } else {
      SignUp();
      return alert('회원가입 성공');
    }
  };

  const [agreeList, setAgreeList] = useState({
    age: false,
    terms: false,
    marketing: false,
  });

  const { age, terms, marketing } = agreeList;
  const handleCheckbox = e => {
    const { name } = e.target;
    setAgreeList(prev => ({ ...prev, [name]: !agreeList[name] }));
  };
  const handleAllcheck = () => {
    const isAllChecked = Object.values(agreeList).every(el => el === true);
    let newObj = {};
    if (isAllChecked) {
      for (let key in agreeList) {
        newObj = { ...newObj, [key]: false };
      }
    } else {
      for (let key in agreeList) {
        newObj = { ...newObj, [key]: true };
      }
    }
    setAgreeList(newObj);
  };
  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setPhone(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const registeSignup = e => {
    e.preventDefault();

    fetch('http://10.58.52.143:3000/users/signup', {
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
    }).then(response => {
      if (response.status === 201) {
        alert('회원가입을 축하합니다!');
        navigate('/login');
      }
    });
    // .then(data => {
    //   if (data.message === 'success') {
    //     navigate('/login');
    //   } else {
    //     alert('회원가입 실패');
    //   }
    // });
  };
  return (
    <>
      {/* <h1 className="signup-title">SignUp</h1> */}
      <form onSubmit={registeSignup}>
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
            name="email"
            type="email"
            placeholder="아이디(이메일)을 입력해 주세요."
            minLength="5"
            maxLength="30"
            value={email}
            onChange={getUserInfo}
          />
          <span className="emailalert">
            {isEmailError ? '이메일 형식에 맞게 작성해주세요.' : ''}
          </span>
          <label htmlFor="user-password">비밀번호</label>
          <input
            id="user-password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
          />
          <label htmlFor="user-password">비밀번호</label>
          <input
            id="user-password"
            type="password"
            placeholder="비밀번호를 다시 입력해 주세요."
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <section className="agree-container">
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="agree"
              checked={marketing}
              onChange={handleAllcheck}
            />
            <h3>모두 동의하기</h3>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="age"
              checked={age}
              onChange={handleCheckbox}
            />
            <p> 만 14세 이상입니다</p>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="terms"
              checked={terms}
              onChange={handleCheckbox}
            />
            <div className="view-text">
              <p> 이용 약관 동의</p>
              <span>전문보기</span>
            </div>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="marketing"
              checked={marketing}
              onChange={handleCheckbox}
            />
            <div className="view-text">
              <p>
                마케팅 수신 동의 <small className="selecttext">(선택)</small>
              </p>
              <span>전문보기</span>
            </div>
          </div>
          <div className="btnContainer">
            <button className="signupBtn" type="submit">
              회원가입
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default SignUp;
