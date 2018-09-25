import { filter, map, flatMap } from 'rxjs/operators';
import { Creators, Types } from './actions';

const {
  requestDeals, receiveDeals, requestProduct, receiveProduct,
} = Creators;

const fetchDeals = () => (dispatch) => {
  dispatch(requestDeals());
  console.log(dispatch);
  return fetch('http://localhost:3030/deals')
    .then(res => res.json())
    .then(deals => dispatch(receiveDeals(deals)))
    .catch((err) => {
      console.log(err);
      dispatch(receiveDeals([]));
    });
};

const fetchProduct = (productId) => (dispatch) => {
  dispatch(requestProduct());
  return fetch(`http://localhost:3030/products/${productId}`)
    .then(res => res.json())
    .then(product => dispatch(receiveProduct(product)))
    .catch((err) => {
      console.log(err);
      dispatch(receiveProduct([]));
    });
};

export const dealEpic = action$ => action$.pipe(
  filter(action => (action.type === Types.RECEIVE_DEALS)),
  (action) => { console.log("filtered:", action); return action },
  flatMap((action) => {
    console.log("Concat:", action.deals);
    return action.deals
  }),
  map(deal => {
    console.log('Mapping',deal.productId);
    return fetchProduct(deal.productId);
  }),
);

export default {
  requestDeals,
  receiveDeals,
  fetchDeals,
  fetchProduct,
  requestProduct,
};
