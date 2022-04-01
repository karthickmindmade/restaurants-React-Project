import registeredUserReducer from "./users/reducers";
import authReducer from "./Auth/AuthReducer";
import CakesReducer from './cake/reducers'
const reducers = { 
    registeredUserReducer,
    CakesReducer,
    authReducer
};


export default reducers;