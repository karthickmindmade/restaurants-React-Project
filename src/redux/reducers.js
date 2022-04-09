import registeredUserReducer from "./users/reducers";
import authReducer from "./Auth/AuthReducer";
import CakesReducer from './cake/reducers'
import forgotpasswordReducer from "./ForgotPassword/ForgotpasswordReducer";
import VendorReducer from "./Vendor/reducers";
import OrderReducer from "./Order/OrderReducer";
import AdminReducer from "./Admin/AdminReducer";
const reducers = {
    registeredUserReducer,
    CakesReducer,
    authReducer,
    forgotpasswordReducer,
    VendorReducer,
    OrderReducer,
    AdminReducer
};


export default reducers;