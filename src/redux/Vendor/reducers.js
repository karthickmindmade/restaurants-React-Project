import actions from "./actions";

const initialState = {
  vendorsList: [],
  addVendorStatus: '',
  vendorsDetails: [],
  updateVendorStatus: ''
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
    case actions.SET_SINGLE_VENDORS:
      return {
        ...state,
        vendorsDetails: action.payload.vendorsDetails
      }
    case actions.UPDATE_VENDOR_STATUS:
      return {
        ...state,
        updateVendorStatus: action.payload.updateVendorStatus
      }
    default:
      return state;
  }
};

export default VendorReducer;