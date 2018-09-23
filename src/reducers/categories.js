export default (state = [], action) => {
    switch (action.type) {
        case "REQUEST_CATEGORIES":
            return state;
        case "RECEIVE_CATEGORIES":
            return action.categories;
        default:
            return state;
    }
}