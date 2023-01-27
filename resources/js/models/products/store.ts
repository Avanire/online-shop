import {createStore} from "effector";
import {ICategory, IProduct} from "../../utils/types";

export const $products = createStore<Array<IProduct>>([]);
export const $productIsLoading = createStore<boolean>(false);

export const $productByCategory = createStore<ICategory | null>(null);
export const $productByCategoryIsLoading = createStore<boolean>(false);

export const $singleProduct = createStore<IProduct | null>(null);
export const $singleProductIsLoading = createStore<boolean>(false);