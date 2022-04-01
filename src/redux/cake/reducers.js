import actions from "./actions";

const initialState = {
    CakesList : [],
    addCakeStatus:""
};

const CakesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ALL_CAKES:
      return {
        ...state,
        CakesList: action.payload
        
      }
      case actions.Add_CAKES_STATUS:
        return {
          ...state,
          addCakeStatus:action.payload.addCakeStatus
        }
    default:
      return state;
  }
};

export default CakesReducer;