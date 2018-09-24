import fire from "../config/fire";

export const ping = () => ({ type: 'PING' });
export const requestProducts = () => ({type: "REQUEST_PRODUCTS"});
export const receiveProducts = products => ({type: "RECEIVE_PRODUCTS", products});
export const fetchProducts = () => dispatch => {
    dispatch(requestProducts());
    console.log(dispatch);
    return fetch('http://localhost:3030/products')
    .then(res => res.json())
    .then(json => dispatch(receiveProducts(json)))
    .catch(()=>{
        dispatch(receiveProducts([]));
    })
};
export const requestCategories = () => ({type: "REQUEST_CATEGORIES"});
export const receiveCategories = categories => ({type: "RECEIVE_CATEGORIES", categories});
export const fetchCategories = () => dispatch => {
    dispatch(requestCategories());
    return fetch('http://localhost:3030/categories')
    .then(res => res.json())
    .then(json => dispatch(receiveCategories(json)))
    .catch(()=>{
        dispatch(receiveCategories([]));
    })
};
export const requestLogin = () => ({type: "REQUEST_LOGIN"});
export const userLogin = (email, password) => dispatch => {
    dispatch(requestLogin());
    return fire
    .auth()
    .signInWithEmailAndPassword(email, password);
}