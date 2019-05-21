import React from 'react';

import classes from './ProductControl.css';

const productControl = (props) => (
  <div className={classes.ProductControl}>
    <div className={classes.Label}>{props.product}</div>
    <button className={classes.Less}>Remove</button>
    <button className={classes.More}>Add</button>
  </div>
)

export default productControl;
