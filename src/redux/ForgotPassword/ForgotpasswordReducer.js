import actions from "./actions";

const initState  =  {
  Email : '',
  Password : '',
  Status : ''
};

const forgotpasswordReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.FORGOT_PASSWORD: {
            return {
                ...state,
                Email:action.payload.Email,
                Password : action.payload.Password,
                
            };
        }
        case actions.UPDATE_STATUS : {
            return {
                ...state,
                Status : action.payload
            };
        }
        default: return state;
    }
}

export default forgotpasswordReducer;