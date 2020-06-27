import CustomerActionTypes from './customer.types';

export const fetchCustomerStart = (email) => ({
  type: CustomerActionTypes.FETCH_CUSTOMER_START,
  payload: email
});

export const fetchCustomerSuccess = customerMap => ({
  type: CustomerActionTypes.FETCH_CUSTOMER_SUCCESS,
  payload: customerMap
});

export const fetchCustomerFailure = errorMessage => ({
  type: CustomerActionTypes.FETCH_CUSTOMER_FAILURE,
  payload: errorMessage
});
