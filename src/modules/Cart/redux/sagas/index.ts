import {takeLatest, put} from 'redux-saga/effects';
import {invokeApi} from '@network';
import {setProducts, toggleLoader} from '../actions';
import {ActionTypes} from '../types';
import {ResponseTypes} from '../../interfaces';
function* getProductRequest() {
  try {
    yield put(toggleLoader(true));
    let requestObj = {
      url: 'https://my-json-server.typicode.com/benirvingplt/products/products',
      method: 'GET',
    };

    let data: ResponseTypes.productList = yield invokeApi(requestObj);
    yield put(setProducts(data));
    yield put(toggleLoader(false));
  } catch (e) {
    yield put(toggleLoader(false));
    console.log(e);
  }
}
export function* CartSagas() {
  yield takeLatest(ActionTypes.PRODUCTS_REQUEST, getProductRequest);
}
