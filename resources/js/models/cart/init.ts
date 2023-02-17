import {$cart, $cartState} from './store';
import {addToCart, clearCart, removeFromCart, toggleCart, removeOneProduct} from "./event";
import {setToLocalStorage} from "../../utils/utils";

$cart
    .on(addToCart, (cart, currentProduct) => {
        const product = cart.find(item => item.alias === currentProduct.alias);

        if (product) {
            const filteredCart = cart.filter(item => item.alias !== currentProduct.alias);
            const newCart = [...filteredCart, {...product, count: product.count + 1}];

            setToLocalStorage('cart', newCart);

            return newCart;
        } else {
            const newCart = [...cart, {...currentProduct, count: 1}];

            setToLocalStorage('cart', newCart);

            return newCart;
        }
    })
    .on(removeFromCart, (cart, currentProduct) => {
        const product = cart.find(item => item.alias === currentProduct.alias);

        if (product && product.count > 1) {
            const filteredCart = cart.filter(item => item.alias !== currentProduct.alias);
            const newCart = [...filteredCart, {...product, count: product.count - 1}];

            setToLocalStorage('cart', newCart);

            return newCart;
        } else {
            const newCart = [...cart].filter(item => currentProduct.alias !== item.alias);

            setToLocalStorage('cart', newCart);

            return newCart;
        }
    })
    .on(removeOneProduct, (cart, currentProduct) => {
        const newCart = [...cart].filter(item => item.alias !== currentProduct.alias);

        setToLocalStorage('cart', newCart);

        return newCart;
    })
    .on(clearCart, () => {
        return $cart.defaultState;
    });

$cartState
    .on(toggleCart, (_, result) => result);
