import {createStore} from "effector";
import {IProduct} from "../../utils/types";
import {getLocalStorage} from "../../utils/utils";

const favoriteProducts = getLocalStorage('favorite');

export const $favoriteProducts = createStore<Array<IProduct>>(favoriteProducts || []);

$favoriteProducts.watch(s => console.log(s))
