import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  order: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.CREATE_ORDER_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        order: action.payload
      };
    case ShopActionTypes.CREATE_ORDER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
export default shopReducer;