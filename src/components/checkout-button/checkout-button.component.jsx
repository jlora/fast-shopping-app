import React from 'react';

import { CheckOutButtonContainer } from './checkout-button.styles';

const CheckoutButton = ({ children, ...props }) => (
  <CheckOutButtonContainer {...props}>{children}</CheckOutButtonContainer>
);

export default CheckoutButton;
