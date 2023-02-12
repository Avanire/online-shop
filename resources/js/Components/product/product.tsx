import React, {FC, FormEvent, useState} from "react";
import {IProduct} from "../../utils/types";
import {RUB, STORAGE_URL} from "../../utils/constans";
import styles from './product.module.css';
import hitImage from '../../../images/hit.webp';
import newImage from '../../../images/new.webp';
import star from '../../../images/Feedbackstar.svg';
import paw from '../../../images/paws.svg';
import minus from '../../../images/Remove.svg';
import plus from '../../../images/Add.svg';
import {Link} from "@inertiajs/react";
import {modelCart} from "../../models/cart";

const Product: FC<IProduct> = (product) => {
    const [counter, setCounter] = useState<number>(0);

    const handleAddToCart = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        modelCart.addToCart(product);
        setCounter(prevState => prevState + 1);
    }

    const handleRemove = () => {
        if (counter > 0) {
            setCounter(prevState => prevState - 1);
            modelCart.removeFromCart(product);
        }
    }

    const handleAdd = () => {
        setCounter(prevState => prevState + 1);
        modelCart.addToCart(product);
    }

    return (
        <section className={`basis-52 flex-grow shrink-0 flex flex-col`}>
            <Link href={`/catalog/${product.categoryUrl}/${product.alias}`}
                  className={`${styles.imageBlock} block mb-4 hover:no-underline`}>
                <div className={`absolute top-2 left-2 flex gap-1`}>
                    {product.hit ? (<span><img src={hitImage} alt='хит'/></span>) : null}
                    {product.new_product ? (<span><img src={newImage} alt="новинка"/></span>) : null}
                </div>
                {product.old_price ? (
                    <span
                        className={`${styles.tips} absolute bottom-3 left-3`}>-{Math.round(100 - (100 * (product.price / product.old_price)))}%</span>) : null}
                <div className={`bg-bgColor p-5 rounded-xl`}>
                    <img src={`${STORAGE_URL}${product.image}`} alt={product.name} className={`w-full`}/>
                </div>
            </Link>
            <div className={`mb-2.5 flex gap-x-3 items-baseline`}>
                {product.charity ? <img src={paw} alt=""/> : null}
                {product.old_price ?
                    (<><span className={`${styles.newPrice}`}>{Intl.NumberFormat().format(product.price)} {RUB}</span> <span
                        className={`${styles.oldPrice} line-through`}>{Intl.NumberFormat().format(product.old_price)} {RUB}</span></>) : (
                        <span className={`${styles.price}`}>{Intl.NumberFormat().format(product.price)} {RUB}</span>)
                }
            </div>
            <Link href={`/catalog/${product.categoryUrl}/${product.alias}`}
                  className={`${styles.name} inline-block mb-3 hover:no-underline`}>{product.name}</Link>
            <div className={`flex gap-x-3 items-center mb-3 mt-auto`}>
                <div className={`flex`}>
                    <img src={star} alt="" className={`mr-0.5`}/>
                    <span className={`text-menuLink text-sm `}>4.9</span>
                </div>
                <div className={`${styles.brand}`}>{product.brand}</div>
            </div>
            <div className={`flex gap-x-3`}>
                {counter === 0 ? (
                    <button onClick={handleAddToCart}
                            className={`rounded-xl font-semibold py-3 px-7 text-base text-white bg-mainPurple hover:bg-purple-500`}>
                        В корзину
                    </button>
                ) : (
                    <div className={`flex border-mainPurple border-2 rounded-xl px-3.5 py-2 gap-x-4`}>
                        <img src={minus} alt="" onClick={handleRemove} className={`cursor-pointer`}/>
                        <span className={`w-6 text-center`}>{counter}</span>
                        <img src={plus} alt="" onClick={handleAdd} className={`cursor-pointer`}/>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Product;
