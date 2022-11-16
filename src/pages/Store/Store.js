import React from 'react';
import './Store.scss';

const Store = () => {
  return (
    <div className="Store">
      <div className="Store__leftbody">
        <div className="Store__leftbody__body">
          <img alt="사람이미지" src="/images/Store/person-standing.png" />
        </div>
        <div className="Store__leftbody__bodys lefteye">
          <img alt="왼쪽눈" src="/images/Store/eye (1).png" />
        </div>
        <div className="Store__leftbody__bodys righteye">
          <img alt="오른쪽눈" src="/images/ProductDetail/eye (1).png" />
        </div>
        <div className="Store__leftbody__bodys intestine">
          <img
            alt="장"
            src="/images/ProductDetail/free-icon-large-intestine-4615532.png"
          />
        </div>
        <div className="Store__leftbody__bodys liver">
          {/* <img
            alt="간"
            src="/images/ProductDetail/free-icon-liver-288228.png"
          /> */}
          <button className="liver">간</button>
        </div>
        <div className="Store__leftbody__bodys joint">
          <img
            alt="관절,뼈"
            src="/images/ProductDetail/free-icon-joint-4701886.png"
          />
        </div>
      </div>
      <div className="Store__productmenu">
        <div className="Store__productmenu__drug1">약1</div>
        <div className="Store__productmenu__drug2">약1</div>
        <div className="Store__productmenu__drug3">약1</div>
        <div className="Store__productmenu__drug4">약1</div>
      </div>
    </div>
  );
};

export default Store;
