import React, {FC} from "react";
import {useStore} from "effector-react";
import {modelCart} from "../../models/cart";
import {RUB, STORAGE_URL} from "../../utils/constans";
import {Link} from "@inertiajs/react";
import minus from "../../../images/Remove.svg";
import plus from "../../../images/Add.svg";
import {IProduct} from "../../utils/types";

const Cart: FC = () => {
    const products = useStore(modelCart.$cart);

    const handleRemove = (product: IProduct) => {
        modelCart.removeFromCart(product);
    }

    const handleAdd = (product: IProduct) => {
        modelCart.addToCart(product);
    }

    const sortCartProduct = (a: IProduct, b: IProduct) => {
        return ('' + a.name).localeCompare(b.name);
    }

    return (
        <section className={`container mx-auto`}>
            <div className={`mb-8 flex items-baseline gap-x-4`}>
                <h1 className={`text-3xl font-semibold`}>Моя корзина</h1>
                <button className={`text-mainPurple text-sm`}>Очистить корзину</button>
            </div>
            <div className={`grid grid-cols-3 gap-x-8`}>
                <div className={`col-span-2 space-y-6`}>
                    {products.length > 0 && products.sort(sortCartProduct).map(product => (
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
                                <div className={`font-semibold text-xl mb-1`}>{product.price} {RUB}</div>
                                {product.old_price ? (
                                    <div className={`space-x-2 mb-3`}>
                                        <span
                                            className={`text-productSalesColor text-sm font-medium line-through`}>{product.old_price} {RUB}</span>
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
                            <div className={`basis-6`}>
                                <img src="" alt="heart"/>
                                <img src="" alt="remove"/>
                            </div>
                        </section>
                    ))}
                </div>
                <div>
                    <div>
                        <div>
                            <div><span>3 товара</span><span>17 600 ₽</span></div>
                            <div><span>Вес</span><span>11,4 кг</span></div>
                            <div><span>Скидка</span><span>−285 ₽</span></div>
                            <div><span>Самовывоз</span><span>бесплатно</span></div>
                        </div>
                        <div>
                            <span>Итого</span>
                            <span><span>17 485 ₽</span><span>+234 бонуса</span></span>
                        </div>
                        <input type="text" placeholder='Промокод'/>
                        <button>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
