import { select, takeEvery, takeLatest } from 'redux-saga/effects';
import { tokenActions, tokenSelectors } from '../token';

export function* setToken(): Generator {
  const token = (yield select(tokenSelectors.get)) as string;
  localStorage.setItem('token', token || null);
}

export function* clearToken(): Generator {
  yield localStorage.removeItem('token');
}

export function* tokenSaga() {
  yield takeEvery(tokenActions.clear().type, clearToken);
  yield takeLatest(tokenActions.generate.type, setToken);
}
