import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItemSummary from '../cart-item-summary/cart-item-summary.component';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
//import CustomButton from '../custom-button/custom-button.component';
import CheckoutButton from '../../components/checkout-button/checkout-button.component';
//import { placeOrder } from '../../redux/shop/shop.actions';
import {
  OrderSummaryContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  PlaceOrderButtonContainer,
  OrderSummaryTitle,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  OrderSummaryContainerFields,
} from './order-summary.styles';

//const OrderSummary = ({ cartItems, history, dispatch }) => (
const OrderSummary = ({ cartItems, total }) => (
  <OrderSummaryContainer>
    <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
    <OrderSummaryContainerFields>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Units</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Total</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItemSummary key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <PlaceOrderButtonContainer>
        <CheckoutButton
          type='button'
          isPlaceOrder
        >
          Place Order
        </CheckoutButton>
      </PlaceOrderButtonContainer>
    </OrderSummaryContainerFields>
  </OrderSummaryContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default withRouter(connect(mapStateToProps)(OrderSummary));
