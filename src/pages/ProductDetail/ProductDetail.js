import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="ProductDetail">
      <div className="ProductDetail__leftbody">
        <img alt="사람이미지" src="/images/ProductDetail/person-standing.png" />
        <img alt="눈" src="/images/ProductDetail/eye (1).png" />
        <img
          alt="장"
          src="/images/ProductDetail/free-icon-large-intestine-4615532.png"
        />
        <img alt="간" src="/images/ProductDetail/free-icon-liver-288228.png" />
        <img
          alt="관절,뼈"
          src="/images/ProductDetail/free-icon-joint-4710034.png"
        />
      </div>
      <div className="ProductDetail__productmenu">
        <div className="ProductDetail__productmenu__drug1">약1</div>
        <div className="ProductDetail__productmenu__drug2">약1</div>
        <div className="ProductDetail__productmenu__drug3">약1</div>
        <div className="ProductDetail__productmenu__drug4">약1</div>
      </div>
    </div>
  );
};

export default ProductDetail;
