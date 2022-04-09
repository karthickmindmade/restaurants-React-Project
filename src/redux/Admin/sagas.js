import { takeEvery, call, all, put } from "redux-saga/effects";
import axios from "axios";
import actions from "./actions";
import { API_URL } from "../../utils/constants";

const Adminsaga = function* () {

    yield all([
        yield takeEvery(actions.GET_ADMIN_DETAILS, updateAdminDetails),
    ]);
};

const updateAdminDetails = function* (data) {

    const { payload } = data;
    try {
        const result = yield call(() =>
            axios.put(
              `${API_URL}/admin/update/${payload.adminId}`, payload.updateAdmin
            )
        );
        
        if(result.data.statusCode === 200){
           window.location.reload(); 
        }else{
            window.location.reload(false);
        }
          
    } catch (err) {
        return err;
    }
}

export default Adminsaga;