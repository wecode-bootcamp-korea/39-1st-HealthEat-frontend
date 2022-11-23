import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import './Store.scss';

const Store = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    fetch(
      `http://10.58.52.143:3000/products?${searchParams.toString()}&sortMethod=id&offset=${Number(
        offset
      )}`,
      {
        // _limit=${limit}&_start=${offset}
        //fetch('http://10.58.52.143:3000/products/best', {
        method: 'GET',
      }
    )
      .then(response => response.json())
      .then(productData => {
        setDrugs(productData.products);
      });
  }, [searchParams.toString(), offset, limit]);

  // , offset, limit

  const movePage = pageNumber => {
    searchParams.set('offset', (pageNumber - 1) * 6);
    setSearchParams(searchParams);
  };

  const sendEyes = () => {
    setSearchParams({ category: 1 });
  };

  const sendIntestine = () => {
    setSearchParams({ category: 4 });
  };
  const sendLiver = () => {
    setSearchParams({ category: 2 });
  };
  const sendJoint = () => {
    setSearchParams({ category: 3 });
  };

  return (
    <div className="Store">
      <div className="Store-leftbody">
        <div className="Store-leftbody-body">
          <img alt="사람이미지" src="/images/Store/person-standing.png" />
        </div>
        <div className="Store-leftbody-bodys">
          <button onClick={sendEyes} className="eyes">
            눈
          </button>

          <button onClick={sendIntestine} className="intestine">
            소화기관
          </button>

          <button onClick={sendLiver} className="liver">
            간
          </button>

          <button onClick={sendJoint} className="joint">
            관절
          </button>
        </div>
      </div>
      <div className="Store-productmenu">
        <div className="product-order-list">
          <h2>베스트 상품</h2>
          {/* <p>높은 가격</p>
          <p> 낮은 가격</p> */}
        </div>
        <ul className="Store-productmenu-drugbox">
          {drugs.map(product => (
            <li key={product.id} className="Store-productmenu-drug">
              <Link key={product.id} to={`/detail/${product.id}`}>
                <img alt={`${product.id}번약`} src={product.thumbnail} />
                <div className="text-area">
                  <img alt="눈" src={product.category_icon} />
                  <h3>
                    <em>{product.brand_name}</em>
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
              </Link>
            </li>
          ))}
        </ul>
        <div>
          {/* <button onClick={() => movePage(1)}>1</button>
          <button onClick={() => movePage(2)}>2</button>
          <button onClick={() => movePage(3)}>3</button>
          <button onClick={() => movePage(4)}>4</button> */}
        </div>
      </div>
    </div>
  );
};

export default Store;
