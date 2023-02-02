import React, {FC} from "react";
import HeaderButton from "../header-button/header-button";
// @ts-ignore
import Bag from '../../../images/ShoppingCart.svg';
// @ts-ignore
import Bookmark from "../../../images/Heart-top.svg";
// @ts-ignore
import User from '../../../images/User.svg';
import {modelCart} from "../../models/cart";
import {useStore} from "effector-react";

const HeaderCart: FC = () => {
    const cart = useStore(modelCart.$cart);

    const handleCartClick = () => {
        modelCart.toggleCart(true);
    }

    return (
        <>
            <div className={`flex items-center gap-9`}>
                <HeaderButton image={User} link='#' text='Войти'/>
                <HeaderButton image={Bookmark} link='#' text='Избранное'/>
                <button className={`flex flex-col justify-center max-h-12 relative`} onClick={handleCartClick}>
                    {cart && cart.length > 0 && <span className={`absolute text-white text-xs font-semibold px-1.5 pb-0.5 bg-mainPurple rounded-full right-0 -top-2`}>{cart.length}</span>}
                    <img src={Bag} alt=""/>
                    <div className={`text-[var(--link-more)] text-center text-sm`}>Корзина</div>
                </button>
            </div>

        </>
    );
}

export default HeaderCart;
