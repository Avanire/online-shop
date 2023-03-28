import React, {FC} from "react";
import HeaderButton from "../header-button/header-button";
import Bag from '../../../images/ShoppingCart.svg';
import Bookmark from "../../../images/Heart-top.svg";
import User from '../../../images/User.svg';
import {modelCart} from "../../models/cart";
import {useStore} from "effector-react";
import {modelFavorite} from "../../models/favorites";
import {Link} from "@inertiajs/react";

const HeaderCart: FC = () => {
    const cart = useStore(modelCart.$cart);
    const favorite = useStore(modelFavorite.$favoriteProducts);

    const handleCartClick = () => {
        modelCart.toggleCart(true);
    }

    return (
        <>
            <div className={`flex items-center gap-9`}>
                <HeaderButton image={User} link='#' text='Войти'/>
                <Link className={`flex flex-col justify-center items-center max-h-12 relative`} href='/favorite'>
                    {favorite && favorite.length > 0 && <span className={`absolute text-white text-xs font-semibold px-1.5 pb-0.5 bg-mainPurple rounded-full right-0 -top-2`}>{favorite.length}</span>}
                    <img src={Bookmark} alt="" className={`max-h-7`} />
                    <div className={`text-[var(--link-more)] text-center text-sm`}>Избранное</div>
                </Link>
                <button className={`flex flex-col justify-center items-center max-h-12 relative`} onClick={handleCartClick}>
                    {cart && cart.length > 0 && <span className={`absolute text-white text-xs font-semibold px-1.5 pb-0.5 bg-mainPurple rounded-full right-0 -top-2`}>{cart.length}</span>}
                    <img src={Bag} alt="" className={`max-h-7`} />
                    <div className={`text-[var(--link-more)] text-center text-sm`}>Корзина</div>
                </button>
            </div>

        </>
    );
}

export default HeaderCart;
