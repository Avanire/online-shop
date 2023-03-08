import {createStore} from "effector";
import {IProduct} from "../../utils/types";

export const $searchProducts = createStore<Array<IProduct>>([]);
export const $searchRequestLoading = createStore<boolean>(false);
export const $searchRequestFailed = createStore<boolean>(false);
