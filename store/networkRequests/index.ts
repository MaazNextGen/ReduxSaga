// sagas.ts
import {all, takeLatest} from 'redux-saga/effects';
import authTypes from '../types/authTypes';
import login from './authAsyncAction';

// ?? in this file we have to declare all the async api calling methods here

function* rootSaga() {
  try {
    yield all([takeLatest(authTypes.LOGIN, login)]);
  } catch (error) {
    console.warn(error);
  }
}

export default rootSaga;
