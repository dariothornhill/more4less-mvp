export default (state = [], action) => {
    switch (action.type) {
        case "REQUEST_AUTH":
            return state;
        case "RECEIVE_AUTH":
            return state;
        case "AUTH_SUCCESS":
            return Object.assign({}, state, { user: action.user});
        case "AUTH_FAIL":
            return Object.assign({}, state, { user:{ failures: state.user.failures + 1 }});
        default:
            return state;
    }
}