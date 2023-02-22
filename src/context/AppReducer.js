export default (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            };
        case "REMOVE":
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
            }
        default:
            return state;
    };
};