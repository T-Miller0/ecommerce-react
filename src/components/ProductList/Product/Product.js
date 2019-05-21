import React from 'react';

import ProductControls from '../ProductControls/ProductControls';

const product = (props) => {
  return (
    <div>
      <h3>{props.product.title}</h3>
      <div>Category: {props.product.category}</div>
      <div>Price: {props.product.price.toFixed(2)}</div>
      <ProductControls />
    </div>
  )
};

export default product;
