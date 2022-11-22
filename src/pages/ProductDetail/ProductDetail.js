import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = () => {
  const params = useParams();
  return (
    <section className="detail">
      <h1>This is Detail Page</h1>
      <h2>path parameter = {params.id}</h2>
    </section>
  );
};

export default ProductDetail;

// const ProductDetail = () => {
//   return <div />;
// };

// export default ProductDetail;
