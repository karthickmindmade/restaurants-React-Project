import { takeEvery,call,put,all } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
import { API_URL } from '../../utils/constants';

const rootSaga = function* () {
    yield all([
        yield takeEvery(actions.GET_ALL_USERS,getAllUsers)
    ]);
};

const getAllUsers = function* () {
    try{
        const result = yield call(()=>
            axios.get(`${API_URL}/api/users/list`)
        );
        yield put({type:actions.SET_ALL_USERS,payload:result.data});
    }catch(err){
        console.log(err)
    }
};

export default rootSaga;