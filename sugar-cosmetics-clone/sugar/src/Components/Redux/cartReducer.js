import { ADD_TO_CART } from "./actionTypes";

const initState = {
    cart: [],
    isError: false,
    isLoading: false,
};
const cartReducer = (state = initState, { type, payload }) => {
    if (type === ADD_TO_CART) {
        return {
            ...state,
            cart: [...state.cart, payload],
        };
    }

    return state;
};
