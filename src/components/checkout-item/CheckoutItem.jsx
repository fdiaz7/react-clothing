import React from 'react';

import './checkout-item.styles.scss';

import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const clearItem = (item) => {
    dispatch(cartActions.clearItemFromCart(item));
  };

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => dispatch(cartActions.removeItem(cartItem))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div
          className='arrow'
          onClick={() => dispatch(cartActions.addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        <span>&#10005;</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
