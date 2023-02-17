import {createStore} from "effector";
import {IProduct} from "../../utils/types";
import {getLocalStorage} from "../../utils/utils";

const products: Array<IProduct> = getLocalStorage('cart');

const totalPriceWithoutSale = products.reduce((sum, item) => sum + ((item.old_price ? item.old_price : item.price) * item.count), 0);
const totalPrice = products.reduce((sum, item) => sum + (item.price * item.count), 0);
const totalWeight = products.reduce((sum, item) => sum + ((item.weight_unit === 'кг' ? item.weight : item.weight / 1000) * item.count), 0);

export const $cart = createStore<Array<IProduct>>( products || []);
export const $cartState = createStore<boolean>(false);
export const $cartTotalPriceWithoutSale = createStore<number>(totalPriceWithoutSale || 0);
export const $cartTotalPrice = createStore<number>(totalPrice || 0);
export const $cartTotalWeight = createStore<number>(totalWeight || 0)
