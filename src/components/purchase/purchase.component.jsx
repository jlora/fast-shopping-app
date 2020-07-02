import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  selectOrder,
} from '../../redux/shop/shop.selectors';
import {
  selectorCustomer,
} from '../../redux/customer/customer.selectors';

import CheckoutButton from '../../components/checkout-button/checkout-button.component';

import {
  ShoppingCartContainerGrid,
  ShoppingCartContainerGridRow,
  ShoppingCartContainerGridColumnLg12,
} from './purchase.styles';

const PurchasePage = ({ order, customer, history }) => (
  <ShoppingCartContainerGrid>
    <ShoppingCartContainerGridRow>
      <ShoppingCartContainerGridColumnLg12><span className="spanpartypopper" role="img" aria-label="partypopper">🎉</span></ShoppingCartContainerGridColumnLg12>
      <ShoppingCartContainerGridColumnLg12><h2>Thanks for your purchase</h2></ShoppingCartContainerGridColumnLg12>
      <ShoppingCartContainerGridColumnLg12><h3><span>{customer?customer.fullName:''}</span> we have created your order <span>{order?order.id:''}</span>. Your items well be soon at your door</h3></ShoppingCartContainerGridColumnLg12>
      <ShoppingCartContainerGridColumnLg12><h3>Stay safe</h3></ShoppingCartContainerGridColumnLg12>
      <ShoppingCartContainerGridColumnLg12>
        <CheckoutButton onClick={() => history.push('/shop')}>Start Again</CheckoutButton>
      </ShoppingCartContainerGridColumnLg12>
    </ShoppingCartContainerGridRow>
  </ShoppingCartContainerGrid>
);

const mapStateToProps = createStructuredSelector({
  order: selectOrder,
  customer: selectorCustomer
});

export default withRouter(connect(mapStateToProps)(PurchasePage));
