import React from 'react';
import './Store.scss';

const Store = () => {
  return (
    <div className="Store">
      <div className="Store__leftbody">
        <div className="Store__leftbody__body">
          <img alt="사람이미지" src="/images/Store/person-standing.png" />
        </div>
        <div className="Store__leftbody__bodys">
          <button className="eyes">눈</button>
          <button className="intestine">소화기관</button>
          <button className="liver">간</button>
          <button className="joint">관절</button>
        </div>
      </div>
      <div className="Store__productmenu">
        <p>베스트 상품</p>
        <div className="Store__productmenu__drugbox">
          <div className="Store__productmenu__drug1">
            <img alt="1번약" src="/images/Store/eyecualone.jpeg" />
          </div>
          <div className="Store__productmenu__drug2">
            <img alt="2번약" src="/images/Store/milk.jpeg" />
          </div>
          <div className="Store__productmenu__drug3">
            <img alt="3번약" src="/images/Store/pow.jpeg" />
          </div>
          <div className="Store__productmenu__drug4">
            <img alt="4번약" src="/images/Store/immune.jpeg" />
          </div>
          <div className="Store__productmenu__drug5">
            <img alt="5번약" src="/images/Store/eyerute.jpeg" />
          </div>
          <div className="Store__productmenu__drug6">
            <img alt="6번약" src="/images/Store/omegha.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
