import actions from "./actions";

const initialState = {
  vendorsList: [],
  addVendorStatus:''

};

const VendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ALL_VENDORS:
      return {
        ...state,
        vendorsList: action.payload
      }
      case actions.ADD_VENDORS_STATUS:
        return {
          ...state,
          addVendorStatus: action.payload.addVendorStatus
        }
    default:
      return state;
  }
};

export default VendorReducer;