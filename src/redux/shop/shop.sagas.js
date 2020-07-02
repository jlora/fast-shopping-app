import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  createOrderSuccess,
  createOrderFailure
} from './shop.actions';
import {
  clearCart
} from '../cart/cart.actions';
import { setCustomer } from '../customer/customer.actions';
import ShopActionTypes from './shop.types';
import {apiCallPost} from '../api';

export function* createOrderAsync(action) {
  try {
    const { customer, cart, user } = action;
    console.log('user', user);
    console.log('customer', customer);
    console.log('cart', cart);
    const body = {
      user,
      customer,
      cart
    }
    const result = yield call(apiCallPost, 'post', '/order-confirmed', body)
    console.log(result);
    yield put(createOrderSuccess(result.order));
    yield put(setCustomer(result.customer));
    yield put(clearCart());
  } catch (error) {
    yield put(createOrderFailure(error.message));
  }
}

export function* createOrderStart() {
  yield takeLatest(
    ShopActionTypes.CREATE_ORDER_START,
    createOrderAsync
  );
}

export function* shopSagas() {
  yield all([call(createOrderStart)]);
}
