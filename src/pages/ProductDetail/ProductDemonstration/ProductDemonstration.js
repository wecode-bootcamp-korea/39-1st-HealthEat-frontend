import React from 'react';

const ProductDemonstration = ({ productData }) => {
  const {
    name,
    information,
    thumbnail,
    price,
    made_from,
    expiry_date,
    stock,
    discount_rate,
  } = productData;

  // console.log(thumbnail);
  // console.log(name);

  return (
    <section className="product-demonstration">
      <div className="product-image">
        <div>
          <img src={thumbnail} width="300" />
        </div>
      </div>

      <div className="product-description">
        <p>{information}</p>
      </div>

      <div className="product-review">
        <p>좋네요</p>
      </div>
    </section>
  );
};

export default ProductDemonstration;
