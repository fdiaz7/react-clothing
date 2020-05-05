import React, { useEffect, useState, useMemo } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';

import './cart-icon.styles.scss';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart.actions';

const CartIcon = () => {
  const cantidad = useSelector((state) =>
    state.cart.cartItems.reduce(
      (accumulated, cartItem) => accumulated + cartItem.quantity,
      0
    )
  );

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(cartActions.toggleCartHiden());
  };
  console.log('am render');
  return (
    <div className='cart-icon' onClick={handleToggle}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cantidad}</span>
    </div>
  );
};

export default React.memo(CartIcon);
