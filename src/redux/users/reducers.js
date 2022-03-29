import actions from "./actions";

const initialState = {
    registeredUsers : []
};

const registeredUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ALL_USERS:
      return {
        ...state,
        registeredUsers: action.payload
      }
    default:
      return state;
  }
};

export default registeredUserReducer;