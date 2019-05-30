import React from 'react';

import classes from './ProductControls.css';
import ProductControl from './ProductControl/ProductControl';

const productControls = (props) => (
  <div className={classes.ProductControls}>
  <p>Total Price: £{props.price}</p>
    {props.products.map(product => (
       <ProductControl
         key={product.id}
         product={product}
         addToCart={() => props.addToCart(product)}
         removeFromCart={() => props.removeFromCart(product)}/>
       ))}
       <button className={classes.OrderButton}
       disabled={!props.purchasable}
       onClick={props.orderSummary}>ORDER SUMMARY</button>
  </div>
);

export default productControls;
