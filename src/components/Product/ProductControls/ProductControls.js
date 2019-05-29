import React from 'react';

import classes from './ProductControls.css';
import ProductControl from './ProductControl/ProductControl';

const productControls = (props) => (
  <div className={classes.ProductControls}>
    {props.products.map(product => (
       <ProductControl
         key={product.id}
         product={product}
         addToCart={() => props.addToCart(product)}
         removeFromCart={() => props.removeFromCart(product)}/>
       ))}
  </div>
);

export default productControls;
