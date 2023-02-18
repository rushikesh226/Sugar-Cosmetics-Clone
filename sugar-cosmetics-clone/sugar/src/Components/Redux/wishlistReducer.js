import { ADD_TO_WISHLIST } from "./actionTypes";

const initState = {
  wishlist: [],
  isError: false,
  isLoading: false,
};
export const wishlistReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }
    default: {
      return state;
    }
  }
};
