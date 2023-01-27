import {createEvent} from "effector";
import {IProduct} from "../../utils/types";

export const addToCart = createEvent<IProduct>();
export const removeFromCart = createEvent<IProduct>();
export const clearCart = createEvent();