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
}