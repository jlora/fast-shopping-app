import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import {
  ShoppingCartContainerGridRowItem,
  ShoppingCartContainerGridColumnLg1,
  ShoppingCartContainerGridColumnLg2,
  ShoppingCartContainerGridColumnLg4,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <ShoppingCartContainerGridRowItem>
      <ShoppingCartContainerGridColumnLg2>
        <img src={imageUrl} alt='item' />
      </ShoppingCartContainerGridColumnLg2>
      <ShoppingCartContainerGridColumnLg4>{name}</ShoppingCartContainerGridColumnLg4>
      <ShoppingCartContainerGridColumnLg2>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </ShoppingCartContainerGridColumnLg2>
      <ShoppingCartContainerGridColumnLg2>{price}</ShoppingCartContainerGridColumnLg2>
      <ShoppingCartContainerGridColumnLg1 onClick={() => clearItem(cartItem)}>
        <div>&#10005;</div>
      </ShoppingCartContainerGridColumnLg1>
    </ShoppingCartContainerGridRowItem>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
