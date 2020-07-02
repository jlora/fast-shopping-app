import CustomerActionTypes from './customer.types';

const INITIAL_STATE = {
  customer: null,
  isFetching: false,
  errorMessage: undefined
};

const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CustomerActionTypes.FETCH_CUSTOMER_START:
      return {
        ...state,
        isFetching: true
      };
    case CustomerActionTypes.FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        customer: action.payload
      };
    case CustomerActionTypes.FETCH_CUSTOMER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case CustomerActionTypes.SET_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: action.payload
      };
    default:
      return state;
  }
};

export default customerReducer;
