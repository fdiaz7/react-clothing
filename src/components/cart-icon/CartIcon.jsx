import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';

import './cart-icon.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(cartActions.toggleCartHiden());
  };

  return (
    <div className='cart-icon' onClick={handleToggle}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
