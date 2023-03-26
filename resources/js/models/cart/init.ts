import {
    $cart,
    $cartState,
    $cartTotalPrice,
    $cartTotalPriceWithoutSale,
    $cartTotalWeight,
    $checkoutModal
} from './store';
import {addToCart, clearCart, removeFromCart, removeOneProduct, toggleCart, toggleCheckoutSuccess} from "./event";
import {sample} from "effector";

$cart
    .on(addToCart, (cart, currentProduct) => {
        const product = cart.find(item => item.alias === currentProduct.alias);

        if (!!product) {
            const filteredCart = cart.filter(item => item.alias !== currentProduct.alias);
            return [...filteredCart, {...product, count: product.count + 1}];
        } else {
            return [...cart, {...currentProduct, count: 1}];
        }
    })
    .on(removeFromCart, (cart, currentProduct) => {
        const product = cart.find(item => item.alias === currentProduct.alias);

        if (product && product.count > 1) {
            const filteredCart = cart.filter(item => item.alias !== currentProduct.alias);
            return [...filteredCart, {...product, count: product.count - 1}];
        } else {
            return [...cart].filter(item => currentProduct.alias !== item.alias);
        }
    })
    .on(removeOneProduct, (cart, currentProduct) => {
        return [...cart].filter(item => item.alias !== currentProduct.alias);
    })
    .on(clearCart, () => {
        return $cart.defaultState;
    });

$cartState
    .on(toggleCart, (_, result) => result);

sample({
    clock: $cart,
    target: $cartTotalPriceWithoutSale,
    fn: (clockData) => (clockData.reduce((sum, item) => sum + ((item.old_price ? item.old_price : item.price) * item.count), 0))
});

sample({
    clock: $cart,
    target: $cartTotalPrice,
    fn: (clockData) => (clockData.reduce((sum, item) => sum + (item.price * item.count), 0))
});

sample({
    clock: $cart,
    target: $cartTotalWeight,
    fn: (clockData) => (clockData.reduce((sum, item) => sum + ((item.weight_unit === 'кг' ? item.weight : item.weight / 1000) * item.count), 0))
});

$checkoutModal.on(toggleCheckoutSuccess, (_, action) => action);
