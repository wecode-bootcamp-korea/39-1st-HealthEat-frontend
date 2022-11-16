import React from 'react';
import './Store.scss';

const Store = () => {
  return (
    <div className="Store">
      <div className="Store-leftbody">
        <div className="Store-leftbody-body">
          <img alt="사람이미지" src="/images/Store/person-standing.png" />
        </div>
        <div className="Store-leftbody-bodys">
          <button className="eyes">눈</button>
          <button className="intestine">소화기관</button>
          <button className="liver">간</button>
          <button className="joint">관절</button>
        </div>
      </div>
      <div className="Store-productmenu">
        <h2>베스트 상품</h2>
        <ul className="Store-productmenu-drugbox">
          <li className="Store-productmenu-drug1">
            <img alt="1번약" src="/images/Store/eyecualone.jpeg" />
            <div className="text-area">
              <img alt="눈" src="/images/Store/eye-care.png" />
              <h3>
                <em>[큐알론]</em> 큐알론 점안액 0.3%
              </h3>
              <p>
                <em>50%</em> 15,000원
                <strike>30,000원</strike>
              </p>
            </div>
          </li>
          <li className="Store-productmenu-drug2">
            <img alt="2번약" src="/images/Store/milk.jpeg" />
            <div className="text-area">
              <img alt="간" src="/images/Store/liver.png" />
              <h3>
                <em>[칸톱]</em> 밀크씨슬
              </h3>
              <p>
                <em>50%</em> 35,000원
                <strike>70,000원</strike>
              </p>
            </div>
          </li>
          <li className="Store-productmenu-drug3">
            <img alt="3번약" src="/images/Store/pow.jpeg" />
            <div className="text-area">
              <img
                alt="에너지"
                src="/images/Store/free-icon-energy-drink-7108391.png"
              />
              <h3>
                <em>[익스트림]</em> 블랙마카
              </h3>
              <p>34,900원</p>
            </div>
          </li>
          <li className="Store-productmenu-drug4">
            <img alt="4번약" src="/images/Store/immune.jpeg" />
            <div className="text-area">
              <img
                alt="면역"
                src="/images/Store/free-icon-immune-system-2865526.png"
              />
              <h3>
                <em>[닥터아돌]</em> 프로폴리스 아연C
              </h3>
              <p>46,000원</p>
            </div>
          </li>
          <li className="Store-productmenu-drug5">
            <img alt="5번약" src="/images/Store/eyerute.jpeg" />
            <div className="text-area">
              <img alt="눈" src="/images/Store/eye-care.png" />
              <h3>
                <em>[보령]</em> 눈 편한 루테인
              </h3>
              <p>
                <em>22%</em> 35,000원
                <strike>45,000원</strike>
              </p>
            </div>
          </li>
          <li className="Store-productmenu-drug6">
            <img alt="6번약" src="/images/Store/omegha.jpeg" />
            <div className="text-area">
              <img alt="뇌" src="/images/Store/free-icon-brain-1006254.png" />
              <h3>
                <em>[GC녹십자]</em> 알티지오메가3 맥스
              </h3>
              <p>
                <em>10%</em> 18,900원
                <strike>21,000원</strike>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Store;
