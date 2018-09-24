import { Types } from "./actions";
const INITIAL_STATE = [];

const dealsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.REQUEST_PRODUCTS:
            return state;
        case Types.RECEIVE_PRODUCTS:
            return Object.assign(state, {products: action.products });
        default:
            return state;
    }
}


export default dealsReducer;