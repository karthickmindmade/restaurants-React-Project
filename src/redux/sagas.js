import { all } from "redux-saga/effects";
import registeredUserSaga from '../redux/users/sagas';
import AuthSaga from "./Auth/sagas";
import ForgotpasswordSaga from "./ForgotPassword/sagas";


export default function* rootSaga() {
    yield all([
        registeredUserSaga(),
        AuthSaga(),
        ForgotpasswordSaga()
  
    ]);
};