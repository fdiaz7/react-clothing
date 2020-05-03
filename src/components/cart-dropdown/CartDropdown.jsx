import React from 'react';
import './cart-dropdown.styles.scss';

import CustomBotton from '../custom-button/CustomButton';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomBotton>CHECKOUT</CustomBotton>
    </div>
  );
};

export default CartDropdown;
