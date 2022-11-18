import { logDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import './Store.scss';

const Store = () => {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.140:3000/products/best', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(productData => {
        setDrugs(productData.products);
      });
  }, []);

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
          {drugs.map(product => (
            <li key={product.id} className="Store-productmenu-drug">
              <a href="/">
                <img alt="1번약" src={product.thumbnail} />
                <div className="text-area">
                  <img alt="눈" src={product.categoryImg} />
                  <h3>
                    <em>{product.brand_id}</em>
                    {product.name}
                  </h3>
                  <p>
                    <em>{Math.floor(product.discount_rate * 100)}%</em>
                    &nbsp;&nbsp;
                    {(
                      (1 - product.discount_rate) *
                      product.price
                    ).toLocaleString('ko-KR')}
                    원&nbsp;&nbsp;
                    <strike>
                      {Math.floor(product.price).toLocaleString('ko-KR')}원
                    </strike>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Store;
