import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as CategoriesActions } from 'store/ducks/categories';

export function* getCategories() {
  try {
    const { data } = yield call(api.get, '/categories');

    yield put(CategoriesActions.getCategoriesSuccess(data));
    yield put(CategoriesActions.selectCategory(data[0].id));
  } catch (err) {
    yield put(CategoriesActions.getCategoriesFailure('Erro ao buscar álbuns da API'));
  }
}
