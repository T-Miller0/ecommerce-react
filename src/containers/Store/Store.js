import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import list from '../../products/products.json';
import ProductControls from '../../components/Product/ProductControls/ProductControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Product/OrderSummary/OrderSummary';

let USERCART = []

class Store extends Component {

  state = {
    totalPrice: 0,
    purchasable: false,
    purchaseSummary: false
  }

  purchaseSummaryHandler = () => {
    this.setState({purchaseSummary: true})
  }

  purchaseSummaryCancelHandler = () => {
    this.setState({purchaseSummary: false})
  }

  purchaseContinueHandler = () => {
    alert('You Purchased!');
  }

  updatePurchaseState = () => {
    if (USERCART.length > 0) {
      this.setState ({purchasable: true})
    } else {
      this.setState ({purchasable: false})
    }
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
        const oldPrice = this.state.totalPrice;
        const priceAddition = product.price
        const newPrice = oldPrice + priceAddition
        this.setState( { totalPrice: newPrice } );
        this.reduceStock(product)
        this.updatePurchaseState();
      } else {
        console.log("Out Of Stock")
      }
      console.log(USERCART)
  }


   removeFromCartHandler = (product) => {
     if (this.filterProduct(product, USERCART) !== undefined) {

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
      this.increaseStock(product)
      const oldPrice = this.state.totalPrice;
      const priceAddition = product.price
      const newPrice = oldPrice - priceAddition
      this.setState( { totalPrice: newPrice } );
      this.reduceStock(product)
      this.updatePurchaseState();
    }
    console.log(USERCART)
  }

  render () {
    return (
      <Aux>
        <Modal
          show={this.state.purchaseSummary}
          modalClosed={this.purchaseSummaryCancelHandler}>
          <OrderSummary
            reduceProductInCart={this.removeFromCartHandler}
            increaseProductInCart={this.addToCartHandler}
            purchaseSummaryCancelled={this.purchaseSummaryCancelHandler}
            purchaseSummaryContinue={this.purchaseContinueHandler}
            productsInCart={USERCART}
            totalPrice={this.state.totalPrice}/>
        </Modal>
          <ProductControls
            products={list.products}
            addToCart={this.addToCartHandler}
            removeFromCart={this.removeFromCartHandler}
            purchasable={this.state.purchasable}
            orderSummary={this.purchaseSummaryHandler}
            price={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default Store;
