import {addToCart, clearCart, removeFromCart, toggleCart, removeOneProduct} from "./event";
import {$cart, $cartState, $cartTotalPrice, $cartTotalPriceWithoutSale, $cartTotalWeight} from "./store";

export const modelCart = {
    addToCart,
    clearCart,
    removeFromCart,
    removeOneProduct,
    $cart,
    toggleCart,
    $cartState,
    $cartTotalPriceWithoutSale,
    $cartTotalPrice,
    $cartTotalWeight
}
