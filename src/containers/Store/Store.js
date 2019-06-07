import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import list from '../../products/products.json';
import ProductControls from '../../components/Product/ProductControls/ProductControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Product/OrderSummary/OrderSummary';


export class Store extends Component {

  state = {
    userCart: [],
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

    if (this.state.userCart.length > 0) {
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

  filterProduct = (product, list) => list.filter(cartProduct => cartProduct.id === product.id)[0]

   addToCartHandler = (product) => {
      if (product.qty >= 1 ) {
        const oldState = this.state.userCart

        if (this.filterProduct(product, oldState) === undefined) {
          const productToCart = [...this.filterProduct(product, list.products),{...product, title: product.title, qty: 1, price: product.price}][0]

          this.setState({
            userCart: [...this.state.userCart, productToCart]
          },
             () => {this.updatePurchaseState()}
          )

          console.log('pushed')
        } else {
            console.log('add to quantity')

            for (var i = 0; i < this.state.userCart.length; i++) {
              if (this.state.userCart[i].title === product.title) {

              this.setState(Object.assign(this.state.userCart[i],
                {qty: this.state.userCart[i].qty + 1}));
          }
        }
      }
        const oldPrice = this.state.totalPrice;
        const priceAddition = product.price
        const newPrice = oldPrice + priceAddition
        this.setState( { totalPrice: newPrice } );
        this.reduceStock(product)
      } else {
        console.log("Out Of Stock")
      }
      console.log(this.state.userCart)
  }


   removeFromCartHandler = (product) => {
     if (this.filterProduct(product, this.state.userCart) !== undefined) {

        for (var i = 0; i < this.state.userCart.length; i++) {
          if (this.state.userCart[i].id === product.id) {

            if (this.state.userCart[i].qty === 1) {
              this.state.userCart.splice(i, 1)
              console.log('spliced')
            } else {
              this.setState(Object.assign(this.state.userCart[i],{qty: this.state.userCart[i].qty - 1}));
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
    console.log(this.state.userCart)
  }

  quantityOfProductInCart = (product) => {
    for (var i = 0; i < this.state.userCart.length; i++) {
      if (this.state.userCart[i].id === product.id) {
        return this.state.userCart[i].qty
      }
    }
  }

  render () {
    return (
      <Aux>
        <Modal
          show={this.state.purchaseSummary}
          modalClosed={this.purchaseSummaryCancelHandler}>
          <OrderSummary
            purchaseSummaryCancelled={this.purchaseSummaryCancelHandler}
            purchaseSummaryContinue={this.purchaseContinueHandler}
            productsInCart={this.state.userCart}
            totalPrice={this.state.totalPrice}/>
        </Modal>
          <ProductControls
            products={list.products}
            addToCart={this.addToCartHandler}
            cartQuantity={this.quantityOfProductInCart}
            removeFromCart={this.removeFromCartHandler}
            purchasable={this.state.purchasable}
            orderSummary={this.purchaseSummaryHandler}
            price={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default Store;
