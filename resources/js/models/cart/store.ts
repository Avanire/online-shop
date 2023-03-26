import {createStore} from "effector";
import {IProduct} from "../../utils/types";
import { persist } from 'effector-storage/local';

export const $cart = createStore<Array<IProduct>>( [], {name: 'cart'});
export const $cartState = createStore<boolean>(false);
export const $cartTotalPriceWithoutSale = createStore<number>(0);
export const $cartTotalPrice = createStore<number>(0);
export const $cartTotalWeight = createStore<number>( 0);

export const $checkoutModal = createStore<boolean>(false);

persist({
    store: $cart,
    serialize: data => JSON.stringify(data),
    deserialize: data => JSON.parse(data)
});
