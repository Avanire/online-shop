import React, {FC, useState} from "react";
import HeaderButton from "../header-button/header-button";
// @ts-ignore
import Bag from '../../../images/Bag.svg';
// @ts-ignore
import Bookmark from "../../../images/Bookmark.svg";
// @ts-ignore
import User from '../../../images/User.svg';
import {Link} from "@inertiajs/react";
import {modelCart} from "../../models/cart";

const HeaderCart: FC = () => {

    const handleCartClick = () => {
        modelCart.toggleCart(true);
    }

    return (
        <>
            <div className={`flex items-center gap-9`}>
                <HeaderButton image={User} link='#' text='Войти'/>
                <HeaderButton image={Bookmark} link='#' text='Избранное'/>
                <button className={`flex flex-col justify-center max-h-12`} onClick={handleCartClick}>
                    <img src={Bag} alt=""/>
                    <div className={`text-[var(--link-more)] text-center text-sm`}>Корзина</div>
                </button>
            </div>

        </>
    );
}

export default HeaderCart;
