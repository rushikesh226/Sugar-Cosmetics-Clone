import { ADD_TO_WISHLIST } from "./actionTypes";

const initState = {
    wishlist: [],
    isError: false,
    isLoading: false,
};
const wishlistReducer = (state = initState, { type, payload }) => {
    if (type === ADD_TO_WISHLIST) {
        return {
            ...state,
            wishlist: [...state.wishlist, payload],
        };
    }

    return state;
};
