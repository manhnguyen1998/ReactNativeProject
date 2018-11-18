const initialState = {
    list: [],
    isLoading: true,
    isSearchActive: false,
};
export default function (state = initialState, action) {
    if (action.type === "FETCH_LIST_SUCCESS") {
        return Object.assign({}, state, { list: action.list });
    }
    if (action.type === "LIST_IS_LOADING") {
        return Object.assign({}, state, { isLoading: action.isLoading });
    }
    if (action.type === "pressed") {
        return Object.assign({}, state, { isSearchActive: true });
    }
    if (action.type === "closed") {
        return Object.assign({}, state, { isSearchActive: false });
    }
    return state;
}
//# sourceMappingURL=reducer.js.map