import React from 'react';

import Product from './Product/Product';

const productList = (props) => {
  return (
    props.products.map(product =>
       <Product product={product} key={product.id}/>
   )
  );
}

export default productList;
