import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const BuyBar = ({ productData }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    name,
    information,
    brand_name,
    // thumbnail,
    price,
    // made_from,
    // expiry_date,
    // stock,
    discount_rate,
  } = productData;

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
          <h1>{name}</h1>
          <h3>{brand_name}</h3>
        </div>
        <div className="product-price">
          <span className="price discounted-price">
            {Math.round(totalPrice * (1 - discount_rate))}
          </span>
          <span className="price fixed-price">
            {Math.round(totalPrice * 1)}
          </span>
          <span className="price discount-rate">{`${
            discount_rate * 100
          }%`}</span>
        </div>
        <div className="product-info">
          <p>{information}</p>
        </div>
        <div className="product-select-quantity">
          <FontAwesomeIcon icon={faMinusCircle} onClick={minusQuantity} />
          {quantity}
          <FontAwesomeIcon icon={faPlusCircle} onClick={plusQuantity} />
        </div>
        <div className="product-buy-button">
          <button>구매하기</button>
        </div>
      </section>
    </>
  );
};

export default BuyBar;
