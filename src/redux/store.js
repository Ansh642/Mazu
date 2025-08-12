import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer, { restoreAuth } from './slices/authSlice';
import rootSaga from './sagas';

let createSagaMiddleware;
try {
  createSagaMiddleware = require('redux-saga').default;
} 
catch (e) {
  
}
if (typeof createSagaMiddleware !== 'function') {
  try {
    const core = require('@redux-saga/core');
    createSagaMiddleware = core.default || core;
  } catch (e) {

  }
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
store.dispatch(restoreAuth());

export const AppDispatch = store.dispatch;
export const RootState = store.getState;

export default store;