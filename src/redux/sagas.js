import { all } from "redux-saga/effects";
import registeredUserSaga from '../redux/users/sagas';
import AuthSaga from "./Auth/sagas";
import CakeListSaga from "./cake/sagas"
import ForgotpasswordSaga from "./ForgotPassword/sagas";
import VendorListSaga from "./Vendor/sagas";
import OrderListSaga from "./Order/sagas";
export default function* rootSaga() {
    yield all([
        registeredUserSaga(),
        AuthSaga(),
        ForgotpasswordSaga(),
        CakeListSaga(),
        VendorListSaga(),
        OrderListSaga()
    ]);
};