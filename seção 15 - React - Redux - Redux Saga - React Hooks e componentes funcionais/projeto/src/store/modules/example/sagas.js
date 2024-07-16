import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import { toast } from 'react-toastify';

const requisicao = () => new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 600);
});

function* exampleRequest() {
    try {
        yield call(requisicao); //é como se fosse o await do async await
        yield put(actions.clicaBotaoSuccess());
    } catch(e) {
        toast.error('Deu erro');
        yield put(actions.clicaBotaoFailure());
    }
}

export default all([
    takeLatest(types.BOTAO_REQUEST, exampleRequest),
]);