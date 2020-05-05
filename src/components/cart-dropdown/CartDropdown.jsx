import React from 'react';
import './cart-dropdown.styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomBotton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import * as cartActions from '../../redux/cart/cart.actions';

const CartDropdown = ({ history }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispactch = useDispatch();
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Nothing Here!</span>
        )}
      </div>
      <CustomBotton
        onClick={() => {
          history.push('/checkout');
          dispactch(cartActions.toggleCartHiden());
        }}>
        CHECKOUT
      </CustomBotton>
    </div>
  );
};

export default withRouter(CartDropdown);
