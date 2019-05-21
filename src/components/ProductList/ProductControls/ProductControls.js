import React from 'react';

import classes from './ProductControls.css';
import ProductControl from './ProductControl/ProductControl';

const productControls = (props) => (
  <div className={classes.ProductControls}>
    <ProductControl />
  </div>
)

export default productControls;
