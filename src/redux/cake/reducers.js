import actions from "./actions";

const initialState = {
    CakesList : []
};

const CakesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ALL_CAKES:
      return {
        ...state,
        CakesList: action.payload
      }
    default:
      return state;
  }
};

export default CakesReducer;