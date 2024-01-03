import createSagaMiddleware from 'redux-saga';
import {configureStore, StoreEnhancer} from '@reduxjs/toolkit';
// offline
import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import combineReducers from './reducers';
import rootSaga from './networkRequests/index';

// const sagaMiddleware = createSagaMiddleware();

const sagaMiddleware = createSagaMiddleware({sagaMonitor: undefined});
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: combineReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(middleware),
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers({}).concat(offline(offlineConfig)),
});

sagaMiddleware.run(rootSaga);

export {store};
