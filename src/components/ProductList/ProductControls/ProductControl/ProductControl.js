import React from 'react';

import classes from './ProductControl.css';

const productControl = (props) => (
  <div className{classes.ProductControl}>
    <div className={classes.Label}>{props.product}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
)

export default productControl;
