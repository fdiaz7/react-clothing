import React from 'react';
import './checkout-page.styles.scss';

import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce(
    (accumulated, cartItem) => accumulated + cartItem.price * cartItem.quantity,
    0
  );

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Proce</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Nothing Here!</span>
      )}
      <div className='total'>
        <span>TOTAL: $ {total}</span>
      </div>
    </div>
  );
};

export default React.memo(CheckoutPage);
