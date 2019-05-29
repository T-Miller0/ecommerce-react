import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import list from '../../products/products.json';
import ProductControls from '../../components/Product/ProductControls/ProductControls';

let USERCART = []

class Store extends Component {

  state = {
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

  increaseStock = (product) => {
    for (var i = 0; i < list.products.length; i++) {
    if (list.products[i].id === product.id) {
      list.products[i].qty = list.products[i].qty + 1;
      ;
    }
  }
}

  filterProduct = (product, list) => list.filter(cartProduct => cartProduct.title === product.title)[0]

   addToCartHandler = (product) => {

      if (product.qty >= 1 ) {

        if (this.filterProduct(product, USERCART) === undefined) {
          console.log('pushed')
          USERCART.push(...this.filterProduct(product, list.products),{...product, title: product.title, qty: 1, price: product.price})
        } else {
          for (var i = 0; i < USERCART.length; i++) {
            if (USERCART[i].title === product.title) {
              USERCART[i].qty = USERCART[i].qty + 1
            }
          }
        }

        this.reduceStock(product)
      }
      console.log(USERCART)
  }


   removeFromCartHandler = (product) => {
     if (this.filterProduct(product, USERCART) !== undefined) {
      this.increaseStock(product)

        for (var i = 0; i < USERCART.length; i++) {
          if (USERCART[i].id === product.id) {

            if (USERCART[i].qty === 1) {
              USERCART.splice(i, 1)
              console.log('spliced')
            } else {
              USERCART[i].qty = USERCART[i].qty - 1
              console.log('minused')
            }
          }
        }
      }
    console.log(USERCART)
  }

  render () {
    return (
      <Aux>
          <ProductControls
            products={list.products}
            addToCart={this.addToCartHandler}
            removeFromCart={this.removeFromCartHandler}/>
      </Aux>
    );
  }
}

export default Store;
