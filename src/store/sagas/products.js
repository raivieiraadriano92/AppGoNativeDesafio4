import api from 'services/api';
import { call, put, select } from 'redux-saga/effects';

import { Creators as ProductsActions } from 'store/ducks/products';

export function* getProducts() {
  try {
    const categories = yield select(state => state.categories);
    const { data } = yield call(api.get, `/category_products?id=${categories.categoryIdSelected}`);

    yield put(ProductsActions.getProductsSuccess(data[0].products));
  } catch (err) {
    yield put(ProductsActions.getProductsFailure('Erro ao buscar produtos da API'));
  }
}
