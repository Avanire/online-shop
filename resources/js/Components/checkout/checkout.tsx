import React, {FC, useCallback, useState} from "react";
import {Link} from "@inertiajs/react";
import arrowLeft from '../../../images/fi_chevron-right.svg';
import CartTotalPrice from "../cart-total-price/cart-total-price";
import {InputEmail, InputPhone, InputText} from "../modal-input/modal-input";
import CheckoutDelivery from "../checkout-delivery/checkout-delivery";
import creditCard from '../../../images/credit-card.svg';
import money from '../../../images/money-bill-wave.svg';
import qr from '../../../images/free-icon-font-qrcode-8778055 1.svg';
import CheckoutPayment from "../cheackout-payment/checkout-payment";
import {useStore} from "effector-react";
import {modelCart} from "../../models/cart";
import {STORAGE_URL} from "../../utils/constans";

const Checkout: FC = () => {
    const products = useStore(modelCart.$cart);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [delivery, setDelivery] = useState('pickup');
    const [payment, setPayment] = useState('pickup');

    const handleChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }, []);

    const handleChangePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }, []);

    const handleChangeMail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handleChangeDelivery = (id: string) => {
        setDelivery(id);
    }

    const handleChangePayment = (id: string) => {
        setPayment(id);
    }

    return (
        <section className={`container mx-auto mb-28`}>
            <Link href={`/cart`} className={`inline-flex gap-x-2 mb-8 mt-6 text-linkColor hover:text-mainPurple`}><img src={arrowLeft} alt=""/>В
                корзину</Link>
            <h1 className={`text-3xl font-semibold mb-8`}>Оформление заказа</h1>
            <div className={`grid grid-cols-3 gap-x-8`}>
                <div className={`col-span-2`}>
                    <p className={`mb-16`}>Войдите или зарегистрируйтесь, чтобы получить 147 бонусa за этот заказ</p>
                    <h2 className={`font-medium text-2xl mb-6`}>Получатель</h2>
                    <div className={`grid grid-cols-2 gap-x-5 mb-16`}>
                        <InputText value={name}
                                   onChange={handleChangeName}
                                   name='Имя и фамилия получателя'
                                   required={true}
                        />
                        <InputPhone value={phone}
                                    onChange={handleChangePhone}
                                    name='Мобильный телефон'
                                    required={true}
                        />
                        <InputEmail value={email}
                                    onChange={handleChangeMail}
                                    required={true}
                        />
                    </div>
                    <h2 className={`font-medium text-2xl mb-6`}>Выберите способ получения</h2>
                    <div className={`flex justify-between gap-x-5 mb-16`}>
                        <CheckoutDelivery id='pickup'
                                          deliveryName='Самовывоз'
                                          deliveryDescription='Самовывоз из пункта выдачи бесплатно'
                                          defaultChecked={true}
                                          onChange={handleChangeDelivery}
                        />
                        <CheckoutDelivery id='curer'
                                          deliveryName='Курьерская доставка CanadaZoo.ru'
                                          deliveryDescription='от 1000 р. бесплатно'
                                          onChange={handleChangeDelivery}
                        />
                    </div>
                    <h2 className={`font-medium text-2xl mb-6`}>Способ оплаты</h2>
                    <div className={`space-y-4 mb-16`}>
                        <CheckoutPayment id='credit-card'
                                         name='Банковской картой'
                                         img={creditCard}
                                         defaultChecked={true}
                                         onChange={handleChangePayment}

                        />
                        <CheckoutPayment id='cash'
                                         name='Наличными при получении'
                                         img={money}
                                         onChange={handleChangePayment}
                        />
                        <CheckoutPayment id='qrCode'
                                         name='QR от Сбера'
                                         img={qr}
                                         onChange={handleChangePayment}
                        />
                    </div>
                    <div className={`flex items-baseline gap-x-5 mb-6`}>
                        <h2 className={`font-medium text-2xl`}>Товары в заказе</h2>
                        <Link href='/cart' className={`text-mainPurple`}>Изменить</Link>
                    </div>
                    <div className={`flex gap-x-4 flex-wrap`}>
                        {
                            products && products.map(item => (
                                <div key={item.id} className={`p-3 rounded-xl bg-bgColor relative`}>
                                    {item.count > 1 ? <span className={`absolute top-3 right-3 font-semibold text-sm text-white bg-mainPurple rounded-xl px-2 pb-1 pt-0.5`}>{item.count}</span> : null}
                                    <img src={`${STORAGE_URL}${item.image}`} alt={item.name} width={96} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <CartTotalPrice/>
            </div>
        </section>
    );
}

export default Checkout;
