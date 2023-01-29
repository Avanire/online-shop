import {createEvent} from "effector";
import {IProduct} from "../../utils/types";

export const addToCart = createEvent<IProduct>('ADD_TO_CART');
export const removeFromCart = createEvent<IProduct>('REMOVE_FROM_CART');
export const clearCart = createEvent('CLEAR_CART');
export const toggleCart = createEvent<boolean>('TOGGLE_CART');
