import {FC} from "react";

const Cart:FC = () => {
    return (
        <section className={`container mx-auto`}>
            <h1 className={`text-2xl font-semibold`}>Моя корзина</h1>
            <div className={`grid grid-cols-3`}>
                <div className={`col-span-2`}>
                    <button className={`text-mainPurple`}>Очистить корзину</button>
                    <section>
                        <div><img src="" alt=""/></div>
                        <div>
                            <div>Hill's Science Plan</div>
                            <div>
                                <span>10 кг</span>
                                <span>Артикул: 1005633</span>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="minus"/>
                            <span>12</span>
                            <img src="" alt="plus"/>
                        </div>
                        <div>
                            <div>1 485 ₽</div>
                            <div><span>-43%</span><span>2 485 ₽</span></div>
                            <div>+8 бонусов</div>
                        </div>
                        <div>
                            <img src="" alt="heart"/>
                            <img src="" alt="remove"/>
                        </div>
                    </section>
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
