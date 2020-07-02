import ShopActionTypes from './shop.types';

export const createOrderStart = (customer, cart, user) => ({
  type: ShopActionTypes.CREATE_ORDER_START,
  customer: customer, 
  cart: cart,
  user: user
});

export const createOrderSuccess = order => ({
  type: ShopActionTypes.CREATE_ORDER_SUCCESS,
  payload: order
});

export const createOrderFailure = errorMessage => ({
  type: ShopActionTypes.CREATE_ORDER_FAILURE,
  payload: errorMessage
});
