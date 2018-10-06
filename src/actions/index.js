
import users from './users';

import fire from '../config/fire';

export default { users };

export const ping = () => ({ type: 'PING' });
export const requestProducts = () => ({ type: 'REQUEST_PRODUCTS' });
export const receiveProducts = products => ({ type: 'RECEIVE_PRODUCTS', products });
export const fetchProducts = () => (dispatch) => {
  dispatch(requestProducts());
  return fire.firestore().collection('products').get()
    .then((snapshot) => {
      const productsArray = [];
      snapshot.forEach((product) => {
        const item = product.data();
        item.id = product.id;
        productsArray.push(item);
      });
      return productsArray;
    })
    .then(productsArray => dispatch(receiveProducts(productsArray)))
    .catch((err) => {
    });
};
export const requestCategories = () => ({ type: 'REQUEST_CATEGORIES' });
export const receiveCategories = categories => ({ type: 'RECEIVE_CATEGORIES', categories });
export const fetchCategories = () => (dispatch) => {
  dispatch(requestCategories());
  return fetch('http://localhost:3030/categories')
    .then(res => res.json())
    .then(json => dispatch(receiveCategories(json)))
    .catch(() => {
      dispatch(receiveCategories([]));
    });
};
