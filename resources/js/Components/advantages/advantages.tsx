import React, {FC} from "react";
import Advantage from "../advantage/advantage";
// @ts-ignore
import fire from '../../../images/Fire.png';
// @ts-ignore
import star from '../../../images/Sparkles.png';
// @ts-ignore
import rocket from '../../../images/Rocket.png';
// @ts-ignore
import coin from '../../../images/Coin.png';

const Advantages:FC = () => {
    return (
        <section className={`flex flex-wrap gap-8 justify-between mb-16`}>
            <Advantage image={fire} name='Регулярные акции и скидки' description='товары недели по выгодным ценам' />
            <Advantage image={star} name='Гарантия качества' description='всегда свежие корма и лакомства' />
            <Advantage image={rocket} name='Удобная доставка' description='доставка в день заказа или в удобное для Вас время' />
            <Advantage image={coin} name='Бонусная программа' description='кэшбек до 5% на виртуальную карту клиента' />
        </section>
    );
}

export default Advantages;
