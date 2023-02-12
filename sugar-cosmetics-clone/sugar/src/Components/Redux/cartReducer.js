import { ADD_TO_CART } from "./actionTypes";

const initState = {
    cart: [],
    isError: false,
    isLoading: false,
};
export const cartReducer = (state = initState, { type, payload }) => {
    switch(type){
        case ADD_TO_CART :{
            return {
                ...state,
                cart:[...state.cart,payload]
            }
        }
        default:{
            return state;
        }
    }
};