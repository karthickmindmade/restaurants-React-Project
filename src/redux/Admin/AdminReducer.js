import actions from "./actions";

const initState  =  {
  updateAdmin : [],
  adminId : '',
};

const adminReducer = (state = initState, action) => {
    
    switch (action.type) {
        case actions.SET_ADMIN_DETAILS: {
            return {
                ...state,
               updateAdmin : action.payload.updateAdmin,
                adminId : action.payload.adminId,
            };
        }
        default: return state;
    }
}

export default adminReducer;