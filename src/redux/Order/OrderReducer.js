import actions from "./actions";

const initState  =  {
  Order_list:[]
};

const OrderReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SET_ORDER_LIST: {
            return {
                ...state,
                Order_list:action.payload
                
            };
        }
        
        default: return state;
    }
}

export default OrderReducer;