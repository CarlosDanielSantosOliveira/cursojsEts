import { persistStore } from 'redux-persist';
import persistedReducers from './modules/reduxPersist';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import  createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedReducers(rootReducer), 
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;