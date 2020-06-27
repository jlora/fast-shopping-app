import React from 'react';

import CustomerInformation from '../../components/customer-information/customer-information.component';
import OrderSummary from '../../components/order-summary/order-summary.component';

import { CheckoutDetailContainer } from './checkout-detail.styles';

const CheckOutDetailPage = () => (
  <CheckoutDetailContainer>
    <CustomerInformation />
    <OrderSummary />
  </CheckoutDetailContainer>
);

export default CheckOutDetailPage;