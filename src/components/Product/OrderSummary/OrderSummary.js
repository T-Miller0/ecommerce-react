import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const productSummary = props.productsInCart
    .map(prd => {
      return <Aux key={prd.id}>
              <li>
                  <div>{prd.title}</div>
                  <div>Category: {prd.category}</div>
                  <div>£{prd.price}</div>
                  <div>Quantity: {prd.qty}</div>
                </li>
                <button onClick={props.reduceProductInCart}>
                {prd.qty > 1 ? "Reduce" : "Remove"} </button>
                <button onClick={props.increaseProductInCart}>Add</button>
              </Aux>
    })

  return(
    <Aux>
      <h3>Your Order</h3>
      <div>Order Total £{props.totalPrice}</div>
      <ul>
        {productSummary}
      </ul>
      <p>Continue to Checkout</p>
      <Button
        btnType="Danger"
        clicked={props.purchaseSummaryCancelled}>CANCEL</Button>
      <Button
        btnType="Success"
        clicked={props.purchaseSummaryContinue}>CONTINUE</Button>
    </Aux>
  )

};

export default orderSummary;
