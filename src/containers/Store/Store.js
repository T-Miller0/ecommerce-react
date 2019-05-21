import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import ProductList from '../../components/ProductList/ProductList';
import list from '../../products/products.json'

class Store extends Component {
  render () {
    return (
      <Aux>
        <ProductList products={list.products} />
      </Aux>
    );
  }
}

export default Store;
