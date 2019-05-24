import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import list from '../../products/products.json';
import ProductControls from '../../components/Product/ProductControls/ProductControls';

class Store extends Component {

  state = {
    userCart: [],
    totalPrice: 0
  }


    reduceStock = (product) => {
      for (var i = 0; i < list.products.length; i++) {
      if (list.products[i].id === product.id) {
        list.products[i].qty = list.products[i].qty - 1;
        ;
      }
    }
  }


   addToCartHandler = (product) => {

     if (product.qty >= 1 ) {
        this.reduceStock(product)
        const addingProduct = this.state.userCart.push(product)
         }
   }


  //  removeFromCart = (product) => {
  //   userCart.splice(product)
  // }

  render () {
    return (
      <Aux>
          <ProductControls
            products={list.products}
            addToCart={this.addToCartHandler}/>
      </Aux>
    );
  }
}

export default Store;
