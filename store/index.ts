import createSagaMiddleware from 'redux-saga';
import {configureStore, applyMiddleware} from '@reduxjs/toolkit';

// offline
import {createOffline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import combineReducers from './reducers';
import rootSaga from './networkRequests/index';

// const sagaMiddleware = createSagaMiddleware();

const sagaMiddleware = createSagaMiddleware({sagaMonitor: undefined});
const middleware = [sagaMiddleware];
const middlewares = applyMiddleware(...middleware);

const store = configureStore({
  reducer: combineReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(middleware),
});

sagaMiddleware.run(rootSaga);

export {store};
