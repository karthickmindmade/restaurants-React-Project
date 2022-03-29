import { all } from "redux-saga/effects";
import registeredUserSaga from '../redux/users/sagas';


export default function* rootSaga() {
    yield all([
        registeredUserSaga(),
  
    ]);
};