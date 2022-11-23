import React from 'react';

const BuyBar = ({ productData }) => {
  const {
    name,
    information,
    brand_id,
    // thumbnail,
    // price,
    // made_from,
    // expiry_date,
    // stock,
    // discount_rate,
  } = productData;

  // console.log(name);

  return (
    <>
      <section className="buy-bar-area">
        <span />
      </section>

      <section className="buy-bar-content">
        <div className="product-name-brand">
          <h1>{name}</h1>
          <h2>{brand_id}</h2>
        </div>
        <div className="product-info">
          <p>{information}</p>
        </div>
        <div className="product-price">{name}</div>
        <div className="product-buy-button">
          <form>
            <input placeholder="구매하기" type="button" />
          </form>
        </div>
      </section>
    </>
  );
};

export default BuyBar;
