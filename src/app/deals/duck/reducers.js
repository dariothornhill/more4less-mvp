import { Types } from './actions';

const INITIAL_STATE = [];

const dealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.REQUEST_DEALS:
      return state;
    case Types.RECEIVE_DEALS:
      console.log(action.deals);
      return Object.assign({}, state, { deals: action.deals });
    case Types.REQUEST_PRODUCT:
      return state;
    case Types.RECEIVE_PRODUCT:
      const deals = state.deals.map(deal => {
        if (deal.productId === action.product.id) {
          deal.product = action.product;
        }
        return deal;
      });
      return Object.assign({}, state, { deals });
    default:
      return state;
  }
};


export default dealsReducer;
