import { takeEvery, call, all, put } from "redux-saga/effects";
import axios from "axios";
import actions from "./actions";
import { API_URL } from "../../utils/constants";

const AuthSaga = function* () {
  yield all([
    yield takeEvery(actions.LOG_IN, workersLogIn),
    yield takeEvery(actions.LOG_OUT, workersLogOut)
  ]);
};


const workersLogIn = function* (data) {
  console.log(data);
  // const userData={UserName:"admin",Password:"Admin432"}
  const {payload}=data;
  console.log("Workers login");
  console.log(payload);
    try{
      console.log(JSON.stringify(payload));
     const result = yield call(() =>
      axios.post(
        `${API_URL}/login/validate`,payload
      )
    );
    console.log("post result");
    console.log(result.data);
    // const Result = JSON.parse(JSON.stringify(result.data));
    if(result.data.statusCode === 200) {
      if(result.data.type==='admin'){
        yield put({
          type: actions.UPDATE_AUTH_DETAILS,
          payload: {isAuthenticated:true,route:"/dashboard"}
        });
      }else if(result.data.type==="vendor"){
        yield put({
          type: actions.UPDATE_AUTH_DETAILS,
          payload: {isAuthenticated:true,route:"/vendordashboard"}
        });
      }
     
    } else {
      yield put({
        type: actions.UPDATE_AUTH_DETAILS,
        payload: {isAuthenticated:false}
      });
    }
  }
  catch (err) {
    yield put({
      type: actions.UPDATE_AUTH_DETAILS,
      
      payload: { isAuthenticated: false, }
    });
  }
}

const workersLogOut =function* (data){
  const {payload}=data;
 
    yield put({
      type: actions.UPDATE_AUTH_DETAILS,
      
      payload: { isAuthenticated: payload }
    });
  
}
export default AuthSaga;