import React from 'react';

import classes from './ProductControl.css';

const productControl = (props) => (
  <div className={classes.ProductControl}>
    <h3>{props.product.title}</h3>
    <div>Category: {props.product.category}</div>
    <div>Price: {props.product.price.toFixed(2)}</div>
    <button className={classes.Less}>Remove</button>
    <button className={classes.More}
      onClick={props.addToCart}>Add</button>
  </div>
);

export default productControl;
