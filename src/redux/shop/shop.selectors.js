import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectOrder = createSelector(
  [selectShop],
  shop => shop.order
);

export const selectIsShopFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsShopLoaded = createSelector(
  [selectShop],
  shop => !!shop.order
);
