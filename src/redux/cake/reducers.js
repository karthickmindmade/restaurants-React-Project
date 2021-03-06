import actions from "./actions";

const initialState = {
  CakesList: [],
  addCakeStatus: "",
  CakeDetails: [],
  UpdatecakeStatus: ''
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
        addCakeStatus: action.payload.addCakeStatus
      }
    case actions.SET_SINGLE_CAKEDETAILS:
      return {
        ...state,
        CakeDetails: action.payload.CakeDetails
      }
    case actions.UPDATE_CAKES_STATUS:
      return {
        ...state,
        UpdatecakeStatus: action.payload.UpdatecakeStatus
      }
    default:
      return state;
  }
};

export default CakesReducer;