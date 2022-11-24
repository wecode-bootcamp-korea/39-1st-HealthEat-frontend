import React, { useEffect, useState } from 'react';
import '../Cart/Cart.scss';

const MyPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.143:3000/likes', {
      headers: {
        authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(response => response.json())
      .then(productsData => {
        setProducts(productsData);
      });
  }, []);

  console.log(products);

  if (products[0] === null) {
    setProducts([1]);
  }

  return (
    <div className="mypage">
      <div className="mypageleft">
        <section className="myname" />
        <section className="myPoint" />
      </div>
      <div className="main">
        <div className="inserted">
          <div className="splitwrap">
            <section className="myheart">
              <h3 className="mytit">MY HEART</h3>
              <div className="heartwrap">
                <h4 className="hearttit">Products</h4>
                {products &&
                  products.map((product, i) =>
                    product.map(element => (
                      <div key={i} className="username">
                        <div>
                          <h3>{element.name}</h3>
                          <ul>
                            <li>
                              <p className="txt">
                                나의 하트 <em>0</em>
                              </p>
                              <p>{element.brand_name}</p>
                              <p>{element.name}</p>
                              <img alt="상품" src={element.thumbnail} />
                              <p>
                                {Math.floor(element.price).toLocaleString(
                                  'ko-KR'
                                )}
                                원
                              </p>
                              <p>{Math.floor(element.discount_rate * 100)}%</p>
                              <p className="txt">
                                나의 리뷰 <em>0</em>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))
                  )}
                <div className="orderlistnon" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
