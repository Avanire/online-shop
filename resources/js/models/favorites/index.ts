import {$favoriteProducts} from './store';
import {addFavoriteProduct, removeFavoriteProduct} from "./event";

export const modelFavorite = {
    addFavoriteProduct,
    removeFavoriteProduct,
    $favoriteProducts
};
