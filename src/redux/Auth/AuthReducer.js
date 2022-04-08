import actions from "./actions";

const initState  =  {
  isAuthenticated:false,
  user:{},
  route:"",
  token : '',
  result : {}
};

const authReducer = (state = initState, action) => {
    
    switch (action.type) {
        case actions.UPDATE_AUTH_DETAILS: {
            return {
                ...state,
               isAuthenticated:action.payload.isAuthenticated,
               user:action.payload,
               route:action.payload.route,
               token : action.payload.token,
               result : action.payload.result
            };
        }
        default: return state;
    }
}

export default authReducer;