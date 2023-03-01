import {addFavoriteProduct, removeFavoriteProduct} from "./event";
import {$favoriteProducts} from "./store";
import {setToLocalStorage} from "../../utils/utils";

$favoriteProducts.on(addFavoriteProduct, (favoriteProducts, payload) => {
    const product = favoriteProducts.find(item => item.alias === payload.alias);

    if (!product) {
        const newFavoriteArr = [...favoriteProducts, {...payload, isFavorite: true}];
        setToLocalStorage('favorite', newFavoriteArr);

        return newFavoriteArr;
    }
});

$favoriteProducts.on(removeFavoriteProduct, (favoriteProducts, payload) => {
    const product = favoriteProducts.find(item => item.alias === payload.alias);

    if (!!product) {
        const newFavoriteArr = favoriteProducts.filter(item => item.alias !== product.alias);
        setToLocalStorage('favorite', newFavoriteArr);

        return newFavoriteArr;
    }
});
