import React, {FC} from "react";
import {IProduct} from "../../utils/types";
import {RUB, STORAGE_URL} from "../../utils/constans";
// @ts-ignore
import styles from './product.module.css';
import Button from "../button/button";
// @ts-ignore
import hitImage from '../../../images/hit.svg';
// @ts-ignore
import newImage from '../../../images/new.svg';
// @ts-ignore
import star from '../../../images/Feedbackstar.svg';
// @ts-ignore
import paw from '../../../images/paws.svg';
// @ts-ignore
import bookmark from '../../../images/Bookmark-product.svg';
import {Link} from "@inertiajs/react";

const Product: FC<IProduct> = ({
                                   image,
                                   rating,
                                   count_rating,
                                   name,
                                   alias,
                                   brand,
                                   price,
                                   old_price,
                                   hit,
                                   new_product,
                                   charity,
                                   categoryUrl
                               }) => {


    return (
        <section className={`basis-52 flex-grow shrink-0 flex flex-col`}>
            <Link href={`${categoryUrl}/${alias}`} className={`${styles.imageBlock} block mb-4 hover:no-underline`}>
                <div className={`absolute top-2 left-2 flex gap-1`}>
                    {hit ? (<span><img src={hitImage} alt='хит'/></span>) : null}
                    {new_product ? (<span><img src={newImage} alt="новинка"/></span>) : null}
                </div>
                {old_price ? (
                    <span className={`${styles.tips} absolute bottom-3 left-3`}>-{Math.round(100 - (100 * (price / old_price)))}%</span>) : null}
                <img src={`${STORAGE_URL}${image}`} alt={name}/>
            </Link>
            <div className={`mb-2.5 flex gap-x-3 items-baseline`}>
                {charity ? <img src={paw} alt=""/> : null}
                {old_price ?
                    (<><span className={`${styles.newPrice}`}>{price} {RUB}</span> <span
                        className={`${styles.oldPrice} line-through`}>{old_price} {RUB}</span></>) : (
                        <span className={`${styles.price}`}>{price} {RUB}</span>)
                }
            </div>
            <Link href={alias} className={`${styles.name} inline-block mb-3 hover:no-underline`}>{name}</Link>
            <div className={`flex gap-x-3 items-center mb-3`}>
                <div className={`flex`}>
                    <img src={star} alt="" className={`mr-0.5`}/>
                    <span className={`text-menuLink text-sm `}>4.9</span>
                </div>
                <div className={`${styles.brand}`}>{brand}</div>
            </div>
            <div className={`flex mt-auto gap-x-3`}>
                <Button name='В корзину'/>
                <Link href={``} className={`p-3`}><img src={bookmark} alt=""/></Link>
            </div>
        </section>
    );
}

export default Product;
