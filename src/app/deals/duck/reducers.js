import { Types } from './actions';

const INITIAL_STATE = [];

const dealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.REQUEST_DEALS:
      return state;
    case Types.RECEIVE_DEALS:
      return Object.assign({}, state, { deals: action.deals });
    case Types.REQUEST_PRODUCT:
      return state;
    case Types.RECEIVE_PRODUCT:
      return Object.assign({}, state, {
        deals: state.deals.map((deal) => {
          let newDeal;
          if (deal.productId === action.product.id) {
            newDeal = Object.assign({}, deal, { product: action.product });
          }
          return (newDeal) ? newDeal : deal;
        }),
      });
    default:
      return state;
  }
};


export default dealsReducer;
