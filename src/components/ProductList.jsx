// import React from 'react';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
