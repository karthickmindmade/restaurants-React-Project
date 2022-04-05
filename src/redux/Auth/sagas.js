import { takeEvery, call, all, put } from "redux-saga/effects";
import axios from "axios";
import actions from "./actions";
import { API_URL } from "../../utils/constants";

const AuthSaga = function* () {

    yield all([
        yield takeEvery(actions.LOG_IN, workersLogIn),
        yield takeEvery(actions.VERIFY_TOKEN, verifyToken),
    ]);
};

const workersLogIn = function* (data) {

    const { payload } = data;
    try {
        const result = yield call(() =>
            axios.post(
              `${API_URL}/login/validate`, payload
            )
        );
        if (result.data.statusCode === 200) {
            localStorage.setItem('token', result.data.token);
            if (result.data.type === 'admin') {
                yield put({
                    type: actions.UPDATE_AUTH_DETAILS,
                    payload: { isAuthenticated: true, route: "/dashboard" }
                });
            } else if (result.data.type === "vendor") {
                yield put({
                    type: actions.UPDATE_AUTH_DETAILS,
                    payload: { isAuthenticated: true, route: "/vendordashboard" }
                });
            }
        } else {
            yield put({
                type: actions.UPDATE_AUTH_DETAILS,
                payload: { isAuthenticated: false }
            });
        }
    } catch (err) {
        yield put({
            type: actions.UPDATE_AUTH_DETAILS,
            payload: { isAuthenticated: false }
        });
    }
}

const verifyToken = function* (data) {

  const { payload } = data;
  try {
      const result = yield call(() =>
          axios.get(
            `${API_URL}/verifytoken/${payload}`
          )
      );
      if (result.data.statusCode === 200) {
          if (result.data.type === 'admin') {
              yield put({
                  type: actions.UPDATE_AUTH_DETAILS,
                  payload: { isAuthenticated: true, route: "/dashboard", token: result.data }
              });
      } else if (result.data.type === "vendor") {
          yield put({
              type: actions.UPDATE_AUTH_DETAILS,
              payload: { isAuthenticated: true, route: "/vendordashboard", token: result.data }
        });
      }
    } else {
      yield put({
        type: actions.UPDATE_AUTH_DETAILS,
        payload: { token: result.data, isAuthenticated: false, route: "/" }
      });
    }
  } catch (err) {
    yield put({
      type: actions.UPDATE_AUTH_DETAILS,
      payload: { token: 'Failed' }
    });
  }
}

export default AuthSaga;