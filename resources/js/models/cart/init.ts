import {$cart, $cartState} from './store';
import {addToCart, clearCart, removeFromCart, toggleCart} from "./event";

$cart
    .on(addToCart, (cart, currentProduct) => {
        const product = cart.find(item => item.alias === currentProduct.alias);
        if (product) {
            product.count++;
        } else {
            return [...cart, {...currentProduct, count: 1}];
        }
    })
    .on(removeFromCart, (cart, currentProduct) => {
        return [...cart].filter(item => currentProduct.alias !== item.alias);
    })
    .on(clearCart, () => {
        return $cart.defaultState;
    });

$cartState
    .on(toggleCart, (_, result) => result);
