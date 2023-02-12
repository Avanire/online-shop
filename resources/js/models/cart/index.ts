import {addToCart, clearCart, removeFromCart, toggleCart, removeOneProduct} from "./event";
import {$cart, $cartState} from "./store";

export const modelCart = {
    addToCart,
    clearCart,
    removeFromCart,
    removeOneProduct,
    $cart,
    toggleCart,
    $cartState
}
