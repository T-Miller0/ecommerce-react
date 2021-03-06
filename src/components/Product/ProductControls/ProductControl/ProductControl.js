import React from 'react';

import classes from './ProductControl.css';

const productControl = (props) => (
  <div className={classes.ProductControl}>
    <h3>{props.product.title}</h3>
    <div>Category: {props.product.category}</div>
    <div>Price: {props.product.price.toFixed(2)}</div>
    <button className={classes.Less}
      onClick={props.removeFromCart}>Remove</button>
      <div>{(props.cartQuantity == null) ? null : <p>Quantity: {props.cartQuantity}</p>}</div>
    <button className={classes.More}
      onClick={props.addToCart}>{props.product.qty < 1 ? "Out Of Stock" : "Add"}</button>
  </div>
);

export default productControl;
