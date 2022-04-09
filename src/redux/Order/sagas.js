import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import actions from "./actions";
import { API_URL } from '../../utils/constants';

const OrderListSaga = function* () {
    yield all([
        yield takeEvery(actions.GET_ORDER_LIST, getOrderList),
    ]);
};

const getOrderList = function* () {
   
    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/order/list`)
        );
        console.log("order-sagas",result.data)
        yield put({ type: actions.SET_ORDER_LIST, payload: result.data });
    } catch (err) {
        console.log(err)
    }
};
export default OrderListSaga;