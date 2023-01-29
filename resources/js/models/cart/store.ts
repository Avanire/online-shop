import {createStore} from "effector";
import {IProduct} from "../../Utils/types";

export const $cart = createStore<Array<IProduct>>([]);
