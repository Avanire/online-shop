import React, {FC, useCallback} from "react";
import {useStore} from "effector-react";
import {modelCart} from "../../models/cart";
import {RUB, STORAGE_URL} from "../../utils/constans";
import {Link} from "@inertiajs/react";
import minus from "../../../images/Remove.svg";
import plus from "../../../images/Add.svg";
import {IProduct} from "../../utils/types";
import CartTotalPrice from "../cart-total-price/cart-total-price";

const Cart: FC = () => {
    const products = useStore(modelCart.$cart);

    const handleRemove = useCallback((product: IProduct) => {
        modelCart.removeFromCart(product);
    }, []);

    const handleAdd = useCallback((product: IProduct) => {
        modelCart.addToCart(product);
    }, []);

    const handleClearCart = useCallback(() => {
        modelCart.clearCart();
    }, []);

    const handleRemoveProduct = useCallback((product: IProduct) => {
        modelCart.removeOneProduct(product);
    }, []);

    const sortCartProduct = (a: IProduct, b: IProduct) => {
        return ('' + a.name).localeCompare(b.name);
    }

    return (
        <section className={`container mx-auto mb-28`}>
            <div className={`mb-8 flex items-baseline gap-x-4`}>
                <h1 className={`text-3xl font-semibold`}>Моя корзина</h1>
                <button className={`text-mainPurple text-sm`} onClick={handleClearCart}>Очистить корзину</button>
            </div>
            <div className={`grid grid-cols-3 gap-x-8`}>
                <div className={`col-span-2 space-y-6`}>
                    {products.length > 0 ? products.sort(sortCartProduct).map(product => (
                        <section key={product.id}
                                 className={`flex p-6 justify-between rounded-xl border borderColor gap-x-8`}>
                            <div className={`p-2 bg-bgColor rounded-lg basis-20 h-min`}>
                                <img src={`${STORAGE_URL}${product.image}`} alt={product.name}/>
                            </div>
                            <div className={`basis-[21.25rem] flex-auto`}>
                                <Link href={`/catalog/${product.category[0].alias}/${product.alias}`}
                                      className={`font-semibold text-headerColor mb-2 block`}>{product.name}</Link>
                                <div className={`text-productLightGray space-x-4 mb-4 text-sm`}>
                                    <span>Вес: {product.weight} {product.weight_unit}</span>
                                    <span>Артикул: {product.article}</span>
                                </div>
                                <span className={`text-mainPurple text-sm px-2 py-1.5 bg-purpleBg rounded-full`}>+8 бонусов</span>
                            </div>
                            <div className={`basis-[7.5rem]`}>
                                <div
                                    className={`font-semibold text-xl mb-1`}>{Intl.NumberFormat().format(product.price)} {RUB}</div>
                                {product.old_price ? (
                                    <div className={`space-x-2 mb-3`}>
                                        <span
                                            className={`text-productSalesColor text-sm font-medium line-through`}>{Intl.NumberFormat().format(product.old_price)} {RUB}</span>
                                        <span
                                            className={`text-productTipsColor text-sm font-medium mb-3`}>-{Math.round(100 - (100 * (product.price / product.old_price)))}%</span>
                                    </div>
                                ) : null}
                                <div className={`flex border-mainPurple border-2 rounded-xl px-3.5 py-2 gap-x-4`}>
                                    <img src={minus} alt="" onClick={() => handleRemove(product)}
                                         className={`cursor-pointer`}/>
                                    <span className={`w-6 text-center`}>{product.count}</span>
                                    <img src={plus} alt="" onClick={() => handleAdd(product)}
                                         className={`cursor-pointer`}/>
                                </div>
                            </div>
                            <div className={`basis-6 space-y-5`}>
                                <svg className={`cursor-pointer`} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.42602 12.3115L12 19.8854L19.574 12.3115C21.4753 10.4101 21.4753 7.32738 19.574 5.42602C17.6726 3.52466 14.5899 3.52466 12.6885 5.42602L12 6.11456L11.3115 5.42602C9.4101 3.52466 6.32738 3.52466 4.42602 5.42602C2.52466 7.32738 2.52466 10.4101 4.42602 12.3115Z"
                                        stroke="#764AEF" strokeWidth="2" strokeLinejoin="round"/>
                                </svg>
                                <svg className={`cursor-pointer`} onClick={() => handleRemoveProduct(product)}
                                     width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 7H20" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path
                                        d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                                        stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                          stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </section>
                    )) : (<div className={`font-semibold text-xl`}>Корзина пуста</div>)}
                </div>
                <CartTotalPrice/>
            </div>
        </section>
    );
}

export default Cart;
