import {createEvent} from "effector";
import {IProduct} from "../../Utils/types";

export const addToCart = createEvent<IProduct>();
export const removeFromCart = createEvent<IProduct>();
export const clearCart = createEvent();
