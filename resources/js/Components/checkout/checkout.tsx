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
import {modelModal} from "../../models/modal";
import mailSend from "../../../images/177-envelope-mail-send-lineal.gif";

const Checkout: FC = () => {
    const products = useStore(modelCart.$cart);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [delivery, setDelivery] = useState('pickup');
    const [payment, setPayment] = useState('cash');
    const [address, setAddress] = useState('');
    const [flat, setFlat] = useState('');
    const [entrance, setEntrance] = useState('');
    const [floor, setFloor] = useState('');

    const orderSend = useStore(modelModal.$modalCheckoutSuccess);
    const orderSending = useStore(modelModal.$modalCheckoutLoading);
    const orderSendFailed = useStore(modelModal.$modalCheckoutFailed);

    const handleChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }, []);

    const handleChangePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }, []);

    const handleChangeMail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handleChangeAddress = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }, []);

    const handleChangeFlat = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFlat(e.target.value);
    }, []);

    const handleChangeEntrance = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEntrance(e.target.value);
    }, []);

    const handleChangeFloor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFloor(e.target.value);
    }, []);

    const handleChangeDelivery = (id: string) => {
        setDelivery(id);
    }

    const handleChangePayment = (id: string) => {
        setPayment(id);
    }

    const handleCheckoutButton = () => {
        const payload = {
            name,
            phone,
            email,
            delivery,
            payment,
            'address': `${address} кв. ${flat} подъезд ${entrance} этаж ${floor}`,
            products
        }
        modelModal.sendCheckoutRequest(payload);
    }

    if (orderSending) {
        return (<div className={`text-center`}>
            <img src={mailSend} alt="" className={`mx-auto`}/>
            Отправляем...
        </div>);
    }

    if (orderSendFailed) {
        return (<div>Произошла ошибка. Попробуйте позже или свяжитесь с нами по телефону.</div>);
    }

    if (orderSend) {
        modelCart.toggleCheckoutSuccess(true);
    }

    return (
        <section className={`container mx-auto mb-28`}>
            <Link href={`/cart`} className={`inline-flex gap-x-2 mb-8 mt-6 text-linkColor hover:text-mainPurple`}><img
                src={arrowLeft} alt=""/>В
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
                                   type='name'
                        />
                        <InputPhone value={phone}
                                    onChange={handleChangePhone}
                                    name='Мобильный телефон'
                                    required={true}
                                    type='phone'
                        />
                        <InputEmail value={email}
                                    onChange={handleChangeMail}
                                    required={true}
                                    type='mail'
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
                    {
                        delivery === 'curer' ? (<section className={`mb-16`}>
                            <h2 className={`font-medium text-2xl mb-6`}>Адрес доставки</h2>
                            <div className={`flex flex-col mb-6`}>
                                <InputText value={address}
                                           onChange={handleChangeAddress}
                                           name='Адрес'
                                           required={true}
                                           type='address'
                                />
                            </div>
                            <div className={`flex justify-between gap-x-5`}>
                                <InputText value={flat}
                                           onChange={handleChangeFlat}
                                           name='Квартира'
                                           required={true}
                                           type='flat'
                                />
                                <InputText value={entrance}
                                           onChange={handleChangeEntrance}
                                           name='Подъезд'
                                           type='entrance'
                                />
                                <InputText value={floor}
                                           onChange={handleChangeFloor}
                                           name='Этаж'
                                           type='floor'
                                />
                            </div>
                        </section>) : null
                    }
                    <h2 className={`font-medium text-2xl mb-6`}>Способ оплаты</h2>
                    <div className={`space-y-4 mb-16`}>
                        <CheckoutPayment id='credit-card'
                                         name='Банковской картой'
                                         img={creditCard}
                                         onChange={handleChangePayment}

                        />
                        <CheckoutPayment id='cash'
                                         name='Наличными при получении'
                                         img={money}
                                         onChange={handleChangePayment}
                                         defaultChecked={true}
                        />
                        <CheckoutPayment id='qrCode'
                                         name='QR от Сбера'
                                         img={qr}
                                         onChange={handleChangePayment}
                        />
                    </div>
                    <div className={`flex items-baseline gap-x-5 mb-6`}>
                        <h2 className={`font-medium text-2xl`}>Товары в заказе</h2>
                        <Link href={`/cart`} className={`text-mainPurple`}>Изменить</Link>
                    </div>
                    <div className={`flex gap-x-4 flex-wrap`}>
                        {
                            products && products.map(item => (
                                <div key={item.id} className={`p-3 rounded-xl bg-bgColor relative`}>
                                    {item.count > 1 ? <span
                                        className={`absolute top-3 right-3 font-semibold text-sm text-white bg-mainPurple rounded-xl px-2 pb-1 pt-0.5`}>{item.count}</span> : null}
                                    <img src={`${STORAGE_URL}${item.image}`} alt={item.name} width={96}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <CartTotalPrice handleClickButton={handleCheckoutButton}/>
            </div>
        </section>
    );
}

export default Checkout;
