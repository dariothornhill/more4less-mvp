
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