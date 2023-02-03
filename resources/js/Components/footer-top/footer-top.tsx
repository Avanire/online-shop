import {FC} from "react";
import Phone from "../phone/phone";
import FooterMenu from "../footer-menu/footer-menu";
import styles from "./footer-top.module.css";
import {Link, usePage} from "@inertiajs/react";
import money from '../../../images/Group-2.webp';
import visa from '../../../images/Group-3.webp';
import mc from '../../../images/Group-4.webp';
import mir from '../../../images/Group-11.webp';

const FooterTop: FC = () => {
    const {address, email, workTime, categories} = usePage().props;

    return (
        <section className={`grid grid-cols-6 mb-12`}>
            <div className={`col-span-2`}>
                <div className={`mb-5 font-semibold text-lg`}><Phone/></div>
                <div className={`mb-3.5 text-gray`}>{address}</div>
                <a href={`mailto:${email}`} className={`mb-3.5 inline-block text-mainPurple`}>{email}</a>
                <div className={`mb-6 text-gray`}>{workTime}</div>
                <button className={`py-3.5 px-6 rounded-xl text-white bg-mainPurple mb-8`}>Заказать звонок</button>
                <div className={`flex space-x-5`}>
                    <img src={money} alt="" className={`object-contain`}/>
                    <img src={visa} alt="" className={`object-contain`}/>
                    <img src={mc} alt="" className={`object-contain`}/>
                    <img src={mir} alt="" className={`object-contain`}/>
                </div>
            </div>
            <FooterMenu name='Каталог'>
                {categories.map(item => <Link key={item.id} href={`catalog/${item.url}`}
                                              className={`${styles.menuItem}`}>{item.title}</Link>)}
            </FooterMenu>
            <FooterMenu name='Покупателям'>
                <Link href='' className={`${styles.menuItem}`}>Акции</Link>
                <Link href='' className={`${styles.menuItem}`}>Бренды</Link>
                <Link href='' className={`${styles.menuItem}`}>Бонусная программа</Link>
                <Link href='' className={`${styles.menuItem}`}>Как купить</Link>
                <Link href='' className={`${styles.menuItem}`}>Доставка и оплата</Link>
                <Link href='' className={`${styles.menuItem}`}>Возврат товара</Link>
            </FooterMenu>
            <FooterMenu name='Сервисы'>
                <Link href='' className={`${styles.menuItem}`}>Подписка на доставку</Link>
                <Link href='' className={`${styles.menuItem}`}>Подбор корма</Link>
                <Link href='' className={`${styles.menuItem}`}>Сравнение кормов</Link>
                <Link href='' className={`${styles.menuItem}`}>Партнерская программа</Link>
                <Link href='/articles' className={`${styles.menuItem}`}>Статьи</Link>
            </FooterMenu>
            <FooterMenu name='Компания'>
                <Link href='' className={`${styles.menuItem}`}>Новости</Link>
                <Link href='' className={`${styles.menuItem}`}>О нас</Link>
            </FooterMenu>
        </section>
    );
}

export default FooterTop;
