import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CheckoutButton from '../../components/checkout-button/checkout-button.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  ShoppingCartContainerGrid,
  ShoppingCartContainerGridRow,
  ShoppingCartContainerGridRowItem,
  ShoppingCartContainerGridColumnLg1,
  ShoppingCartContainerGridColumnLg2,
  ShoppingCartContainerGridColumnLg4,
  ShoppingCartContainerGridColumnLg10,
  ShoppingCartContainerGridColumnLg12,
  CheckoutTitle,
  LinkButton,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total, history }) => (
  <ShoppingCartContainerGrid>
    <ShoppingCartContainerGridRow>
      <ShoppingCartContainerGridColumnLg2>
        <CheckoutTitle>Shopping Cart</CheckoutTitle>  
      </ShoppingCartContainerGridColumnLg2>
      <ShoppingCartContainerGridColumnLg10>
        <CheckoutButton onClick={() => history.push('/checkoutdetail')}>Check Out</CheckoutButton>
      </ShoppingCartContainerGridColumnLg10>
    </ShoppingCartContainerGridRow>
    <ShoppingCartContainerGridRowItem>
      <ShoppingCartContainerGridColumnLg2>Product</ShoppingCartContainerGridColumnLg2>
      <ShoppingCartContainerGridColumnLg4>Description</ShoppingCartContainerGridColumnLg4>
      <ShoppingCartContainerGridColumnLg2>Quantity</ShoppingCartContainerGridColumnLg2>
      <ShoppingCartContainerGridColumnLg2>Price</ShoppingCartContainerGridColumnLg2>
      <ShoppingCartContainerGridColumnLg1>Remove</ShoppingCartContainerGridColumnLg1>
    </ShoppingCartContainerGridRowItem>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <ShoppingCartContainerGridRow>
      <ShoppingCartContainerGridColumnLg2>
        <LinkButton onClick={() => history.push('/shop')}>Continue Shopping</LinkButton>  
      </ShoppingCartContainerGridColumnLg2>
      <ShoppingCartContainerGridColumnLg10>
        <CheckoutTitle>TOTAL: ${total}</CheckoutTitle>
      </ShoppingCartContainerGridColumnLg10>
    </ShoppingCartContainerGridRow>
    <ShoppingCartContainerGridRow>
      <ShoppingCartContainerGridColumnLg12>
        <CheckoutButton onClick={() => history.push('/checkoutdetail')}>Check Out</CheckoutButton>
      </ShoppingCartContainerGridColumnLg12>
    </ShoppingCartContainerGridRow>
  </ShoppingCartContainerGrid>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default withRouter(connect(mapStateToProps)(CheckoutPage));
