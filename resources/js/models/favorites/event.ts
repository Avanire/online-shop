import {createEvent} from "effector";
import {IProduct} from "../../utils/types";

export const addFavoriteProduct = createEvent<IProduct>('ADD_FAVORITE_PRODUCT');
export const removeFavoriteProduct = createEvent<IProduct>('REMOVE_FAVORITE_PRODUCT');
