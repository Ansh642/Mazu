import { call, put, takeLatest, all } from 'redux-saga/effects';
import { storage } from '../../utils/storage';
import { setUser, clearUser, login, logout, restoreAuth } from '../slices/authSlice';

function* restoreAuthWorker() {
  const storedUser = yield call(storage.getItem, storage.AUTH_USER_KEY);
  yield put(setUser(storedUser));
}

function* loginWorker(action) {
  const credentials = action.payload || {};
  const userPayload = { email: credentials?.email || '', token: 'dummy-token' };
  yield call(storage.setItem, storage.AUTH_USER_KEY, userPayload);
  yield put(setUser(userPayload));
}

function* logoutWorker() {
  yield call(storage.removeItem, storage.AUTH_USER_KEY);
  yield put(clearUser());
}

export function* authSaga() {
  yield all([
    takeLatest(restoreAuth.type, restoreAuthWorker),
    takeLatest(login.type, loginWorker),
    takeLatest(logout.type, logoutWorker),
  ]);
}


