import { takeEvery,call,put,all } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions'
import { API_URL } from '../../utils/constants';

const CakeListSaga = function* () {
    yield all([
        yield takeEvery(actions.GET_ALL_CAKES,getAllCakes)
    ]);
};

const getAllCakes = function* () {
    try{
        const result = yield call(()=>
            axios.get(`https://cakey-database.vercel.app/api/cake/list`)
        );
        yield put({type:actions.SET_ALL_CAKES,payload:result.data});
    }catch(err){
        console.log(err)
    }
};

export default CakeListSaga;