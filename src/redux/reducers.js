import registeredUserReducer from "./users/reducers";
import authReducer from "./Auth/AuthReducer";
import CakesReducer from './cake/reducers'
import forgotpasswordReducer from "./ForgotPassword/ForgotpasswordReducer";
const reducers = { 
    registeredUserReducer,
    CakesReducer,
    authReducer,
    forgotpasswordReducer
};


export default reducers;