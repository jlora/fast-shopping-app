import { createSelector } from 'reselect';

const selectorCustomers = state => state.customer;

export const selectorCustomer = createSelector(
  [selectorCustomers],
  customer => customer.customer
);

export const selectorIsCustomerFetching = createSelector(
  [selectorCustomer],
  customer => customer.isFetching
);

export const selectorOptionSelected = createSelector(
  [selectorCustomers],
  customer => customer.optionSelected
);

export const selectIsCustomerLoaded = createSelector(
  [selectorCustomers],
  customer => !!customer.customer
);
