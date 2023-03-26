import React, {FC, FormEvent, useCallback, useEffect, useState} from "react";
import {RUB, STORAGE_URL} from "../../utils/constans";
import {modelCart} from "../../models/cart";
import {IProduct, IProductComponent} from "../../utils/types";
import {Link} from "@inertiajs/react";
import delivery from '../../../images/ambulance.svg';
import payment from '../../../images/payment.svg';
import hitImage from '../../../images/hit.webp';
import newImage from '../../../images/new.webp';
import paymentBlock from '../../../images/payment-card.svg';
import styles from './product-card.module.css';
import uuid from "react-uuid";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import {modelFavorite} from "../../models/favorites";

const ProductCard: FC<IProductComponent> = ({product, unionProducts}) => {
    const images: Array<string> | null = JSON.parse(product.images);
    const [currentImage, setCurrentImage] = useState<string>(product.image);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [length, setLength] = useState<number>(0);
    const [favoriteActive, setFavoriteActive] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!!product) {
            modelCart.addToCart(product);
        }
    }

    const handleClickImage = (image: string) => {
        setCurrentImage(image);
    }

    const handleNextBtn = () => {
        if (currentIndex < (length - 5)) {
            setCurrentIndex(prevState => prevState + 1);
            images && setCurrentImage(images[currentIndex]);
        }
    }

    const handlePrevBtn = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
            images && setCurrentImage(images[currentIndex]);
        }
    }

    const handleAddFavorite = () => {
        setFavoriteActive(prevState => !prevState);

        if (favoriteActive) {
            modelFavorite.removeFavoriteProduct(product);
        } else {
            modelFavorite.addFavoriteProduct(product);
        }
    }

    useEffect(() => {
        if (images && images.length > 0) {
            setLength(images.length);
        }
    }, [images]);

    const sortPackage = useCallback((a: IProduct, b: IProduct) => {
        return a.weight - b.weight;
    }, []);

    return (
        <section className={`container mx-auto`}>
            <h1 className={`text-2xl font-medium text-headerColor mb-8`}>{product.name}</h1>
            <section className={`grid grid-cols-3 gap-x-10 mb-20`}>
                <div className={``}>
                    <div className={`bg-bgColor p-8 rounded-3xl relative mb-6`}>
                        <div className={`absolute top-5 left-5 flex gap-1`}>
                            {product.hit ? (<span><img src={hitImage} alt='хит'/></span>) : null}
                            {product.new_product ? (<span><img src={newImage} alt="новинка"/></span>) : null}
                        </div>
                        <img src={`${STORAGE_URL}${currentImage}`} alt="" className={`w-full object-cover`}/>
                    </div>
                    {images &&
                        <div className={`relative`}>
                            <div className={`w-[345px] overflow-hidden ml-10 `}>
                                <ChevronLeftIcon className={`absolute w-5 h-5 left-0 top-4`} onClick={handlePrevBtn}/>
                                <div
                                    className={`flex relative gap-x-2 transition ease-linear delay-250`}
                                    style={{transform: `translateX(-${currentIndex * (100 / 5)}%)`}}
                                >
                                    <div
                                        className={`w-[62px] p-2 bg-bgColor rounded-lg min-w-[62px] border-2 ${currentImage === product.image ? 'border-mainPurple' : 'border-bgColor'}`}
                                        onClick={() => handleClickImage(product.image)}
                                    >
                                        <img src={`${STORAGE_URL}${product.image}`} alt="" className={`w-full`}/>
                                    </div>
                                    {images.map(item =>
                                        <div key={uuid()}
                                             className={`w-[62px] p-2 bg-bgColor rounded-lg min-w-[62px] border-2 ${currentImage === item ? 'border-purple-500' : 'border-bgColor'}`}
                                             onClick={() => handleClickImage(item)}
                                        >
                                            <img src={`${STORAGE_URL}${item}`} alt="" className={`w-full`}/>
                                        </div>)}
                                </div>
                                <ChevronRightIcon className={`absolute w-5 h-5 right-16 top-4`}
                                                  onClick={handleNextBtn}/>
                            </div>
                        </div>
                    }
                </div>
                <div className={`flex flex-col gap-y-3`}>
                    <div>
                        <div className={`text-sm mb-3 text-textColor`}>Фасовка</div>
                        <div className={`flex gap-x-2`}>
                            {unionProducts.sort(sortPackage).map(item => <Link key={item.id} href={item.alias}
                                                                               className={`${product.article === item.article ? 'border-mainOrange' : 'border-borderColor'} text-headerColor text-sm py-2 px-3 rounded-lg border-2`}>{`${item.weight} ${item.weight_unit}`}</Link>)}
                        </div>
                    </div>
                    <div className={`text-headerColor font-normal`}>
                        <span className={`text-productLightGray mr-3`}>Артикул</span>
                        {product.article}
                    </div>
                    <div className={`text-headerColor font-normal`}>
                        <span className={`text-productLightGray mr-3`}>Бренд</span>
                        <Link href={`/brands/${product.brand.alias}`}>{product.brand.name}</Link>
                    </div>
                    <div className={`text-headerColor font-normal`}>
                        <span className={`text-productLightGray mr-3`}>Вес, в килограммах</span>
                        {product.weight}
                    </div>
                    <div className={`text-headerColor font-normal`}>
                        <span className={`text-productLightGray mr-3`}>Класс корма</span>
                        Премиум
                    </div>
                    <Link href="#" className={`text-mainPurple`}>Все характеристики</Link>
                </div>
                <div className={`flex flex-col gap-y-5`}>
                    <div className={`p-6 rounded-xl shadow-md`}>
                        {product.old_price ?
                            (<div className={`flex gap-x-3 items-center mb-3`}>
                                <span
                                    className={`px-1.5 py-1 text-white bg-productTipsColor font-bold rounded-md`}>-{Math.round(100 - (100 * (product.price / product.old_price)))}%</span>
                                <span
                                    className={`text-productSalesColor ${styles.oldPrice}`}>{Intl.NumberFormat().format(product.old_price)} {RUB}</span>
                            </div>) : null
                        }
                        <div className={`flex items-center space-x-3 mb-2`}>
                            <span className={`text-headerColor font-bold text-2xl`}>{Intl.NumberFormat().format(product.price)} {RUB}</span>
                            <span className={`text-mainPurple px-2 py-1 rounded-3xl bg-purpleBg`}>+58 бонусов</span>
                        </div>
                        <div className={`text-available pl-3 ${styles.available} mb-4`}>В наличии</div>
                        <div className={`flex items-center space-x-5`}>
                            <button className={`text-white py-3.5 px-20 bg-mainPurple rounded-xl font-semibold`}
                                    onClick={handleSubmit}>В корзину
                            </button>
                            <span className={`block p-3 rounded-xl bg-bgColor cursor-pointer`} onClick={handleAddFavorite}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill={favoriteActive ? '#764AEF' : 'none'} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.79486 13.3371L13 21.5422L21.2051 13.3371C23.265 11.2773 23.265 7.93767 21.2051 5.87786C19.1453 3.81806 15.8057 3.81806 13.7459 5.87786L13 6.62379L12.2541 5.87786C10.1943 3.81806 6.85466 3.81806 4.79486 5.87786C2.73505 7.93767 2.73505 11.2773 4.79486 13.3371Z" stroke="#764AEF" strokeWidth="2" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className={`py-5 px-6 rounded-xl bg-purpleBg`}>
                        <div className={`flex justify-between items-baseline mb-3.5`}>
                            <span className={`text-headerColor font-semibold`}>Доставка</span>
                            <span><img src={delivery} alt=""/></span>
                        </div>
                        <div className={`mb-1.5`}>Самовывоз завтра из 2 магазинов</div>
                        <div>Курьером от 3 до 5 дней</div>
                    </div>
                    <div className={`py-5 px-6 rounded-xl bg-orangeBg`}>
                        <div className={`flex justify-between items-baseline mb-3.5`}>
                            <span className={`text-headerColor font-semibold`}>Оплата</span>
                            <span><img src={payment} alt=""/></span>
                        </div>
                        <div className={`mb-1.5`}>Картой на сайте, QR от Сбера</div>
                        <div>Наличными курьеру</div>
                    </div>
                </div>
            </section>
            <nav className={`flex gap-x-16 py-5 px-8 bg-purpleBg rounded-lg mb-11`}>
                <div className={`text-mainPurple`}>Описание</div>
                <div>Оплата и доставка</div>
            </nav>
            {
                product.description &&
                (
                    <section>
                        <h3 className={`mb-5 text-2xl`}>Описание</h3>
                        <div dangerouslySetInnerHTML={{__html: product.description}} />
                    </section>
                )
            }
            <section className={`my-20`}>
                <h3 className={`mb-6 text-2xl`}>Способы оплаты</h3>
                <div className={`flex gap-x-7`}>
                    <div className={`rounded-xl border border-[#E5E7EB] p-6 max-w-[370px]`}>
                        <img src={paymentBlock} alt="" className={`mb-3.5`}/>
                        <div className={`text-headerColor mb-3.5 font-medium`}>Онлайн-оплата пластиковой картой</div>
                        <div className={`text-sm font-normal`}>Осуществляется по России. Воспользуйтесь калькулятором доставки ниже для вашего региона.</div>
                    </div>
                    <div className={`rounded-xl border border-[#E5E7EB] p-6 max-w-[370px]`}>
                        <img src={paymentBlock} alt="" className={`mb-3.5`}/>
                        <div className={`text-headerColor mb-3.5 font-medium`}>Оплата курьеру при доставке</div>
                        <div className={`text-sm font-normal`}>Осуществляется по России. Воспользуйтесь калькулятором доставки ниже для вашего региона.</div>
                    </div>
                    <div className={`rounded-xl border border-[#E5E7EB] p-6 max-w-[370px]`}>
                        <img src={paymentBlock} alt="" className={`mb-3.5`}/>
                        <div className={`text-headerColor mb-3.5 font-medium`}>QR от Сбера</div>
                        <div className={`text-sm font-normal`}>Осуществляется по России. Воспользуйтесь калькулятором доставки ниже для вашего региона.</div>
                    </div>
                </div>
                <h3 className={`mb-6 mt-20 text-2xl`}>Способы доставки</h3>
                <div className={`flex gap-x-7`}>
                    <div className={`rounded-xl border border-[#E5E7EB] p-6 max-w-[370px]`}>
                        <img src={paymentBlock} alt="" className={`mb-3.5`}/>
                        <div className={`text-headerColor mb-3.5 font-medium`}>Курьерская доставка</div>
                        <div className={`text-sm font-normal`}>Осуществляется по России. Воспользуйтесь калькулятором доставки ниже для вашего региона.</div>
                    </div>
                    <div className={`rounded-xl border border-[#E5E7EB] p-6 max-w-[370px]`}>
                        <img src={paymentBlock} alt="" className={`mb-3.5`}/>
                        <div className={`text-headerColor mb-3.5 font-medium`}>Получить из магазина</div>
                        <div className={`text-sm font-normal`}>Возможность получить товары в ближайшем магазине в день оформления заказа.</div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default ProductCard;
