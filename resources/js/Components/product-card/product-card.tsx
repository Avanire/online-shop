import React, {FC} from "react";
import {STORAGE_URL} from "../../utils/constans";
import {modelCart} from "../../models/cart";
import {IProductComponent} from "../../utils/types";
import {Link, usePage} from "@inertiajs/react";
import HeaderButton from "../header-button/header-button";
//@ts-ignore
import Bookmark from "../../../images/Bookmark.svg";
//@ts-ignore
import delivery from '../../../images/ambulance.svg';
//@ts-ignore
import payment from '../../../images/payment.svg';

const ProductCard: FC<IProductComponent> = ({product, unionProducts}) => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!!product) {
            modelCart.addToCart(product);
        }
    }

    return (
        <section className={`container mx-auto`}>
            <h1 className={`text-2xl font-semibold text-textColor`}>{product.name}</h1>
            <div className={`grid grid-cols-3`}>
                <div className={``}>
                    <div className={``}><img src={`${STORAGE_URL}${product.image}`} alt=""/></div>
                </div>
                <div>
                    <div>{product.article}</div>
                    <div>
                        <div>Фасовка</div>
                        {unionProducts.map(item => <Link key={item.id} href={item.alias}
                                                         className={product.article === item.article ? 'active' : ''}>{`${item.weight} ${item.weight_unit}`}</Link>)}
                    </div>
                    <div>Характеристики</div>
                    <div>
                        <span>Бренд</span>
                        <span>{product.brand}</span>
                    </div>
                    <div>
                        <span>Страна-производитель</span>
                        <span>Италия</span>
                    </div>
                    <div>
                        <span>Класс корма</span>
                        <span>Премиум</span>
                    </div>
                    <Link href="#state">Показать все</Link>
                </div>
                <div>
                    <div>
                        <div>
                            {product.old_price ?
                                <div>-{Math.round(100 - (100 * (product.price / product.old_price)))}%</div> : null}
                        </div>
                        <div>{product.price}</div>
                        <div>
                            <button>В корзину</button>
                            <HeaderButton image={Bookmark} link='#' text='Избранное'/>
                        </div>
                        <div>
                            <div>
                                <span>В наличии</span>
                                <span>+58 бонусов</span>
                            </div>
                            <div>От 1 до 3 дней</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Доставка</span>
                            <span><img src={delivery} alt=""/></span>
                        </div>
                        <div>Самовывоз завтра из 2 магазинов</div>
                        <div>Курьером от 3 до 5 дней</div>
                    </div>
                    <div>
                        <div>
                            <span>Оплата</span>
                            <span><img src={payment} alt=""/></span>
                        </div>
                        <div>Картой на сайте, QR от Сбера</div>
                        <div>Наличными курьеру</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
