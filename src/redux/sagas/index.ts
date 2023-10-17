// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';

// Imports: Redux Sagas
import {CartSagas} from '@Cart/redux/sagas';
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(CartSagas)]);
}
