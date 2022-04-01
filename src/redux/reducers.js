import registeredUserReducer from "./users/reducers";
import authReducer from "./Auth/AuthReducer";
import forgotpasswordReducer from "./ForgotPassword/ForgotpasswordReducer";




const reducers = { 
    registeredUserReducer,
    authReducer,
    forgotpasswordReducer
};


export default reducers;