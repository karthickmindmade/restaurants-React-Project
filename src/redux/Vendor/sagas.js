import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../Vendor/actions';
import { API_URL } from '../../utils/constants';

const VendorListSaga = function* () {
    yield all([
        yield takeEvery(actions.GET_ALL_VENDORS, getAllVendors),
        yield takeEvery(actions.ADD_VENDORS, AddVendor),
        yield takeEvery(actions.GET_SINGLE_VENDORS, getVendorDetails),
        yield takeEvery(actions.UPDATE_VENDOR, UpdateVendor)
    ]);
};

const getAllVendors = function* () {
   
    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/vendors/list`)
        );
        yield put({ type: actions.SET_ALL_VENDORS, payload: result.data });
    } catch (err) {
        console.log(err)
    }
};


const AddVendor = function* (data) {
   
    // const userData={UserName:"admin",Password:"Admin432"}
    const {payload}=data;
    console.log(payload);
    try {
        const result = yield call(() =>
            axios.post(
                `${API_URL}/vendors/new`, payload
            )
        );
        console.log(result.data)
        yield put({ type: actions.ADD_VENDORS_STATUS, payload: {addVendorStatus:result.data} });
    } catch (err) {
        console.log(err)
    }
}

const getVendorDetails=function* (data){
    const {payload}=data;
    console.log(payload);
    try {
        const result = yield call(() =>
            axios.get(`${API_URL}/vendors/list/${payload}`)
        );
        console.log(result)
        yield put({ type: actions.SET_SINGLE_VENDORS, payload: {vendorsDetails:result.data[0]} });
    } catch (err) {
        console.log(err)
    }
}


const UpdateVendor=function*(data){
    const {payload}=data;
    console.log(payload);
    try {
        const result = yield call(() =>
            axios.put(`${API_URL}/vendors/update/${payload.reqParamid}`,payload.reqBody)
        );
        yield put({ type: actions.UPDATE_VENDOR_STATUS, payload: {updateVendorStatus:result.data} });
    } catch (err) {
        console.log(err)
    }
}
export default VendorListSaga;