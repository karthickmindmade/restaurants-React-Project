import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions'
import { API_URL } from '../../utils/constants';

const CakeListSaga = function* () {
    yield all([
        yield takeEvery(actions.Add_CAKES, AddCake),
        yield takeEvery(actions.GET_ALL_CAKES, getAllCakes),
        yield takeEvery(actions.GET_SINGLE_CAKEDETAILS, getCakeDetails)
    ]);
};

const AddCake = function* (data) {
   
    // const userData={UserName:"admin",Password:"Admin432"}
    const {payload}=data;
    console.log(payload);
    try {
        const result = yield call(() =>
            axios.post(
                `${API_URL}/cake/new`, payload
            )
        );
        console.log(result.data)
        yield put({ type: actions.Add_CAKES_STATUS, payload: {addCakeStatus:result.data} });
    } catch (err) {
        console.log(err)
    }
}

const getAllCakes = function* () {
    try {
        const result = yield call(() =>
            axios.get(`https://cakey-database.vercel.app/api/cake/list`)
        );
        yield put({ type: actions.SET_ALL_CAKES, payload: result.data });
    } catch (err) {
        console.log(err)
    }
};

const getCakeDetails=function* (data){
    const {payload}=data;
    console.log(payload);
    try {
        const result = yield call(() =>
            axios.get(`https://cakey-database.vercel.app/api/cake/details/${payload}`)
        );
        yield put({ type: actions.SET_SINGLE_CAKEDETAILS, payload: {CakeDetails:result.data} });
    } catch (err) {
        console.log(err)
    }
}

export default CakeListSaga;