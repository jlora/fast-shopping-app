import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './collection.actions';

import CollectionActionTypes from './collection.types';
import apiCall from '../api';

export function* fetchCollectionsAsync() {
  try {
    console.log('ENTRO SAGA FETCH API CALL....');

    const filter = {
      "offset": 0,
      "limit": 100,
      "skip": 0,
      "fields": {
        "id": true,
        "title": true,
        "imageUrl": true,
        "linkUrl": true,
        "createdAt": true
      },
      "include": [{
        "relation": "collectionsProducts",
        "scope": {
          "offset": 0,
          "limit": 100,
          "skip": 0,
          "include": [{
            "relation": "product"
          }]
        }
      }]
    }

    const collections = yield call(apiCall, 'get', '/collections?filter='+ JSON.stringify(filter))
    console.log('RESULT SAGA FETCH:', collections);
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    CollectionActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* collectionSagas() {
  yield all([call(fetchCollectionsStart)]);
}
