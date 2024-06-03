import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import  createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;