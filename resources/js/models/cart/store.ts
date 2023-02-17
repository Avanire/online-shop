import {createStore} from "effector";
import {IProduct} from "../../utils/types";
import {getLocalStorage} from "../../utils/utils";

export const $cart = createStore<Array<IProduct>>( getLocalStorage('cart') || []);
export const $cartState = createStore<boolean>(false);
