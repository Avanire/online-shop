import React, {FC} from "react";
import ambulance from "../../../images/ambulance.svg";
import {RUB} from "../../utils/constans";
import Button from "../button/button";
import styles from "../cart/cart.module.css";
import {useStore} from "effector-react";
import {modelCart} from "../../models/cart";
import {Link} from "@inertiajs/react";
import route from "ziggy-js";
import {useIsSsr} from "../../../hooks/useIsSsr";

export interface ICartTotalPrice {
    readonly handleClickButton?: () => void;
}

const CartTotalPrice: FC<ICartTotalPrice> = ({handleClickButton}) => {
    const products = useStore(modelCart.$cart);
    const totalPriceWithoutSale = products.reduce((sum, item) => sum + ((item.old_price ? item.old_price : item.price) * item.count), 0);
    const totalPrice = products.reduce((sum, item) => sum + (item.price * item.count), 0);
    const totalWeight = products.reduce((sum, item) => sum + ((item.weight_unit === 'кг' ? item.weight : item.weight / 1000) * item.count), 0);
    const isSsr = useIsSsr();

    return (
        <section>
            <div className={`p-6 bg-bgColor rounded-xl flex items-center justify-between mb-6`}>
                <div>Вы получаете бесплатную доставку на ваш заказ!</div>
                <img src={ambulance} alt=""/>
            </div>
            <div className={`p-6 border border-borderColor rounded-3xl sticky top-2`}>
                <div className={`space-y-3.5 pb-6 mb-6 border-b border-borderColor`}>
                    <div className={`flex justify-between`}><span className={`text-productLightGray`}>{products.length > 0 ? products.length : 0} товара(ов)</span><span className={`font-medium`}>{Intl.NumberFormat().format(totalPriceWithoutSale)} {RUB}</span></div>
                    <div className={`flex justify-between`}><span className={`text-productLightGray`}>Вес</span><span className={`font-medium`}>{totalWeight} кг</span></div>
                    <div className={`flex justify-between`}><span className={`text-productLightGray`}>Скидка</span><span className={`font-medium text-productTipsColor`}>−{totalPriceWithoutSale - totalPrice} {RUB}</span></div>
                    <div className={`flex justify-between`}><span className={`text-productLightGray`}>Самовывоз</span><span className={`font-medium`}>бесплатно</span></div>
                </div>
                <div className={`flex justify-between mb-6`}>
                    <span>Итого</span>
                    <span className={`flex flex-col`}>
                                <span className={`font-semibold text-2xl`}>{Intl.NumberFormat().format(totalPrice)} {RUB}</span>
                                <span className={`text-mainPurple text-sm`}>+234 бонуса</span>
                            </span>
                </div>
                <div className={`mb-6`}>
                    {
                        !isSsr && location.pathname === '/cart' ? (<Link href={route('checkout')} className={`rounded-xl bg-mainPurple text-white py-4 w-full inline-block text-center ${products.length <= 0 ? 'bg-[#D1D5DB] pointer-events-none' : ''}`}>Оформить заказ</Link>) : (<Button name='Оформить заказ' disabled={products.length <= 0} handleClick={handleClickButton} />)
                    }
                </div>
                {products.length > 0 ? <input type="text" placeholder='Промокод' className={`${styles.promoInput} relative w-full text-productLightGray pl-14 py-4 rounded-xl border border-borderColor`}/> : null}
            </div>
        </section>
    );
}

export default CartTotalPrice;
