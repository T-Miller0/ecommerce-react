import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
  const productSummary = props.productsInCart
    .map(prd => {
      return <li key={prd.id}>
                <div>{prd.title}</div>
                <div>Category: {prd.category}</div>
                <div>£{prd.price}</div>
                <div>Quantity: {prd.qty}</div>
              </li>
    })

  return(
    <Aux>
      <h3>Your Order</h3>
      <div>Order Total £{props.totalPrice}</div>
      <ul>
        {productSummary}
      </ul>
      <p>Continue to Checkout</p>
    </Aux>
  )

};

export default orderSummary;
