import { ADD_TO_CART, ADD_TO_WISHLIST } from "./actionTypes";

let addToCart = (product_item) => {
    return {
        type: ADD_TO_CART,
        payload: product_item,
    };
};

let addToWishlist = (wishlist_item) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: wishlist_item,
    };
};

export { addToCart, addToWishlist };
