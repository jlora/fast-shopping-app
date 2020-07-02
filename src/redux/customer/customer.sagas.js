import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  fetchCustomerSuccess,
  fetchCustomerFailure
} from './customer.actions';

import CustomerActionTypes from './customer.types';
import {apiCall} from '../api';

export function* fetchCustomerAsync(action) {
  try {
    const { email } = action.payload;
    const filter = {
      "fields": {
        "id": true,
        "fullName": true,
        "identifier": true,
        "address": true,
        "phone": true,
        "email": true,
        "createdAt": true
      },
      "where": {
        "email": email
      }
    }
    const customer = yield call(apiCall, 'GET', '/customers?filter='+ JSON.stringify(filter), null)
    yield put(fetchCustomerSuccess(customer?customer[0]:null));
  } catch (error) {
    yield put(fetchCustomerFailure(error.message));
  }
}

export function* fetchCustomerStart() {
  yield takeLatest(
    CustomerActionTypes.FETCH_CUSTOMER_START,
    fetchCustomerAsync
  );
}

export function* customerSagas() {
  yield all([call(fetchCustomerStart)]);
}
