const initialState = {
	list: [],
	isLoading: true,
	isSearchActive: false,
};

export default function(state = initialState, action) {
	if (action.type === "FETCH_LIST_SUCCESS") {
		return {
			...state,
			list: action.list,
		};
	}
	if (action.type === "LIST_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	if (action.type === "pressed") {
		return {
			...state,
			isSearchActive: true,
		}
	}
	if (action.type === "closed") {
		return {
			...state,
			isSearchActive: false,
		}
	}
	return state;
}
