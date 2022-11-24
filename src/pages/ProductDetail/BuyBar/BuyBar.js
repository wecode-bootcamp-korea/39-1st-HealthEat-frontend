import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const BuyBar = ({ productID, productData }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const { name, information, brand_name, price, discount_rate } = productData;

  useEffect(() => {
    setTotalPrice(parseInt(price) * quantity);
  }, [price, quantity]);

  if (totalPrice === 0) return null;

  const plusQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const minusQuantity = () => {
    if (quantity >= 2) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <>
      <section className="buy-bar-area" />

      <section className="buy-bar-content">
        <div className="product-name-brand">
          <span id="name">{name}</span>
          <span id="brand-name">{brand_name}</span>
        </div>
        <div className="product-price">
          <span className="price discounted-price">
            {`${Math.round(totalPrice * (1 - discount_rate)).toLocaleString(
              'ko-KR'
            )}원`}
          </span>
          <span className="price fixed-price">
            {`${Math.round(totalPrice * 1).toLocaleString('ko-KR')}원`}
          </span>
          <span className="price discount-rate">{`${
            discount_rate * 100
          }%`}</span>
        </div>
        <div className="product-info">
          <p>{information}</p>
        </div>
        <div className="product-select-quantity">
          <span>구매 수량</span>
          <FontAwesomeIcon
            className="handling-quantity-icons"
            icon={faMinusCircle}
            onClick={minusQuantity}
          />
          {quantity}
          <FontAwesomeIcon
            className="handling-quantity-icons"
            icon={faPlusCircle}
            onClick={plusQuantity}
          />
        </div>
        <div className="product-buy-button">
          <button
            className="like-btn btn"
            onClick={() => {
              fetch('http://10.58.52.143:3000/likes', {
                method: 'POST',
                header: {
                  Authorization: localStorage.getItem('token'),
                },
                body: productID,
              })
                .then(response => response.json())
                .then(data => {
                  if (data.message === 'success') {
                    alert('찜하기 성공');
                  } else {
                    alert('찜하기 실패');
                  }
                });
            }}
          >
            찜하기
          </button>
          <button
            className="buy-btn btn"
            onClick={() => {
              navigate('/cart');
            }}
          >
            구매하기
          </button>
        </div>
      </section>
    </>
  );
};

export default BuyBar;
