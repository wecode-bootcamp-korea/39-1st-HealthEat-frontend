import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDemonstration from './ProductDemonstration/ProductDemonstration';
import BuyBar from './BuyBar/BuyBar';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productData, setProductData] = useState([]);
  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://10.58.52.143:3000/products?id=${id}`, {
  //     method: 'GET',
  //   })
  //     .then(result => result.json())
  //     .then(data => setProductData(data.products[0]));
  // }, [id]);

  const id = 1;

  useEffect(() => {
    fetch(`/data/ProductDetail.json`, {
      method: 'GET',
    })
      .then(result => result.json())
      .then(data => setProductData(data[0]));
  }, [id]);

  console.log(productData);

  if (!productData.id) return null;

  return (
    <div className="product-detail">
      <ProductDemonstration productData={productData} />
      <BuyBar productData={productData} />
    </div>
  );
};

export default ProductDetail;
