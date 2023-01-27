import {FC, useEffect} from "react";
import Phone from "../phone/phone";
import {useStore} from "effector-react";
import {modelSetting} from "../../models/settings";
import {modelMenu} from "../../models/menu";
import FooterMenu from "../footer-menu/footer-menu";
// @ts-ignore
import styles from "./footer-top.module.css";
import {Link} from "@inertiajs/react";

const FooterTop: FC = () => {
    const email = useStore(modelSetting.$email);
    const workTime = useStore(modelSetting.$workTime);
    const categories = useStore(modelMenu.$categories);
    const address = useStore(modelSetting.$address);

    useEffect(() => {
        modelSetting.emailRequest('email');
        modelSetting.workTimeRequest('worktime');
        modelMenu.categoryRequest('categories');
    }, []);

    return (
        <section className={`flex mb-12`}>
            <div className={`basis-1/3`}>
                <Phone/>
                <div className={`mt-5 mb-3.5`}>{address}</div>
                <a href={`mailto:${email}`} className={`mb-3.5 inline-block`}>{email}</a>
                <div className={`mb-8`}>{workTime}</div>
                <button className={`py-3.5 px-6 rounded-xl text-white bg-[var(--main-purple)]`}>Заказать звонок</button>
            </div>
            <FooterMenu name='Каталог' extraClass='basis-1/5'>
                {categories.map(item => <Link key={item.id} href={`catalog/${item.url}`} className={`${styles.menuItem}`}>{item.title}</Link>)}
            </FooterMenu>
            <FooterMenu name='Покупателям' extraClass='basis-1/5'>
                <Link href='' className={`${styles.menuItem}`}>Акции</Link>
                <Link href='' className={`${styles.menuItem}`}>Бренды</Link>
                <Link href='' className={`${styles.menuItem}`}>Бонусная программа</Link>
                <Link href='' className={`${styles.menuItem}`}>Как купить</Link>
                <Link href='' className={`${styles.menuItem}`}>Доставка и оплата</Link>
                <Link href='' className={`${styles.menuItem}`}>Возврат товара</Link>
            </FooterMenu>
            <FooterMenu name='Сервисы' extraClass='basis-1/5'>
                <Link href='' className={`${styles.menuItem}`}>Подписка на доставку</Link>
                <Link href='' className={`${styles.menuItem}`}>Подбор корма</Link>
                <Link href='' className={`${styles.menuItem}`}>Сравнение кормов</Link>
                <Link href='' className={`${styles.menuItem}`}>Партнерская программа</Link>
                <Link href='' className={`${styles.menuItem}`}>Статьи</Link>
            </FooterMenu>
            <FooterMenu name='Компания' extraClass='basis-1/5'>
                <Link href='' className={`${styles.menuItem}`}>Новости</Link>
                <Link href='' className={`${styles.menuItem}`}>О нас</Link>
            </FooterMenu>
        </section>
    );
}

export default FooterTop;
