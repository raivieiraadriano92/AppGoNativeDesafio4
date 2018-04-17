import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from 'store/ducks/categories';
import { Types as ProductsTypes } from 'store/ducks/products';

import { getCategories, selectCategory } from './categories';
import { getProducts } from './products';

export default function* rootSagareturn() {
  return yield all([
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
    takeLatest(CategoriesTypes.SELECT, selectCategory),
    takeLatest(ProductsTypes.GET_REQUEST, getProducts),
  ]);
}
