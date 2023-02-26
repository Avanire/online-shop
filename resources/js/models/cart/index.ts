import {addToCart, clearCart, removeFromCart, toggleCart, removeOneProduct, toggleCheckoutSuccess} from "./event";
import {$cart, $cartState, $cartTotalPrice, $cartTotalPriceWithoutSale, $cartTotalWeight, $checkoutModal} from "./store";

export const modelCart = {
    addToCart,
    clearCart,
    removeFromCart,
    removeOneProduct,
    $cart,
    toggleCart,
    toggleCheckoutSuccess,
    $cartState,
    $cartTotalPriceWithoutSale,
    $cartTotalPrice,
    $cartTotalWeight,
    $checkoutModal
}
