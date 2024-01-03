import {put, call, takeLatest, delay} from 'redux-saga/effects';
import ApiCaller from '../../services/apiCaller';
import authTypes from '../types/authTypes';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* login(payload: any) {
  // this payload will be coming from actions
  try {
    // yield delay(2000);
    const response: ResponseGenerator = yield call(
      ApiCaller.Post,
      '/postssa',
      payload.payload,
    );
    if (response?.status === 201) {
      yield put({type: authTypes.LOGIN_SUCCESS, payload: response.data});
    } else if (response?.status !== 200 || response?.status !== 201) {
      yield put({type: authTypes.LOGIN_FAILURE, error: 'Something went wrong'});
    }
  } catch (error: any) {
    yield put({type: authTypes.LOGIN_FAILURE, error: 'SOmethbg'});
  }
}

export default login;
