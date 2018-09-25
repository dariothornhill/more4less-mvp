// actions.js
import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  requestDeals: ['deals'],
  receiveDeals: ['deals'],
  requestProduct: ['productId'],
  receiveProduct: ['product'],
});

export { Creators, Types };
