import {addToCart, clearCart, removeFromCart} from "./event";
import {$cart} from "./store";

export const modelCart = {
    addToCart,
    clearCart,
    removeFromCart,
    $cart
}