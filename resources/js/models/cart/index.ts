import {addToCart, clearCart, removeFromCart, toggleCart} from "./event";
import {$cart, $cartState} from "./store";

export const modelCart = {
    addToCart,
    clearCart,
    removeFromCart,
    $cart,
    toggleCart,
    $cartState
}
