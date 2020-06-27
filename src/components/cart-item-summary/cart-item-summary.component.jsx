import React from 'react';

import {
  CartItemSummaryContainer,
  ItemCellContainer,
} from './cart-item-summary.styles';

const CartItemSummary = ({ item: { price, name, quantity } }) => (
  <CartItemSummaryContainer>
    <ItemCellContainer>{name}</ItemCellContainer>
    <ItemCellContainer>{price}</ItemCellContainer>
    <ItemCellContainer>{quantity}</ItemCellContainer>
    <ItemCellContainer>${quantity * price}</ItemCellContainer>
  </CartItemSummaryContainer>
);

export default CartItemSummary;
