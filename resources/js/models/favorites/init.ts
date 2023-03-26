import {addFavoriteProduct, removeFavoriteProduct} from "./event";
import {$favoriteProducts} from "./store";

$favoriteProducts.on(addFavoriteProduct, (favoriteProducts, payload) => {
    const product = favoriteProducts.find(item => item.alias === payload.alias);

    if (!product) {
        return [...favoriteProducts, {...payload, isFavorite: true}];
    }
});

$favoriteProducts.on(removeFavoriteProduct, (favoriteProducts, payload) => {
    const product = favoriteProducts.find(item => item.alias === payload.alias);

    if (!!product) {
        return favoriteProducts.filter(item => item.alias !== product.alias);
    }
});
