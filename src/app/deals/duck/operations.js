import { Creators } from './actions';

const requestProducts = Creators.requestProducts;
const receiveProducts = Creators.requestProducts;

const fetchProducts = () => dispatch => {
    dispatch(requestProducts());
    console.log(dispatch);
    return fetch('http://localhost:3030/products')
        .then(res => res.json())
        .then(json => dispatch(receiveProducts(json)))
        .catch(() => {
            dispatch(receiveProducts([]));
        })
};
export default {
    requestProducts, receiveProducts, fetchProducts

};