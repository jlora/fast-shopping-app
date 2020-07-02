import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { collectionSagas } from './collection/collection.sagas';
import { customerSagas } from './customer/customer.sagas';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas), call(collectionSagas), call(customerSagas)]);
}
