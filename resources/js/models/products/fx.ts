import {createEffect} from "effector";
import {getProduct, getProducts, getProductsByCategory} from "../../Utils/api";

export const fetchProductFx = createEffect(getProducts);
export const fetchProductByCategoryFx = createEffect((params: string) => getProductsByCategory(params));
export const fetchSingleProductFx = createEffect((params: string) => getProduct(params));
