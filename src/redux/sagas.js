import { all } from "redux-saga/effects";
import registeredUserSaga from '../redux/users/sagas';
import AuthSaga from "./Auth/sagas";
import CakeListSaga from "./cake/sagas"

export default function* rootSaga() {
    yield all([
        registeredUserSaga(),
        AuthSaga(),
        CakeListSaga()
  
    ]);
};