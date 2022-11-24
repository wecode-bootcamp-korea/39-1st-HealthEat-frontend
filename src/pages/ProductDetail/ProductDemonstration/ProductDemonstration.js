import React from 'react';

const ProductDemonstration = ({ productData }) => {
  const {
    // name,
    information,
    thumbnail,
    made_from,
    expiry_date,
    stock,
  } = productData;

  return (
    <section className="product-demonstration">
      <div className="product-image">
        <img src={thumbnail} />
      </div>

      <div className="product-description">
        <h2>제품 설명</h2>
        <p>{information}</p>
        <table className="product-description-table">
          <tbody>
            <tr>
              <td>생산지</td>
              <td>{made_from}</td>
            </tr>
            <tr>
              <td>유통기한</td>
              <td>{expiry_date}</td>
            </tr>
            <tr>
              <td>재고</td>
              <td>{stock}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="product-review">
        <h2>리뷰</h2>
        <ol className="product-review-list">
          <li>좋네요</li>
          <li>최고에요!</li>
          <li>가성비가 그리 좋진 않은 것 같아 아쉽네요.</li>
          <li>굿굿</li>
        </ol>
      </div>
    </section>
  );
};

export default ProductDemonstration;
