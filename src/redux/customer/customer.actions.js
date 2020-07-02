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

export const setCustomer = customer => ({
  type: CustomerActionTypes.SET_CUSTOMER_SUCCESS,
  payload: customer
});

const getNewCustomer = (name, value, customer) => {
  customer = customer ? customer: customer = {};
  customer[name] = value
  return customer;
}

export const updateCustomerByNameValue = (name, value, customer) => ({
  type: CustomerActionTypes.UPDATE_CUSTOMER_BY_NAME_VALUE,
  payload: getNewCustomer(name, value, customer)
});

export const setOptionSelected = option => ({
  type: CustomerActionTypes.SET_CUSTOMER_OPTION_SELECTED,
  payload: option
});
