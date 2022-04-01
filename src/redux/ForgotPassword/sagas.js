import { takeEvery, call, all, put } from "redux-saga/effects";
import axios from "axios";
import actions from "./actions";
import { API_URL } from "../../utils/constants";

const ForgotpasswordSaga = function* () {
  yield all([
    yield takeEvery(actions.FORGOT_PASSWORD, forgotPassword)
  ]);
};

const forgotPassword = function* (data) {

  const {payload}=data; 
    try{
     const result = yield call(() =>
      axios.put(`${API_URL}/forgotpassword/${payload.Email}`,{
        Password : payload.Password
      })
    );
    if(result.data.statusCode === 200) {
      yield put({
        type: actions.UPDATE_STATUS,
        payload:result.data.message
      });
    } else {
      yield put({
        type: actions.UPDATE_STATUS,
        payload:result.data.message
      });
    }
  }catch(err){
    yield put({
      type: actions.UPDATE_STATUS,
      payload:{ Status : 'Failed'}
    });
  }
}
 
export default ForgotpasswordSaga;