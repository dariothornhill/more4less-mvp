export default (state = [], action) => {
    switch (action.type) {
        case "REQUEST_PRODUCTS":
            return state;
        case "RECEIVE_PRODUCTS":
            return Object.assign({}, state, { products: action.products});
        default:
            return state;
    }
}