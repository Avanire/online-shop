import {createStore} from "effector";
import {IProduct} from "../../utils/types";

export const $cart = createStore<Array<IProduct>>([]);