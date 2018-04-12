import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from 'store/ducks/categories';

import { getCategories } from './categories';

export default function* rootSagareturn() {
  return yield all([
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
  ]);
}
